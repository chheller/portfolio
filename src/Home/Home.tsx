import React, { FC } from 'react';
import { BackgroundSplash } from './BackgroundSplash';
import { Text, Header } from '../Common/Typography';
import styles from './Home.module.css';

export const HomePage: FC = () => {
  return (
    <div>
      <div className={styles.container}>
        <Header bold size={72}>
          Charles Heller
          </Header>
        <div className={styles.description}>
          <hr className={styles.fancyHr}></hr>

          <Text center size={28}>
            Developer
          </Text>
          <Text center size={28} margin={'8px'}>
            Coffee Enthusiast
          </Text>
          <Text center size={28} margin={'8px'}>
            Cat Dad
          </Text>
        </div>
      </div>
      <BackgroundSplash></BackgroundSplash>
    </div>
  );
};
