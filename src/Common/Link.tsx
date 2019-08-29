import React, { FC, CSSProperties } from "react";
interface Props {
  href: string;
  style?: CSSProperties;
  children?: JSX.Element;
}
export const Link: FC<Props> = ({ href, style, children: text }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" style={style}>
    {text}
  </a>
);
