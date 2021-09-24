import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLParagraphElement>;

export function Paragraph(props: Props) {
  return (
    <p
      {...props}
      style={{
        fontFamily: "Poppins, sans-serif",
        fontSize: "15px",
        lineHeight: "23px",
        letterSpacing: "0.491786px",
        fontWeight: 400,
        margin: 0,
        ...(props.style || {}),
      }}
    />
  );
}
