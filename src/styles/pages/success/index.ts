import { styled } from '../..';

export const SuccessContainer = styled('main', {
	maxWidth: 1180,
	height: '100vh',

	margin: '5.5rem auto',

	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',

	h1: {
		fontSize: '$2xl',
		color: '$gray100',
	},

	p: {
		maxWidth: 560,

		marginTop: '2rem',

		color: '$gray300',

		fontSize: '$xl',

		textAlign: 'center',
	},

	a: {
		display: 'block',

		color: '$green500',

		fontWeight: 'bold',
		fontSize: '$lg',

		marginTop: '5rem',

		transition: 'color 0.2s',

		'&:hover': {
			color: '$green300',
		},
	},
});

export const ImageContainer = styled('div', {
	maxWidth: 130,
	height: 145,

	background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',

	borderRadius: 8,

	padding: '0.25rem',

	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',

	marginTop: '4rem',

	img: {
		objectFit: 'cover',
	},
});
