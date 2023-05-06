import { useState, useEffect, useRef, memo } from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeList as List, areEqual } from "react-window";
import SearchDropdown from "../../../common/SearchDropdown";
import NoDataOverlay from "../../../common/NoDataOverlay";
import LoadMoreButton from "../../../common/LoadMoreButton";
import { getAdoptedCats } from "../../../../helpers/fulfill/getAdoptedCats";
import { getFedAdoptedList } from "../../../../helpers/user/getFedAdoptedList";
import Loading from "../../../common/Loading";
import RowCard from "./RowCard";
import styles from "./AdoptedCatsList.module.scss";

const Row = memo(({ data, index, style }) => {
  const exists = useRef(null);

  exists.current = data?.selectedCats
    ?.map((e) => e.value)
    .includes(data?.selectedCats[index]?.value);

  return (
    <div
      style={style}
      key={data?.data[index]?.value}
      className={styles.highlightRow}
    >
      <RowCard
        index={index}
        record={data?.data[index]}
        setSelectedOption={data?.setSelectedCats}
        isFed={data?.isFed}
        onSelectCat={data?.onSelectCat}
        router={data?.router}
        exists={exists.current}
      />
    </div>
  );
}, areEqual);

export default function AdoptedCatsList({
  aId,
  data,
  title,
  isFed,
  router,
  showLink,
  onRedirect,
  onSelectCat,
  selectedCats,
  setSelectedCats,
}) {
  const [list, setList] = useState();
  const [searchText, setSearchText] = useState(null);

  useEffect(() => {
    // if the data is provided from outside don't fetch it
    if (data) {
      return setList({ data: [...data.data], count: data.data.length });
    }

    getAdoptedCats({
      list,
      setList,
    });
  }, []);

  function handleSetSeachText(value) {
    if (value !== "") {
      setSearchText(value);
    }
  }

  async function onSubmit() {
    if (isFed) {
      /* If this is saved from streets screen from user profile page */
      if (!data) {
        /* if the data is not provided from the top, fetch it */
        if (searchText.trim().length > 0) {
          getFedAdoptedList({ aId, searchText, list, setList });
        } else {
          getFedAdoptedList({ aId, list, setList });
        }
      } else {
        /* If the data is provided from the top juster filter it */
        if (searchText.trim().length > 0) {
          const filtered = data.filter(
            (r) => r.label.toLowerCase() === searchText.toLowerCase()
          );
          setList({ data: filtered, count: filtered.length });
        } else {
          setList({ data, count: data.length });
        }
      }
    } else {
      /* If this is the adopted cats screen from settings */
      if (!data) {
        /* if the data is not provided from the top, fetch it */
        if (searchText.trim().length > 0) {
          getAdoptedCats({ searchText, list, setList });
          setSearchText("");
        } else {
          getAdoptedCats({ list, setList });
        }
      } else {
        /* If the data is provided from the top juster filter it */
        if (searchText.trim().length > 0) {
          const filtered = data.filter(
            (r) => r.label.toLowerCase() === searchText.toLowerCase()
          );
          setList({ data: filtered, count: filtered.length });
        } else {
          setList({ data, count: data.length });
        }
      }
    }
  }

  function handleLoadMore() {
    if (isFed) {
      getFedAdoptedList({ aId, list, setList, skip: list?.count });
    } else {
      getAdoptedCats({
        searchText,
        skip: list?.count,
        list,
        setList,
      });
    }
  }

  return (
    <section className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <SearchDropdown
        onSubmit={onSubmit}
        setSelectedOption={onSelectCat ? onSelectCat : setSelectedCats}
        handleSetSeachText={handleSetSeachText}
      />
      {list?.data?.length > 0 ? (
        <div className={styles.content}>
          {list?.data ? (
            <>
              <AutoSizer>
                {({ height, width }) => {
                  const params = {
                    isFed,
                    onSelectCat,
                    data: list?.data,
                    selectedCats,
                    setSelectedOption: setSelectedCats,
                  };

                  if (!showLink) {
                    params.router = router;
                  }

                  return (
                    <List
                      height={height}
                      itemCount={list?.data?.length}
                      itemSize={75}
                      itemData={params}
                      width={width}
                      className="no_scrollbar"
                    >
                      {Row}
                    </List>
                  );
                }}
              </AutoSizer>
              {list?.more && list?.count === 10 && (
                <LoadMoreButton handleClick={handleLoadMore} />
              )}
            </>
          ) : (
            <Loading />
          )}
        </div>
      ) : (
        <NoDataOverlay
          icon="icon icon__cat_face"
          message={"Your adopted cats will show up here"}
        />
      )}
      {onRedirect && (
        <div className={styles.link} onClick={onRedirect}>
          <div className="icon icon__cat_face" />
          Adopt a cat
        </div>
      )}
    </section>
  );
}
