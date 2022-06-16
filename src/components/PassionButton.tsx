import React, { memo } from 'react';
import { EntityId } from '@reduxjs/toolkit';
import { usePages } from '../hooks/usePages';
import { photoByIdSelector } from '../store/features/pages/selectors';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Photo } from '../store/features/pages/pagesSlice';

type Props = {
  photo: Photo;
  onClick: (payload: { id: EntityId; isFit: boolean }) => void;
};

export const PassionButton: React.FC<Props> = memo(({ photo, onClick }) => {
  // const photo = useSelector((state: RootState) => photoByIdSelector(state, id));
  console.log('ooo');

  return (
    <button
      onClick={() => onClick({ id: photo.info.imageIndex, isFit: false })}
    >
      {photo?.isFit && <span>ああああ</span>}
      <span>いいいい</span>
    </button>
  );
});
