// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import React from "react";
import {
  PlasmicJoinVenture,
  DefaultJoinVentureProps,
} from "component/plasmic/shared/PlasmicJoinVenture";
import { useUpdateInvite } from "module/hook/invite";
import { IUpdateInvite } from "module/interface/invite";
import { useGetToken } from "module/auth";

interface JoinVentureProps extends DefaultJoinVentureProps {}

function JoinVenture(props: JoinVentureProps) {
  const { mutate: updateInvite } = useUpdateInvite();
  const token = useGetToken();
  const ventureName = localStorage.getItem("ventureName");

  const handleAcceptJoin = () => {
    const ventureId = localStorage.getItem("ventureId");
    const code = localStorage.getItem("code");
    const id = localStorage.getItem("id");
    const resource = localStorage.getItem("resource");
    const role = localStorage.getItem("role");

    const inviteUpdate: IUpdateInvite = {
      id: id ?? "",
      ventureId: ventureId ?? "",
      code: code ?? "",
      resource: resource ?? "",
      role: role ?? "",
      successUrl: "/",
      status: "accepted",
      token,
    };

    updateInvite(inviteUpdate);
  };

  return (
    <PlasmicJoinVenture
      ventureName={ventureName}
      viewCreateVenture={{ onPress: () => handleAcceptJoin() }}
      {...props}
    />
  );
}

export default JoinVenture;
