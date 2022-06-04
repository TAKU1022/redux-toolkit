import React, { memo } from 'react';
import { EntityId } from '@reduxjs/toolkit';
import { usePages } from '../hooks/usePages';
import { photoByIdSelector } from '../store/features/pages/selectors';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

type Props = {
  id: EntityId;
  onClick: (payload: { id: EntityId; isFit: boolean }) => void;
};

export const PassionButton: React.FC<Props> = memo(({ id, onClick }) => {
  const photo = useSelector((state: RootState) => photoByIdSelector(state, id));
  console.log('aaa');

  return (
    <button onClick={() => onClick({ id, isFit: false })}>
      {photo?.isFit && <span>ああああ</span>}
      <span>いいいい</span>
    </button>
  );
});
