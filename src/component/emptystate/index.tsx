import { useNavigate, useParams } from "react-router-dom";

import {
  DefaultEmptyStateProps,
  PlasmicEmptyState,
} from "component/plasmic/shared/PlasmicEmptyState";

interface EmptyStateProps extends DefaultEmptyStateProps {
  variantType?: any;
  isActive?: any;
}

function EmptyState(props: EmptyStateProps) {
  const { variantType, isActive, ...rest } = props;
  const { ventureId } = useParams();
  const navigate = useNavigate();
  return (
    <PlasmicEmptyState
      {...rest}
      variantType={variantType}
      isActive={isActive}
      viewCreateVenture={{
        onPress: () => navigate("/newventure"),
      }}
      viewCreateTimeline={{
        onPress: () => navigate(`/${ventureId}/newtimeline`),
      }}
    />
  );
}

export default EmptyState;
