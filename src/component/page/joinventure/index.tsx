import { useContext } from "react";

import {
  DefaultJoinVentureProps,
  PlasmicJoinVenture,
} from "component/plasmic/shared/PlasmicJoinVenture";
import { AuthContext } from "context/AuthContext";
import { UserContext } from "context/UserContext";
import { useQuery } from "module/helpers";
import { useUpdateInvite } from "module/hook/invite";

interface JoinVentureProps extends DefaultJoinVentureProps {}

function JoinVenture(props: JoinVentureProps) {
  const { mutate: updateInvite } = useUpdateInvite();
  const { token } = useContext(AuthContext);

  const query = useQuery();
  const ventureId = query.get("ventureId") ?? "";
  const timelineId = query.get("timelineId") ?? "";
  const code = query.get("code") ?? "";
  const id = query.get("id") ?? "";
  const ventureName = query.get("ventureName") ?? "";
  const resource = query.get("resource") ?? "";
  const role = query.get("role") ?? "";

  const handleAcceptJoin = () => {
    updateInvite({
      id: id ?? "",
      ventureId: ventureId ?? "",
      timelineId: timelineId ?? "",
      code: code ?? "",
      resource: resource ?? "",
      role: role ?? "",
      successUrl: "/",
      status: "accepted",
      token,
    });
  };

  const userContext = useContext(UserContext);
  const user = userContext?.user;

  return (
    <PlasmicJoinVenture
      header={{
        user,
      }}
      ventureName={ventureName}
      viewCreateVenture={{ onPress: () => handleAcceptJoin() }}
      {...props}
    />
  );
}

export default JoinVenture;
