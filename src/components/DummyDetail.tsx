import React from 'react';
import { useItem } from '../hooks/useItem';
import { PhotoState } from '../store/features/item/itemSlice';
import styles from '../styles/modules/DummyDetail.module.css';

type Props = {
  selectedPhoto: PhotoState;
  onClickPhoto: (photo: PhotoState) => void;
};

export const DummyDetail: React.FC<Props> = ({
  selectedPhoto,
  onClickPhoto,
}) => {
  const { item } = useItem();

  return (
    <div className={styles.wrapper}>
      {item.photos.map((photo) => (
        <div
          key={photo.id}
          onClick={() => onClickPhoto(photo)}
          style={
            photo.id === selectedPhoto.id
              ? { border: '1px solid red' }
              : undefined
          }
          className={styles.card}
        >
          {photo.url !== '' && (
            <img src={photo.url} alt="" className={styles.image} />
          )}
        </div>
      ))}
    </div>
  );
};
