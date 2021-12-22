import { SingleBooleanChoiceArg } from "@plasmicapp/react-web";
import emailjs from "emailjs-com";
import { useLocation } from "react-router-dom";

import { IEmailInvite } from "module/interface/email";
import { ICreateInvite, IInvite } from "module/interface/invite";
import { UserRole } from "module/interface/user";

export function isDev(): boolean {
  const development: boolean =
    !process.env.NODE_ENV || process.env.NODE_ENV === "development";
  return development;
}

export function makeVentureUrl(url: string): string {
  const address = isDev()
    ? `http://localhost:3006/${url}`
    : `https://beta.breadcrumb.so/${url}`;
  return address;
}

export function makeInviteLink(params: URLSearchParams): string {
  const address = isDev()
    ? `http://localhost:3006/invite?${params}`
    : `https://beta.breadcrumb.so/invite?${params}`;
  return address;
}

export function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export function getUniqueListBy<T extends Record<K, any>, K extends string>(
  arr: Array<T>,
  key: K
) {
  return [...new Map(arr.map((item) => [item[key], item])).values()];
}

export function getLastItem(thePath: string) {
  return thePath.substring(thePath.lastIndexOf("/") + 1);
}

export function sendInvite(inviteData: IInvite, invite: ICreateInvite) {
  const params = new URLSearchParams({
    ventureId: invite.ventureId,
    timelineId: invite.timelineId ?? "",
    ventureName: invite.fromVentureName,
    code: inviteData.code,
    id: inviteData.id,
    resource: invite.resource,
    role: invite.role,
  } as Record<string, string>);

  const templateParams: IEmailInvite = {
    to_name: "",
    to_email: invite.email,
    from_name: invite.fromName,
    venture_name: invite.fromVentureName,
    invite_link: makeInviteLink(params),
    message: `Please click the link to receive updates about ${invite.fromVentureName} on Breadcrumb.co`,
  };

  emailjs.send(
    "service_4fkfbos",
    "template_iifu2kt",
    templateParams,
    "user_mRFm0l0xiY3CK24bkQMdu"
  );
}

export function calculateNamedSlug(named?: { name: string }): string {
  return calculateSlug(named?.name || "");
}

export function calculateSlug(name: string): string {
  return name.toLowerCase().replace(/\s/g, "");
}

type RestrictedResource = {
  userRole?: UserRole;
  membersWrite: boolean;
};

export function resourceOwnership(
  resource?: RestrictedResource
): SingleBooleanChoiceArg<"isOwner"> {
  if (!resource) {
    return false;
  }
  if (resource.userRole === "owner") {
    return "isOwner";
  }
  if (resource.userRole === "member" && resource.membersWrite) {
    return "isOwner";
  }
  return false;
}
