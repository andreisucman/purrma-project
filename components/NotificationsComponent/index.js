import useSWR from "swr";
import Icon from "./Icon";
import { useRouter } from "next/router";
import AutoSizer from "react-virtualized-auto-sizer";
import { useState, useRef, memo } from "react";
import { FixedSizeList as List, areEqual } from "react-window";
import RowNotifications from "./RowNotifications";
import NoDataOverlay from "../common/NoDataOverlay";
import { getNotifications } from "../../functions/getNotifications";
import { useHandleClickOutside } from "../../functions/useHandleClickOutside";
import { checkImpNotifs } from "../../functions/checkImpNotifs";
import { markRead } from "../../functions/markRead";
import styles from "./NotificationsComponent.module.scss";

const Row = memo(
  ({ data, index, style }) => (
    <div style={style} key={index}>
      <RowNotifications record={data[index]} />
    </div>
  ),
  areEqual
);

function NotificationsComponent({ user }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [list, setList] = useState(null);
  const [areImpNotifs, setAreImpNotifs] = useState(false);

  const router = useRouter();
  const { pathname } = router;

  const iconRef = useRef(null);
  const menuRef = useRef(null);

  if (user?.objectId) {
    useSWR(
      {
        setList,
      },
      getNotifications
    );

    useSWR({ setAreImpNotifs }, checkImpNotifs, {
      refreshInterval: 600000,
    });
  }

  useHandleClickOutside({
    refOne: menuRef,
    refTwo: iconRef,
    setShow: setIsMenuOpen,
  });

  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <Icon
          iconRef={iconRef}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
        {areImpNotifs && (
          <div
            className={`icon
            icon__red_circle
            icon_xs
            ${styles.icon__circle}`}
            style={{ backgroundSize: "65%" }}
          />
        )}
      </div>
      <div
        ref={menuRef}
        className={
          isMenuOpen
            ? styles.container__content
            : `${styles.container__content} hide`
        }
      >
        <div className={styles.title}>
          <div className={styles.title__wrapper}>
            <div className="icon icon__square_lines icon_sm" />
            Notifications
          </div>
          <div
            className={
              areImpNotifs
                ? `${styles.title__read} icon icon__envelope_checkmark icon_sm`
                : `${styles.title__read} icon icon__open_envelope icon_xs`
            }
            onClick={
              areImpNotifs
                ? () => markRead({ isAr: true, setAreImpNotifs })
                : undefined
            }
          />
        </div>
        <div className={styles.list}>
          {list?.length > 0 ? (
            <div className={`${styles.list__wrapper} no_scrollbar`}>
              <AutoSizer>
                {({ height, width }) => {
                  return (
                    <List
                      height={height}
                      itemCount={list.length}
                      itemData={list}
                      itemSize={35}
                      width={width}
                      className="no_scrollbar"
                    >
                      {Row}
                    </List>
                  );
                }}
              </AutoSizer>
            </div>
          ) : (
            <NoDataOverlay
              icon="icon icon__square_lines icon_s"
              message="No notificaitons"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default memo(NotificationsComponent);
