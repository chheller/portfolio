import React, { FC, CSSProperties } from "react";
import styles from './Link.module.css'
interface Props {
  href: string;
  children?: JSX.Element;
}
export const Link: FC<Props> = ({ href, children: text }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={styles.link} >
    {text}
  </a>
);
