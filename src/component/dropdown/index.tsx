import {
  DefaultDropdownProps,
  PlasmicDropdown,
} from "component/plasmic/shared/PlasmicDropdown";

interface DropdownProps extends DefaultDropdownProps {
  href: string;
  onClick?: () => void;
}

function Dropdown(props: DropdownProps) {
  const { href, ...rest } = props;

  return (
    <PlasmicDropdown
      {...rest}
      onClick={(e) => {
        e.stopPropagation();
        props.onClick?.();
      }}
      overrides={
        href
          ? {
              listItem: {
                props: {
                  href,
                },
              },
            }
          : {}
      }
    />
  );
}

export default Dropdown;
