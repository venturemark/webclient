import {
  DefaultMemberItemProps,
  PlasmicMemberItem,
} from "component/plasmic/shared/PlasmicMemberItem";
import useDropdown from "module/hook/ui/useDropdown";

interface MemberItemProps extends DefaultMemberItemProps {
  user: {
    name?: string;
  };
  handleClick?: () => void;
}

function MemberItem(props: MemberItemProps) {
  const { user, handleClick, ...rest } = props;

  const [dropdownVisible, setDropdownVisible, dropdownRootRef] =
    useDropdown<HTMLDivElement>();

  let rename = "Remove member";
  if (props.userVariant === "isRequested") {
    rename = "Cancel invitation";
  } else if (props.userVariant === "isAdmin") {
    rename = "Remove admin";
  }

  return (
    <PlasmicMemberItem
      {...rest}
      root={{
        ref: dropdownRootRef,
      }}
      photoAvatar={{
        user,
      }}
      isDropdown={dropdownVisible ? "isDropdown" : undefined}
      iconButton={{
        props: {
          onClick() {
            setDropdownVisible(!dropdownVisible);
          },
        },
      }}
      removeInvitation={{
        rename,
        onClick: handleClick,
      }}
    />
  );
}

export default MemberItem;
