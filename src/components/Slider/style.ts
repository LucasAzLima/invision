import Styled, { keyframes } from 'styled-components';
import { Box } from '@material-ui/core';
import { Colors, Fonts } from '../../styles';

const slide = keyframes`
  from {
    transform: scale(0.5);
  }

  to {
    transform: scale(1);
  }
`;

export const Container = Styled(Box)`
	width:100%;
	height:100%;
`;

export const ContainerImage = Styled(Box)`
	width:100%;
	height:57vh;
	display: flex;
	box-sizing: border-box;
	align-items: center;
	justify-content: center;
`;

export const Title = Styled.h5`
	color: ${Colors.white};
	margin-top: 30px;
	text-align: center;
	font-family: 'Mulish', sans-serif;
  font-size: ${Fonts.Sizes.extraLarge};
	font-weight: bold;
`;

export const Description = Styled.p`
	color: ${Colors.white};
	margin-top: 20px;
	text-align: center;
	font-family: 'Mulish', sans-serif;
  font-size: ${Fonts.Sizes.medium};
`;

export const Image = Styled.img`
	width: 100%;
`;

export const OptionView = Styled.div`
	width: fit-content;
	display: flex;
	justify-content: space-between;
	margin: 30px auto;
`;

export const OptionActive = Styled.div`
	width: 26px;
	height: 11px;
	border-radius: 50px;
	background-color: ${Colors.white};
	margin: 0 5px;
	animation: ${slide} 0.5s ease forwards;
`;

export const OptionDeactive = Styled.div`
	width: 11px;
	height: 11px;
	border-radius: 50px;
	background-color: ${Colors.white};
	opacity: 0.5;
	cursor: pointer;
	margin: 0 6px;
`;
