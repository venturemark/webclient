import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLImageElement> & {
  alt: string;
};

export function Image({ alt, ...rest }: Props) {
  return <img alt={alt} {...rest} />;
}
