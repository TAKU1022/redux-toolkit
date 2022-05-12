import React, { useState } from 'react';
import style from '../styles/modules/ImageList.module.css';

export const ImageList: React.FC = () => {
  const [imageList, changeImageList] = useState<number[]>(
    [...Array(24)].map((_, i) => i)
  );

  return (
    <div className={style.grid}>
      {imageList.map((number: number) => (
        <div key={number} className={style.imageBox}>
          <img
            src="https://dummyimage.com/400x400.jpg"
            alt=""
            className={style.image}
          />
        </div>
      ))}
    </div>
  );
};
