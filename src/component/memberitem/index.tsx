import {
  DefaultMemberItemProps,
  PlasmicMemberItem,
} from "component/plasmic/shared/PlasmicMemberItem";
import Select from "component/Select";

interface MemberItemProps extends DefaultMemberItemProps {
  user: {
    name?: string;
  };
  onDeleteInvite?: () => void;
  onDeleteMemberRole?: () => void;
  onUpdateMemberRole?: (role: string) => void;
}

function MemberItem(props: MemberItemProps) {
  const {
    user,
    onDeleteMemberRole,
    onUpdateMemberRole,
    onDeleteInvite,
    ...rest
  } = props;

  let action: (() => void) | undefined = onDeleteMemberRole;
  let rename = "Remove member";
  if (props.userVariant === "isRequested") {
    action = onDeleteInvite;
    rename = "Cancel invitation";
  } else if (props.userVariant === "isAdmin") {
    rename = "Remove admin";
  } else if (props.userVariant === "isSelf") {
    action = undefined;
  }

  return (
    <PlasmicMemberItem
      {...rest}
      photoAvatar={{
        user,
      }}
      ownerSelect={{
        wrap(node) {
          return action ? node : null;
        },
        props: {
          onChange: action,
          "aria-label": "Member action",
          children: <Select.Option value={rename} children={rename} />,
        },
      }}
    />
  );
}

export default MemberItem;
