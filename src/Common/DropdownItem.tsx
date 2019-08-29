import React, { FC, ReactNode } from "react";
import styles from './Dropdown.module.css'
interface Props {
  children?: ReactNode
}
export const DropdownItem: FC<Props> = ({ children }) => {

  return <li className={styles.dropdownItem}>{Boolean(children) ? children : ''}</li>;
};
