import React from 'react';
import styles from '../styles/modules/DummyDetail.module.css';

export const DummyDetail: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}></div>
      <div className={styles.card}></div>
    </div>
  );
};
