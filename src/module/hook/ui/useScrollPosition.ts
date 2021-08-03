import { MutableRefObject, useContext, useEffect, useRef } from "react";

import { ScrollContext } from "context/ScrollContext";

export function useScrollPosition<T extends HTMLElement>(
  name: string
): MutableRefObject<T | null> {
  const scrollPosition = useContext(ScrollContext)["sidebar"];
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }
    function onScroll() {
      scrollPosition.current = element?.scrollTop || 0;
    }
    element.addEventListener("scroll", onScroll);
    return () => {
      element.removeEventListener("scroll", onScroll);
    };
  }, [ref, scrollPosition]);

  useEffect(() => {
    const element = ref.current;
    if (!element || element.scrollTop === scrollPosition.current) {
      return;
    }
    element.scrollTo({
      top: scrollPosition.current,
    });
  });

  return ref;
}
