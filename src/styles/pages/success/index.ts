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
	height: 150,

	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',

	position: 'relative',

	marginBottom: '4rem',
});

export const ImageGradient = styled('div', {
	width: 150,

	background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',

	boxShadow: '0px 0px 60px rgba(0, 0, 0, 0.8)',

	borderRadius: 1000,

	padding: '0.25rem',

	position: 'relative',

	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',

	img: {
		objectFit: 'cover',
	},
});
