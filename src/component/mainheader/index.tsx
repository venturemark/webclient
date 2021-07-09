import { useNavigate, useParams } from "react-router-dom";

import {
  DefaultMainHeaderProps,
  PlasmicMainHeader,
} from "component/plasmic/shared/PlasmicMainHeader";

interface MainHeaderProps extends DefaultMainHeaderProps {
  isActive: any;
  variantType: string;
  isOnboarding?: boolean | "isOnboarding";
}

function MainHeader(props: MainHeaderProps) {
  const { isActive, variantType, isOnboarding, ...rest } = props;
  const { timelineSlug, ventureSlug } = useParams();
  const navigate = useNavigate();

  const basePath = timelineSlug
    ? `/${ventureSlug}/${timelineSlug}`
    : `/${ventureSlug}`;

  return (
    <PlasmicMainHeader
      {...rest}
      headerStyles={
        (variantType === "isVenture" && !ventureSlug) || !ventureSlug
          ? "createNewVenture"
          : !timelineSlug
          ? "ventureHeader"
          : "timelineHeader"
      }
      viewHome={{
        onClick: () => navigate(basePath + "/feed"),
      }}
      viewMembers={{
        onClick: () => navigate(basePath + "/members"),
      }}
      viewSettings={{
        onClick: () => navigate(basePath + "/settings"),
      }}
      isActive={isActive}
    />
  );
}

export default MainHeader;
