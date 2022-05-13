import React, { useState } from 'react';
import { useItem } from '../hooks/useItem';
import { PhotoState } from '../store/features/item/itemSlice';
import styles from '../styles/modules/DummyDetail.module.css';

export const DummyDetail: React.FC = () => {
  const { item } = useItem();

  const [selectedPhoto, changeSelectedPhoto] = useState<PhotoState>(
    item.photos[0]
  );

  return (
    <div className={styles.wrapper}>
      {item.photos.map((photo) => (
        <div key={photo.id} className={styles.card}></div>
      ))}
    </div>
  );
};
