import styled from 'styled-components';
import { Colors } from '../../styles';

export const Sign = styled.div`
  display: block;
  width: 50%;
  min-width: 320px;
  min-height: 100vh;
  padding: 6% 6%;
  box-sizing: border-box;
  background-color: ${Colors.white};
  @media (max-width: 650px) {
    width: 100%;
  }
`;

export const SliderContainer = styled.div`
  width: 50%;
  box-sizing: border-box;
  min-height: 100vh;
  padding: 6% 6%;
  background-color: ${Colors.background};
  display: flex;
  align-items: center;
  @media (max-width: 650px) {
    display: none;
  }
`;
