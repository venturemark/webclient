import { useLocation } from "react-router-dom";
import emailjs from "emailjs-com";
import { IEmailInvite } from "module/interface/email";
import { ICreateInvite } from "module/interface/invite";

export function isDev(): boolean {
  const development: boolean =
    !process.env.NODE_ENV || process.env.NODE_ENV === "development";
  return development;
}

export function makeVentureUrl(url: string): string {
  const address = isDev()
    ? `http://localhost:3006/${url}`
    : `https://beta.venturemark.co/${url}`;
  return address;
}

export function makeInviteLink(params: URLSearchParams): string {
  const address = isDev()
    ? `http://localhost:3006/invite?${params}`
    : `https://beta.venturemark.co/invite?${params}`;
  return address;
}

export function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export function getUniqueListBy(arr: any[], key: string) {
  return [...new Map(arr.map((item) => [item[key], item])).values()];
}

export function getLastItem(thePath: string) {
  return thePath.substring(thePath.lastIndexOf("/") + 1);
}

export function sendInvite(inviteData: any, invite: ICreateInvite) {
  const params = new URLSearchParams({
    ventureId: invite.ventureId,
    ventureName: invite.fromVentureName,
    code: inviteData.code,
    id: inviteData.id,
  });

  const templateParams: IEmailInvite = {
    to_name: "",
    user_email: invite.email,
    from_name: invite.fromName,
    venture_name: invite.fromVentureName,
    invite_link: makeInviteLink(params),
    message: `Please click the link to receive updates about ${invite.fromVentureName} on Venturemark.co`,
  };

  emailjs
    .send(
      "service_4fkfbos",
      "template_iifu2kt",
      templateParams,
      "user_mRFm0l0xiY3CK24bkQMdu"
    )
    .then(
      function (response) {
        console.log("email sent!", response.status, response.text);
      },
      function (error) {
        console.log("failed to send email", error);
      }
    );
}
