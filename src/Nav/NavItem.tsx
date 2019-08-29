import React, { FC } from "react";
import styles from "./NavBar.module.css";
interface Props {
  children?: JSX.Element[] | JSX.Element | string;
  className?: string;
}
export const NavItem: FC<Props> = ({ children, className = "" }) => {
  return <li className={`${styles.navItem} ${className}`}>{children}</li>;
};
