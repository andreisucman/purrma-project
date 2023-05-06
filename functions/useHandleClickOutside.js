import { useEffect } from "react";

export function useHandleClickOutside({ refOne, refTwo, setShow }) {
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      const passed =
        refOne && refTwo
          ? refOne.current !== null &&
            refOne.current !== undefined &&
            !refOne.current.contains(e.target) &&
            !refTwo.current.contains(e.target)
          : refOne.current !== null &&
            refOne.current !== undefined &&
            !refOne.current.contains(e.target);

      if (passed) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () =>
      document.removeEventListener("mousedown", checkIfClickedOutside);
  }, []);
  return <></>;
}
