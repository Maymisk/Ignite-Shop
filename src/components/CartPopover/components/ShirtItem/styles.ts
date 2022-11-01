import { styled } from '../../../../styles';

export const ShirtItemContainer = styled('div', {
	height: 93,

	display: 'flex',
	alignItems: 'center',
	gap: '1.25rem',

	'& + &': {
		marginTop: '1.5rem',
	},
});

export const ShirtImageContainer = styled('div', {
	padding: '0 0.1875rem', // 3 pixels

	display: 'flex',
	justifyContent: 'center',

	background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',

	borderRadius: 8,
});

export const ShirtInfoContainer = styled('div', {
	flex: 1,

	lineHeight: 1.6,

	h1: {
		fontSize: '1.125rem',
		fontWeight: 'normal',
		color: '$gray300',
	},

	p: {
		fontSize: '1.125rem',
		fontWeight: 'bold',

		color: '$gray100',

		marginTop: '0.25rem',
	},

	button: {
		display: 'block',

		background: 'transparent',

		color: '$green500',
		fontWeight: 'bold',

		marginTop: '0.5rem',

		fontSize: '1rem',
	},
});
