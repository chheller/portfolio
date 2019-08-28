import React, { FC } from 'react';
import { BackgroundSplash } from './BackgroundSplash';
import { Text, Header } from '../Common/Typography';
import './Home.css';

export const HomePage: FC = () => {
  return (
    <div>
      <div className="container">
        <div className="hero">
          <Header bold size={72}>
            Charles Heller
          </Header>
          <Text center size={28}>
            Developer * Cat Dad * Coffee Enthusiast
          </Text>
        </div>
      </div>
      <BackgroundSplash></BackgroundSplash>
    </div>
  );
};
