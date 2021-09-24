import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLLIElement>;

export function ListItem(props: Props) {
  return <li {...props} />;
}
