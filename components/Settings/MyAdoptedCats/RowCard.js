import { useState, useEffect } from "react";
import Image from "next/image";
import { renameCat } from "../../../../helpers/general/renameCat";
import { showModal } from "../../../../helpers/showModal";
import styles from "./RowCard.module.scss";

export default function RowCard({
  record,
  index,
  setSelectedOption,
  onSelectCat,
  router,
  isFed,
  exists,
}) {
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState(record.label);

  function handleSelect(record) {
    /* if the request is coming from fulfill */
    if (onSelectCat) {
      onSelectCat(record);
    } else {
      /* if the request is coming from somewhere else */
      if (setSelectedOption) {
        setSelectedOption(record);
      }
    }
  }

  function handleRedirect() {
    router.push({
      pathname: `/delivery-details/${record.dId}`,
      query: { from: router.pathname, aId: record.aId, type: record.type },
    });
    showModal({ val: false, block: "u" });
  }

  useEffect(() => {
    if (!record.label) return;
    setName(record.label);
  }, [record]);

  function handleSave() {
    setEdit(false);

    if (name === record.label) return;
    if (name === "" || !name) return;
    renameCat({ name: name.trim(), cId: record.value });
  }

  return (
    <div
      className={styles.container}
      id={`rowM${index}`}
      onClick={router ? () => handleRedirect() : () => handleSelect(record)}
    >
      <div
        className={
          exists
            ? `${styles.container__wrapper} ${styles.hightlightRow}`
            : styles.container__wrapper
        }
      >
        <div className={styles.image__div}>
          <Image
            key={index}
            className={styles.image}
            src={record?.ava || ""}
            width={50}
            height={50}
            alt="adopted cat"
          />
        </div>
        <label className={styles.label}>
          <input
            className={styles.name}
            onChange={(e) => setName(e.target.value)}
            disabled={!edit}
            type="text"
            value={name && name}
          />
          {!setSelectedOption && !router && (
            <>
              {!edit && (
                <div
                  className="icon icon__pencil_notebook icon_s"
                  style={{ cursor: "pointer" }}
                  onClick={() => setEdit((prev) => !prev)}
                />
              )}
              {edit && (
                <div
                  className="icon icon__cloud icon_s"
                  style={{ cursor: "pointer" }}
                  onClick={handleSave}
                />
              )}
            </>
          )}
        </label>
        {record?.fAt && !isFed && (
          <div className={styles.cell}>{record?.fAt.slice(5, 16)}</div>
        )}
        {isFed && (
          <div className={styles.cell}>
            {record && new Date(Date.parse(record?.fAt)).toDateString()}
          </div>
        )}
      </div>
    </div>
  );
}
