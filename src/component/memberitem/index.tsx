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
  return (
    <PlasmicMemberItem
      photoAvatar={{
        user,
      }}
      iconButton={{
        props: {
          onClick: handleClick,
        },
        wrap(node) {
          if (!handleClick) {
            return null;
          }
          return node;
        },
      }}
      {...rest}
    />
  );
}

export default MemberItem;
