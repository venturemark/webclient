import { Picker } from "emoji-mart";
import { ReactNode, useState } from "react";
import { usePopper } from "react-popper";

import useDropdown from "module/hook/ui/useDropdown";

type Props = {
  children: ReactNode | null;
  onClose?: () => void;
  onSelect?: (e: string) => void;
  closeOnSelect?: boolean;
  containerStyle?: any;
  buttonStyle?: any;
};

export function EmojiPicker(props: Props) {
  const [dropdownVisible, setDropdownVisible, dropdownRootRef] =
    useDropdown<HTMLDivElement>({ onClose: props.onClose });
  const [referenceElement, setReferenceElement] =
    useState<HTMLDivElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );
  const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [{ name: "arrow", options: { element: arrowElement } }],
    placement: "bottom-start",
  });

  return (
    <div ref={dropdownRootRef} style={{ zIndex: 100, ...props.containerStyle }}>
      <div
        style={{ background: "none", border: "none", ...props.buttonStyle }}
        onClick={(e) => {
          e.stopPropagation();
          setDropdownVisible(!dropdownVisible);
          if (dropdownVisible && props.onClose) {
            props.onClose();
          }
        }}
        ref={setReferenceElement}
      >
        {props.children}
      </div>

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
              props.closeOnSelect && setDropdownVisible(false);
            }}
          />
          <div ref={setArrowElement} style={styles.arrow} />
        </div>
      )}
    </div>
  );
}
