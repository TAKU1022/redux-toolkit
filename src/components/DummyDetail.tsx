import React from 'react';
import { useItem } from '../hooks/useItem';
import { PhotoState } from '../store/features/item/itemSlice';
import styles from '../styles/modules/DummyDetail.module.css';

export const DummyDetail: React.FC = () => {
  const { item, onPlacePhoto } = useItem();

  const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const onDrop = (
    event: React.DragEvent<HTMLDivElement>,
    photo: PhotoState
  ) => {
    event.preventDefault();

    const imageUrl = event.dataTransfer.getData('text/uri-list');
    onPlacePhoto({ ...photo, url: imageUrl });
  };

  return (
    <div className={styles.wrapper}>
      {item.photos.map((photo: PhotoState) => (
        <div
          className={styles.card}
          key={photo.id}
          onDragOver={onDragOver}
          onDrop={(event) => onDrop(event, photo)}
        >
          {photo.url !== '' && (
            <img src={photo.url} alt="" className={styles.image} />
          )}
        </div>
      ))}
    </div>
  );
};
