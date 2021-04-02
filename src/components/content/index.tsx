import React from 'react';

import { Sign, SliderContainer } from './styles';

const Access: React.FC = ({ children }) => {
  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <SliderContainer></SliderContainer>

      <Sign>{children}</Sign>
    </div>
  );
};

export default Access;
