import styled from 'styled-components';
import { TextField, Box } from '@material-ui/core';
import { Colors, Fonts } from '../../styles';

export const Logo = styled.h5`
  font-family: Ramabhadra;
  font-weight: 900;
  font-size: ${Fonts.Sizes.heavy};
  text-align: right;
`;

export const Title = styled.h5`
  font-family: 'Mulish', sans-serif;
  font-size: ${Fonts.Sizes.extraLarge};
  text-align: center;
`;

export const Text = styled.p`
  font-family: 'Mulish', sans-serif;
  font-size: ${Fonts.Sizes.small};
  & span {
    color: ${Colors.background};
    &:hover {
      cursor: pointer;
    }
  }
`;

export const Input = styled(TextField)`
  &.MuiFormControl-root {
    margin-bottom: 3%;
    max-width: 433px;
    & input {
      margin: 0 10px;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  width: 175px;
  height: 45px;
  font-size: ${Fonts.Sizes.regular};
  text-transform: none;
  border-radius: 100px;
  font-family: 'Mulish', sans-serif;
  font-weight: bold;
  background-color: ${Colors.text};
  color: ${Colors.white};
  align-self: center;
  margin: 6% 0;
  outline: none;
  border: none;
  transition: all 0.5s;
  &:hover {
    cursor: pointer;
    background-color: ${Colors.hover}99;
  }
`;

export const GoogleButton = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 60%;
  height: 45px;
  border-radius: 100px;
  box-shadow: 0px 3px 6px ${Colors.shadow};
  background-color: ${Colors.white};
  padding: 8px;
  margin: 6% auto !important;
  @media (max-width: 650px) {
    width: 50%;
  }
  @media (max-width: 400px) {
    width: 60%;
  }

  &:hover {
    cursor: pointer;
    background-color: ${Colors.hover}17;
  }
`;
