import React, { FC } from 'react';
import styles from './BackgroundSplash.module.css';

export const BackgroundSplash: FC = () => {
  return (
    <div>
      <div className={styles.background}>

      </div>
      <div>
        <a
          className={styles.credits}
          href="https://unsplash.com/@jesuskiteque?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
          target="_blank"
          rel="noopener noreferrer"
          title="Download free do whatever you want high-resolution photos from Jesus Kiteque"
        >
          <span className={styles.svgWrapper}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <title>unsplash-logo</title>
              <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
            </svg>
          </span>
          <span className={styles.creditName}>Jesus Kiteque</span>
        </a>
      </div>
    </div>
  );
};
