export function showModal({ setShow, val, block }) {
  const body = document.getElementById("body");
  const isFixed = Array.from(body.classList).includes("no_scroll");

  block === "b"
    ? body.classList.add("no_scroll")
    : block === "u"
    ? body.classList.remove("no_scroll")
    : isFixed
    ? body.classList.remove("no_scroll")
    : body.classList.add("no_scroll");

  if (setShow) {
    setShow(val ? val : (prev) => !prev);
  }
}
