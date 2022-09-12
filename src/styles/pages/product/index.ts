import { styled } from '../..';

export const ProductContainer = styled('main', {
	height: 656,

	maxWidth: 1180,

	margin: '0 auto',

	display: 'grid',
	gridTemplateColumns: 'repeat(2, 1fr)',
	alignItems: 'stretch',
	gap: '4rem',

	'@iPad': {
		gridTemplateColumns: '1fr',
	},
});

export const ImageContainer = styled('div', {
	width: '100%',

	maxWidth: 576,

	background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',

	borderRadius: 8,

	padding: '0.25rem',

	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',

	img: {
		objectFit: 'cover',
	},

	'@iPad': {
		margin: '0 auto',

		img: {
			width: '100%',
		},
	},
});

export const ProductInfo = styled('div', {
	display: 'flex',
	flexDirection: 'column',

	h1: {
		fontWeight: 'bold',
		fontSize: '$2xl',

		color: '$gray300',
	},

	span: {
		display: 'block',

		marginTop: '1rem',

		color: '$green300',

		fontSize: '$2xl',
	},

	p: {
		marginTop: '2.5rem',

		fontSize: '$md',

		color: '$gray300',
		lineHeight: '$standard',

		'& + p': {
			marginTop: '1.25rem',
		},
	},

	'@iPad': {
		alignItems: 'center',

		p: {
			textAlign: 'center',
		},

		'span, p': {
			marginTop: '1.5rem',
		},
	},
});

export const PurchaseButton = styled('button', {
	width: '100%',

	borderRadius: 8,

	background: '$green500',
	color: '$white',

	padding: '1.25rem 2rem',

	fontWeight: 'bold',
	fontSize: '$md',
	lineHeight: '$standard',

	textAlign: 'center',

	marginTop: 'auto',

	transition: 'background-color 0.2s',

	'&:not(:disabled):hover': {
		background: '$green300',
	},

	'&:disabled': {
		opacity: 0.6,

		cursor: 'not-allowed',
	},

	'@mobile': {
		marginTop: '1.5rem',
	},
});
