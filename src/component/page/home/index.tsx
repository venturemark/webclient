import { withAuthenticationRequired } from "@auth0/auth0-react";
import { useContext, useState } from "react";

import {
  DefaultHomeProps,
  PlasmicHome,
} from "component/plasmic/shared/PlasmicHome";
import { UserContext } from "context/UserContext";
import { IUpdate } from "module/interface/update";

type VariantType = "isEmpty" | "isTimeline" | "isVenture" | undefined;
type IsActive = "feed" | "settings" | "members" | "isNewVenture" | undefined;
type IsVisible = "postDetails" | "mobileSidebar" | "showModal" | undefined;
type ModalType = "deleteTimeline" | "deleteVenture" | "editProfile" | undefined;

interface HomeProps extends DefaultHomeProps {
  timelineVariant?: "isTimeline";
  activeState?: IsActive;
  modalType?: ModalType;
  isVisible?: IsVisible;

  isActive?: IsActive;
  variantType?: VariantType;
}

export function Home(props: HomeProps) {
  const { isActive, variantType, modalType, isVisible: visibleProp } = props;

  const userContext = useContext(UserContext);
  const user = userContext?.user;

  // local hooks shared with page-level elements
  const [isVisible, setIsVisible] = useState<IsVisible>(visibleProp);
  const [post, setPost] = useState<IUpdate>();

  return (
    <>
      <PlasmicHome
        isVisible={isVisible}
        header={{
          isVisible,
          setIsVisible,
          user,
        }}
        modal={{
          isVisible,
          setIsVisible,
          modalType,
        }}
        main={{
          variantType,
          isActive,
          setIsVisible,
          isVisible,
          setPost,
          user,
        }}
        postDetails={{
          setIsVisible,
          post,
        }}
      />
    </>
  );
}

export default withAuthenticationRequired(Home);
