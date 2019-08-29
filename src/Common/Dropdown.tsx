import React, { FC, ReactNode } from "react";
import { Text } from "./Typography";
import { useHover } from "./useHover";
import styles from './Dropdown.module.css'

interface Props {
  title: JSX.Element | string;
  isOpen: boolean;
  className?: string;
  children?: ReactNode;
}
export const Dropdown: FC<Props> = ({ title, children, className, isOpen }) => {

  return (
    <div className={className}>
      {typeof title === "string" ? <Text>{title}</Text> : title}
      <ul className={styles.dropdownContent}>{isOpen && children}</ul>
    </div>
  );
};
