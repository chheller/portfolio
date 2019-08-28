import React, { FC } from 'react';
import { NavBar } from './Nav/NavBar';
import { HomePage } from './Home/Home';
import { NavItem } from './Nav/NavItem';
import { Header } from './Common/Typography';

export const App: FC = () => {
  return (
    <div>
      <NavBar>
        <NavItem linkTo={'https://github.com/chheller'}>
          <Header size={18} color="white">
            Github
          </Header>
        </NavItem>
        <NavItem
          linkTo={
            'https://www.linkedin.com/in/charles-heller-055677113?trk=people-guest_profile-result-card_result-card_full-click'
          }
        >
          <Header size={18} color="white">
            LinkedIn
          </Header>
        </NavItem>
      </NavBar>
      <HomePage></HomePage>
    </div>
  );
};
