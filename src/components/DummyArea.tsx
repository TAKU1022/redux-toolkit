import React from 'react';
import { ImageList } from './ImageList';
import styles from '../styles/modules/DummyArea.module.css';
import { DummyDetail } from './DummyDetail';

export const DummyArea: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <DummyDetail />
      <ImageList />
    </div>
  );
};
