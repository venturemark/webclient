import {
  DefaultMemberItemProps,
  PlasmicMemberItem,
} from "component/plasmic/shared/PlasmicMemberItem";

interface MemberItemProps extends DefaultMemberItemProps {
  user: {
    name?: string;
  };
  handleClick: any;
}

function MemberItem(props: MemberItemProps) {
  const { user, handleClick, ...rest } = props;
  return (
    <PlasmicMemberItem
      photoAvatar={{
        user,
      }}
      iconButton={{
        onClick: handleClick,
      }}
      {...rest}
    />
  );
}

export default MemberItem;
