import React, { FC } from 'react';
import './NavBar.css';
import { NavItem } from './NavItem';
import { Header } from '../Common/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export const NavBar: FC = () => {
  return (
    <ul className={'navBar'}>
      <NavItem linkTo={'https://github.com/chheller'}>
        <Header size={18} color="white">
          <FontAwesomeIcon
            icon={['fab', 'github']}
            color="white"
            size="lg"
            title="Github"
          ></FontAwesomeIcon>{' '}
          Github
        </Header>
      </NavItem>
      <NavItem
        linkTo={
          'https://www.linkedin.com/in/charles-heller-055677113?trk=people-guest_profile-result-card_result-card_full-click'
        }
      >
        <Header size={18} color="white">
          <FontAwesomeIcon
            icon={['fab', 'linkedin-in']}
            color="white"
            size="lg"
            title="LinkedIn"
          ></FontAwesomeIcon>{' '}
          LinkedIn
        </Header>
      </NavItem>
      <NavItem linkTo={'https://twitter.com/PresumptiveDx/'}>
        <Header size={18} color="white">
          <FontAwesomeIcon
            icon={['fab', 'twitter']}
            color="white"
            size="lg"
            title="Twitter"
          ></FontAwesomeIcon>{' '}
          Twitter
        </Header>
      </NavItem>
    </ul>
  );
};
