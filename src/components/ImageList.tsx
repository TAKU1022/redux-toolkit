import React, { useState } from 'react';
import style from '../styles/modules/ImageList.module.css';

export const ImageList: React.FC = () => {
  const [imageList, changeImageList] = useState<string[]>(
    [...Array(24)].map(() => 'https://dummyimage.com/400x400.jpg')
  );

  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    const target = event.currentTarget.firstElementChild;
    const imageUrl = target?.getAttribute('src');
    event.dataTransfer.setData('text/plain', imageUrl as string);
  };

  return (
    <div className={style.grid}>
      {imageList.map((url: string, index: number) => (
        <div
          className={style.imageBox}
          key={index}
          draggable={true}
          onDragStart={onDragStart}
        >
          <img className={style.image} src={url} alt="" draggable={false} />
        </div>
      ))}
    </div>
  );
};
