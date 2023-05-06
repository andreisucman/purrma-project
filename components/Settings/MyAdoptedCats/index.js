import { useState, useRef } from "react";
import { useRouter } from "next/router";
import AdoptedCatsList from "./AdoptedCatsList";
import { useHandleClickOutside } from "../../../../helpers/useHandleClickOutside";
import { showModal } from "../../../../helpers/showModal";
import styles from "./MyAdoptedCats.module.scss";

export default function MyAdoptedCats({ setShowAdoptedCats }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const contRef = useRef(null);
  const router = useRouter();

  function redirectToAdoption() {
    showModal({ setShow: setShowAdoptedCats, val: false, block: "u" });
    router.push("/adopt-a-cat");
  }

  useHandleClickOutside({
    refOne: contRef,
    setShow: () =>
      showModal({ setShow: setShowAdoptedCats, val: false, block: "u" }),
  });

  return (
    <div className={styles.container}>
      <div className={styles.container__wrapper} ref={contRef}>
        <div
          className="close"
          onClick={() =>
            showModal({ setShow: setShowAdoptedCats, val: false, block: "u" })
          }
          style={{ backgroundSize: "75%" }}
        />
        <AdoptedCatsList
          title={"My adopted cats"}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          router={router}
          showLink={true}
          onRedirect={redirectToAdoption}
        />
      </div>
    </div>
  );
}
