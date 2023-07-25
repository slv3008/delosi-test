import React from 'react';
import ImageRotator from '../components/ImageRotator';

const Home: React.FC = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <h1>Rotador de Imagen</h1>
      <ImageRotator />
    </div>
  );
};

export default Home;
