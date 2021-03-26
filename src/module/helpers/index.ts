import { useLocation } from "react-router-dom";

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
