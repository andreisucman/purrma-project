import useSWR from "swr";
import Dropdown from "../../report/Dropdown";
import { useState, useRef } from "react";
import { getOpenCountries } from "../../../helpers/login/getOpenCountries";
import { saveCountry } from "../../../helpers/workspace/saveCountry";
import ConfirmationAlert from "../../common/ConfirmationAlert";
import styles from "./SelectCountry.module.scss";

export default function SelectCountry({
  type,
  isM,
  acc,
  setAcc,
  isFirstTime,
  globalSelectRef,
}) {
  const [isDisabled, setIsDisabled] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState({
    label: isM ? acc && acc.m && acc.m.cntr : acc && acc.s && acc.s.cntr,
    value: isM ? acc && acc.m && acc.m.cnCd : acc && acc.s && acc.s.cnCd,
  });
  const [confirmationMessage, setConfirmationMessage] = useState(
    "Your stats will not be carried to the new country, but will remain in the current one. You can always switch back to access them."
  );
  const [showConfirmationAlert, setShowConfirmationAlert] = useState(false);
  const [openCountries, setOpenCountries] = useState([]);
  const [openCountriesCopy, setOpenCountriesCopy] = useState([]);
  const localSelectRef = useRef(null);

  useSWR({ isM, setOpenCountries, setOpenCountriesCopy }, getOpenCountries);

  function handleChangeCountry(option) {
    saveCountry({
      acc,
      setAcc,
      cntr: option.label,
      cnCd: option.value,
      isM,
      type,
    });

    setShowConfirmationAlert(false);
  }

  function handleClickEdit() {
    setIsDisabled((prev) => !prev);

    // give 100ms for the setter above to do his job
    setTimeout(() => {
      isFirstTime
        ? globalSelectRef.current.focus()
        : localSelectRef.current.focus();
    }, 100);
  }

  function triggerConfirmation(country) {
    if (selectedCountry.label !== country) {
      setShowConfirmationAlert(true);
    } else {
      setIsDisabled((prev) => !prev);
    }
  }

  return (
    <div className={styles.container}>
      {showConfirmationAlert && !isFirstTime && (
        <ConfirmationAlert
          acc={acc}
          message={confirmationMessage}
          setShowAlert={setShowConfirmationAlert}
          selectedCountry={selectedCountry}
          handleChangeCountry={handleChangeCountry}
          setIsDisabled={setIsDisabled}
          setSelectedCountry={setSelectedCountry}
          isM={isM}
        />
      )}
      <div className={styles.container__wrapper}>
        {isDisabled && !isFirstTime && <div className={styles.overlay} />}
        <Dropdown
          isDisabled={isFirstTime ? false : isDisabled}
          placeholder="Choose a country"
          handleClick={isFirstTime ? handleChangeCountry : setSelectedCountry}
          selectedOption={selectedCountry}
          setSelectedOption={setSelectedCountry}
          selectRef={isFirstTime ? globalSelectRef : localSelectRef}
          isFirstTime={isFirstTime}
          options={openCountries}
          origOptions={openCountriesCopy}
          setOptions={setOpenCountries}
        />

        {isDisabled ? (
          <>
            {!isFirstTime && (
              <button className={styles.button} onClick={handleClickEdit}>
                Edit
              </button>
            )}
          </>
        ) : (
          <>
            {!isFirstTime && (
              <button
                className={styles.button}
                onClick={() =>
                  triggerConfirmation(isM ? acc.m.cntr : acc.s.cntr)
                }
              >
                Save
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}
