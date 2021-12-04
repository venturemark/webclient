import {
  DefaultIconButtonMemberProps,
  PlasmicIconButtonMember,
} from "component/plasmic/shared/PlasmicIconButtonMember";

interface IconButtonMemberProps extends DefaultIconButtonMemberProps {}

function IconButtonMember(props: IconButtonMemberProps) {
  return <PlasmicIconButtonMember {...props} />;
}

export default IconButtonMember;
