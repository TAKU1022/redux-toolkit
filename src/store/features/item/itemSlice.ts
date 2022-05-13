import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface PhotoState {
  id: number;
  url: string;
}

export interface ItemState {
  photos: PhotoState[];
}

const initialState: ItemState = {
  photos: [
    { id: 1, url: '' },
    { id: 2, url: '' },
  ],
};

export const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    placePhoto: (state, action: PayloadAction<PhotoState>) => {
      state.photos = state.photos.map((photo) =>
        photo.id === action.payload.id ? action.payload : photo
      );
    },
    removePhoto: (state, action: PayloadAction<PhotoState>) => {
      state.photos = state.photos.map((photo) =>
        photo.id === action.payload.id ? action.payload : photo
      );
    },
  },
});

export const { placePhoto, removePhoto } = itemSlice.actions;

export default itemSlice.reducer;
