import { useEffect, useRef } from "react";

function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClickEvnt(e) {
        if (ref.current && !ref.current.contains(e.target)) handler();
      }
      document.addEventListener("click", handleClickEvnt, listenCapturing); // here 'true' is for event capturing

      // cleanup function
      return () =>
        document.removeEventListener("click", handleClickEvnt, listenCapturing);
    },
    [handler, listenCapturing]
  );
  return ref;
}

export default useOutsideClick;
