import { useState } from "react";

import {
  DefaultMemberItemProps,
  PlasmicMemberItem,
} from "component/plasmic/shared/PlasmicMemberItem";

interface MemberItemProps extends DefaultMemberItemProps {
  user: {
    name?: string;
  };
  handleClick?: () => void;
}

function MemberItem(props: MemberItemProps) {
  const { user, handleClick, ...rest } = props;
  const [dropdownVisible, setDropdownVisible] = useState(false);
  let rename = "Remove member";
  if (props.userVariant === "isRequested") {
    rename = "Cancel invitation";
  } else if (props.userVariant === "isAdmin") {
    rename = "Remove admin";
  }

  return (
    <PlasmicMemberItem
      {...rest}
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
