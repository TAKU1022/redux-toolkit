import React, { useState } from 'react';
import style from '../styles/modules/ImageList.module.css';

export const ImageList: React.FC = () => {
  const [imageList, changeImageList] = useState<string[]>(
    [...Array(24)].map(() => 'https://dummyimage.com/400x400.jpg')
  );

  const onDragStart = (event: React.DragEvent<HTMLImageElement>) => {
    const target = event.currentTarget;
    event.dataTransfer.setData('text/uri-list', target.src);
  };

  return (
    <div className={style.grid}>
      {imageList.map((url: string, index: number) => (
        <div key={index} className={style.imageBox}>
          <img
            className={style.image}
            src={url}
            alt=""
            onDragStart={onDragStart}
          />
        </div>
      ))}
    </div>
  );
};
