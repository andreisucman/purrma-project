import { memo, useRef } from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeList as List, areEqual } from "react-window";
import RowCard from "./RowCard";
import NoDataOverlay from "../common/NoDataOverlay";
import { showModal } from "../../functions/showModal";
import { useHandleClickOutside } from "../../functions/useHandleClickOutside";
import styles from "./ActionHistory.module.scss";

const Row = memo(
  ({ index, style, data }) => (
    <div style={style}>
      <RowCard record={data.historyList[index]} />
    </div>
  ),
  areEqual
);

export default function ActionHistory({ setShow, historyList }) {
  const modalRef = useRef(null);

  useHandleClickOutside({
    refOne: modalRef,
    setShow: () => showModal({ setShow, val: false, block: "u" }),
  });

  return (
    <div className={styles.container}>
      <div className={styles.container__wrapper} ref={modalRef}>
        <h2 className={styles.title}>
          <div className="icon icon__withdraw_money" />
          {"Transaction history"}
        </h2>
        <div className={styles.content}>
          <div
            className="close"
            onClick={() => showModal({ setShow, val: false, block: "u" })}
            style={{ backgroundSize: "75%" }}
          />
          {historyList?.length > 0 ? (
            <ul className={`${styles.list} no_scrollbar`}>
              <AutoSizer>
                {({ height, width }) => {
                  const params = {
                    historyList,
                  };
                  return (
                    <List
                      height={height}
                      itemCount={historyList.length}
                      itemSize={40}
                      itemData={params}
                      width={width}
                      className="no_scrollbar"
                    >
                      {Row}
                    </List>
                  );
                }}
              </AutoSizer>
            </ul>
          ) : (
            <NoDataOverlay
              message={"Your token transactions will show up here"}
              icon={"icon icon__square_lines"}
            />
          )}
        </div>
      </div>
    </div>
  );
}
