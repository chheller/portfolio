import React, { FC } from 'react';
import './NavBar.css';
interface Props {
  children: JSX.Element[];
}

export const NavBar: FC<Props> = ({ children }) => {
  return <ul className={'navBar'}>{children}</ul>;
};
