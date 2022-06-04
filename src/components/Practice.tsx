import React from 'react';
import { useSelector } from 'react-redux';
import { usePages } from '../hooks/usePages';
import { photosIdsSelector } from '../store/features/pages/selectors';
import { PassionButton } from './PassionButton';

export const Practice: React.FC = () => {
  const { onUpdateIsFit } = usePages();
  const photoIds = useSelector(photosIdsSelector);

  return (
    <div style={{ marginTop: '80px' }}>
      {photoIds.map((id, index) => (
        <p key={index}>
          <PassionButton id={id} onClick={onUpdateIsFit} />
        </p>
      ))}
    </div>
  );
};
