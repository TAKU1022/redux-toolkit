import {
  createEntityAdapter,
  createSlice,
  EntityAdapter,
  EntityId,
  EntityState,
  PayloadAction,
} from '@reduxjs/toolkit';

export interface Meta {
  height: number;
  mime: string;
  rotate: number;
  width: number;
}

export interface FileInfo {
  height: number;
  id: number;
  meta: Meta;
  tookAt: string;
  width: number;
}

export interface UploadedPhotoInfo {
  fileInfo: FileInfo;
  height: number;
  imageIndex: number;
  progress: number;
  type: string;
  uploaded: boolean;
  width: number;
}

export interface Photo {
  info: UploadedPhotoInfo;
  isCorrection: boolean;
  isFit: boolean;
  rotation: number;
  scale: number;
  x: number;
  y: number;
}

export interface PageState {
  photos: EntityState<Photo>;
}

export const initialPhotoState: Photo = {
  info: {
    fileInfo: {
      height: 0,
      id: 0,
      meta: {
        height: 0,
        mime: '',
        rotate: 0,
        width: 0,
      },
      tookAt: '',
      width: 0,
    },
    height: 0,
    imageIndex: 0,
    progress: 0,
    type: '',
    uploaded: false,
    width: 0,
  },
  isCorrection: false,
  isFit: true,
  rotation: 0,
  scale: 0,
  x: 0,
  y: 0,
};

export const photosAdapter: EntityAdapter<Photo> = createEntityAdapter<Photo>({
  selectId: (photo) => photo.info.imageIndex,
});
const photosInitialEntityState: EntityState<Photo> =
  photosAdapter.getInitialState();

const initialState: PageState = {
  photos: photosInitialEntityState,
};

export const pagesSlice = createSlice({
  name: 'pages',
  initialState,
  reducers: {
    addPhoto: (state, action: PayloadAction<number>) => {
      photosAdapter.addOne(state.photos, {
        ...initialPhotoState,
        info: { ...initialPhotoState.info, imageIndex: action.payload },
      });
    },
    updateUploadedPhotoInfo: (
      state,
      action: PayloadAction<{
        id: EntityId;
        uploadedPhotoInfo: UploadedPhotoInfo;
      }>
    ) => {
      photosAdapter.updateOne(state.photos, {
        id: action.payload.id,
        changes: { info: action.payload.uploadedPhotoInfo },
      });
    },
    updateIsFit: (
      state,
      action: PayloadAction<{ id: EntityId; isFit: boolean }>
    ) => {
      photosAdapter.updateOne(state.photos, {
        id: action.payload.id,
        changes: { isFit: action.payload.isFit },
      });
    },
  },
});

export const { addPhoto, updateUploadedPhotoInfo, updateIsFit } =
  pagesSlice.actions;

export default pagesSlice.reducer;
