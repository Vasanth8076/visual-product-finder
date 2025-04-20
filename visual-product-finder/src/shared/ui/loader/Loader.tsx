import React from 'react';
import { Overlay, Spinner } from './styles/loader.styles.ts';

interface LoaderProps {
  show: boolean;
}

const Loader: React.FC<LoaderProps> = ({ show }) => {
  if (!show) return null;
  return (
    <Overlay>
      <Spinner />
    </Overlay>
  );
};

export default Loader;
