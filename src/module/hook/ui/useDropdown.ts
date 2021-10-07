import { MutableRefObject, useEffect, useRef, useState } from "react";

type AnyEvent = MouseEvent | TouchEvent;

type Options = {
  onClose?: () => void;
};

export default function useDropdown<T extends HTMLElement = HTMLElement>(
  options?: Options
): [boolean, (v: boolean) => void, MutableRefObject<T | null>] {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const listener = (event: AnyEvent) => {
      const el = ref?.current;

      // Do nothing if clicking ref's element or descendent elements
      if (!el || el.contains(event.target as Node)) {
        return;
      }

      setDropdownVisible(false);
      if (dropdownVisible) {
        options?.onClose?.();
      }
    };

    document.addEventListener(`mousedown`, listener);
    document.addEventListener(`touchstart`, listener);

    return () => {
      document.removeEventListener(`mousedown`, listener);
      document.removeEventListener(`touchstart`, listener);
    };

    // Reload only if ref or handler changes
  }, [ref, options, setDropdownVisible, dropdownVisible]);

  return [dropdownVisible, setDropdownVisible, ref];
}
