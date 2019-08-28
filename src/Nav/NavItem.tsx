import React, { FC } from 'react';
import './NavItem.css';
interface Props {
  linkTo?: string;
  children: JSX.Element;
}
export const NavItem: FC<Props> = ({ linkTo, children: text }) => {
  return (
    <li>
      <a href={linkTo} target="_blank">
        {text}
      </a>
    </li>
  );
};
