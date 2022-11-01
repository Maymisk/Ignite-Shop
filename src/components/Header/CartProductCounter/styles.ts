import { styled } from '../../../styles';

export const CartProductCounterContainer = styled('div', {
	width: 24,
	height: 24,

	position: 'absolute',
	right: -7,
	top: -7,

	background: '$green500',
	color: '$white',

	fontSize: '0.75rem',
	fontWeight: 'bold',
	lineHeight: 1.6,

	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',

	borderRadius: 1000,

	border: '3px solid $gray900',
});
