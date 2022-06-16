import React from 'react';
import { useSelector } from 'react-redux';
import { usePages } from '../hooks/usePages';
import {
  allPhotoSelector,
  photosIdsSelector,
} from '../store/features/pages/selectors';
import { PassionButton } from './PassionButton';

export const Practice: React.FC = () => {
  const { onUpdateIsFit } = usePages();
  const photoIds = useSelector(photosIdsSelector);
  const photoList = useSelector(allPhotoSelector);

  return (
    <div style={{ marginTop: '80px' }}>
      {photoList.map((photo, index) => (
        <p key={index}>
          <PassionButton photo={photo} onClick={onUpdateIsFit} />
        </p>
      ))}
    </div>
  );
};
