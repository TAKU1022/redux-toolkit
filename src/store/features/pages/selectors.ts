import { RootState } from '../..';
import { photosAdapter } from './pagesSlice';

export const photosEntitySelectors = photosAdapter.getSelectors(
  (state: RootState) => state.pages.photos
);

export const {
  selectIds: photosIdsSelector,
  selectById: photoByIdSelector,
  selectAll: allPhotoSelector,
} = photosEntitySelectors;
