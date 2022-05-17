import React, { useState } from 'react';
import { ImageList } from './ImageList';
import styles from '../styles/modules/DummyArea.module.css';
import { DummyDetail } from './DummyDetail';
import { useItem } from '../hooks/useItem';
import { PhotoState } from '../store/features/item/itemSlice';

export const DummyArea: React.FC = () => {
  const { item } = useItem();
  const [selectedPhoto, changeSelectedPhoto] = useState<PhotoState>(
    item.photos[0]
  );

  const onClickPhoto = (photo: PhotoState) => {
    changeSelectedPhoto(photo);
  };

  return (
    <div className={styles.wrapper}>
      <DummyDetail selectedPhoto={selectedPhoto} onClickPhoto={onClickPhoto} />
      <ImageList selectedPhoto={selectedPhoto} />
    </div>
  );
};
