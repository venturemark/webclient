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
  return (
    <PlasmicMemberItem
      photoAvatar={{
        user,
      }}
      userVariant="isSelf"
      isOwner="isOwner"
      isDropdown={dropdownVisible ? "isDropdown" : undefined}
      iconButton={{
        props: {
          onClick() {
            setDropdownVisible(!dropdownVisible);
          },
        },
      }}
      {...rest}
    />
  );
}

export default MemberItem;
