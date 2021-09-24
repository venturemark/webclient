import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLUListElement>;

export function UnorderedList(props: Props) {
  return <ul {...props} />;
}
