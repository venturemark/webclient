import { useContext } from "react";

import {
  DefaultJoinVentureProps,
  PlasmicJoinVenture,
} from "component/plasmic/shared/PlasmicJoinVenture";
import { AuthContext } from "context/AuthContext";
import { UserContext } from "context/UserContext";
import { useUpdateInvite } from "module/hook/invite";
import { IUpdateInvite } from "module/interface/invite";

interface JoinVentureProps extends DefaultJoinVentureProps {}

function JoinVenture(props: JoinVentureProps) {
  const { mutate: updateInvite } = useUpdateInvite();
  const { token } = useContext(AuthContext);
  const ventureName = localStorage.getItem("ventureName");

  const handleAcceptJoin = () => {
    const ventureId = localStorage.getItem("ventureId");
    const timelineId = localStorage.getItem("timelineId");
    const code = localStorage.getItem("code");
    const id = localStorage.getItem("id");
    const resource = localStorage.getItem("resource");
    const role = localStorage.getItem("role");

    const inviteUpdate: IUpdateInvite = {
      id: id ?? "",
      ventureId: ventureId ?? "",
      timelineId: timelineId ?? "",
      code: code ?? "",
      resource: resource ?? "",
      role: role ?? "",
      successUrl: "/",
      status: "accepted",
      token,
    };

    updateInvite(inviteUpdate);
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
