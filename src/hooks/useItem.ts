import { useDispatch } from 'react-redux';
import { RootState, useAppSelector } from '../store';
import {
  PhotoState,
  placePhoto,
  removePhoto,
} from '../store/features/item/itemSlice';

export const useItem = () => {
  const item = useAppSelector((state: RootState) => state.item);
  const dispatch = useDispatch();

  const onPlacePhoto = (photo: PhotoState) => dispatch(placePhoto(photo));

  const onRemovePhoto = (photo: PhotoState) => dispatch(removePhoto(photo));

  return { item, onPlacePhoto, onRemovePhoto };
};
