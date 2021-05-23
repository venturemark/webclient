import {
  DefaultMemberItemProps,
  PlasmicMemberItem,
} from "component/plasmic/shared/PlasmicMemberItem";
import { IUser } from "module/interface/user";

interface MemberItemProps extends DefaultMemberItemProps {
  user: IUser;
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
