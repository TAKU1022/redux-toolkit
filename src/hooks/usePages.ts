import { EntityId } from '@reduxjs/toolkit';
import { useCallback } from 'react';
import { RootState, useAppDispatch, useAppSelector } from '../store';
import { addPhoto, updateIsFit } from '../store/features/pages/pagesSlice';

export const usePages = () => {
  const pages = useAppSelector((state: RootState) => state.pages);
  const dispatch = useAppDispatch();

  const onAddPhoto = useCallback(
    (index: number) => dispatch(addPhoto(index)),
    [dispatch]
  );

  const onUpdateIsFit = useCallback(
    (payload: { id: EntityId; isFit: boolean }) =>
      dispatch(updateIsFit(payload)),
    [dispatch]
  );

  return { onAddPhoto, onUpdateIsFit };
};
