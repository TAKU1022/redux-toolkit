import React, { useState } from 'react';
import { useItem } from '../hooks/useItem';
import { PhotoState } from '../store/features/item/itemSlice';
import style from '../styles/modules/ImageList.module.css';

type Props = {
  selectedPhoto: PhotoState;
};

export const ImageList: React.FC<Props> = ({ selectedPhoto }) => {
  const { onPlacePhoto } = useItem();
  const [imageList, changeImageList] = useState<string[]>(
    [...Array(24)].map(() => 'https://dummyimage.com/400x400.jpg')
  );

  return (
    <div className={style.grid}>
      {imageList.map((url: string, index: number) => (
        <div key={index} className={style.imageBox}>
          <img
            src={url}
            alt=""
            onClick={() => onPlacePhoto({ ...selectedPhoto, url: url })}
            className={style.image}
          />
        </div>
      ))}
    </div>
  );
};
