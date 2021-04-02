import React from 'react';

import { Sign, SliderContainer } from './styles';
import Slider from 'components/Slider';

import picSlider from 'assets/img/slider1.png';
import picSlider2 from 'assets/img/slider2.svg';
import picSlider3 from 'assets/img/slider3.svg';

const content = [
  {
    img: picSlider,
    title: 'Marcenas mattis egestas',
    description:
      'Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.',
  },
  {
    img: picSlider2,
    title: 'Marcenas mattis egestas',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    img: picSlider3,
    title: 'Marcenas mattis egestas',
    description:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  },
];

const Access: React.FC = ({ children }) => {
  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <SliderContainer>
        <Slider content={content} />
      </SliderContainer>

      <Sign>{children}</Sign>
    </div>
  );
};

export default Access;
