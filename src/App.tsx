import React, { FC } from 'react';
import { HomePage } from './Home/Home';
import { NavBar } from './Nav/NavBar';

export const App: FC = () => {
  return (
    <div>
      <NavBar></NavBar>
      <HomePage></HomePage>
    </div>
  );
};
