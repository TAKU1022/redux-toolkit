import React, { useState } from 'react';
import { ImageList } from './ImageList';
import styles from '../styles/modules/DummyArea.module.css';
import { DummyDetail } from './DummyDetail';
import { useItem } from '../hooks/useItem';
import { PhotoState } from '../store/features/item/itemSlice';

export const DummyArea: React.FC = () => {
  const { item } = useItem();

  return (
    <div className={styles.wrapper}>
      <DummyDetail />
      <ImageList />
    </div>
  );
};
