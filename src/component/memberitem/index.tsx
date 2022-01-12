import {
  DefaultMemberItemProps,
  PlasmicMemberItem,
} from "component/plasmic/shared/PlasmicMemberItem";
import Select from "component/Select";

interface MemberItemProps extends DefaultMemberItemProps {
  user: {
    name?: string;
  };
  handleClick?: () => void;
}

function MemberItem(props: MemberItemProps) {
  const { user, handleClick, ...rest } = props;

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
      ownerSelect={{
        props: {
          onChange: handleClick,
          "aria-label": "Member action",
          children: <Select.Option value={rename} children={rename} />,
        },
      }}
    />
  );
}

export default MemberItem;
