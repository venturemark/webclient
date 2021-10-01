import { Picker } from "emoji-mart";
import { ReactNode, useState } from "react";
import { usePopper } from "react-popper";

import useDropdown from "module/hook/ui/useDropdown";

type Props = {
  children: ReactNode | null;
  onClose?: () => void;
  onSelect?: (e: string) => void;
};

export function EmojiPicker(props: Props) {
  const [dropdownVisible, setDropdownVisible, dropdownRootRef] =
    useDropdown<HTMLDivElement>({ onClose: props.onClose });
  const [referenceElement, setReferenceElement] =
    useState<HTMLButtonElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );
  const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [{ name: "arrow", options: { element: arrowElement } }],
    placement: "bottom-start",
  });

  return (
    <div ref={dropdownRootRef} style={{ zIndex: 100 }}>
      <button
        style={{ background: "none", border: "none" }}
        onClick={(e) => {
          e.stopPropagation();
          setDropdownVisible(!dropdownVisible);
          if (dropdownVisible && props.onClose) {
            props.onClose();
          }
        }}
        type="button"
        ref={setReferenceElement}
      >
        {props.children}
      </button>

      {dropdownVisible && (
        <div
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
        >
          <Picker
            showPreview={false}
            showSkinTones={false}
            onClick={(_, event) => {
              event.stopPropagation();
            }}
            onSelect={(e) => {
              if (!("native" in e)) return;
              props.onSelect && props.onSelect(e.native);
            }}
          />
          <div ref={setArrowElement} style={styles.arrow} />
        </div>
      )}
    </div>
  );
}
