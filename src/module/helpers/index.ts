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
