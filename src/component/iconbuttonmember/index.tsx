import {
  DefaultIconButtonMemberProps,
  PlasmicIconButtonMember,
} from "component/plasmic/shared/PlasmicIconButtonMember";

interface IconButtonMemberProps extends DefaultIconButtonMemberProps {
  onClick?: () => void;
}

function IconButtonMember(props: IconButtonMemberProps) {
  const { onClick, ...rest } = props;
  return <PlasmicIconButtonMember onClick={onClick} {...rest} />;
}

export default IconButtonMember;
