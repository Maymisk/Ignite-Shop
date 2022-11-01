import { styled } from '../../../styles';

export const ProductContainer = styled('a', {
	minWidth: 696,

	background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',

	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',

	borderRadius: 8,

	position: 'relative',

	padding: '0.25rem',

	img: {
		objectFit: 'cover',
		cursor: 'pointer',
	},

	'@mobile': {
		minWidth: 0,

		img: {
			width: 320,
		},
	},
});

export const ProductFooter = styled('footer', {
	background: 'rgba(0, 0, 0, 0.6)',

	borderRadius: 6,

	padding: '1.5rem 2rem 1.5rem 1.5rem',

	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',

	position: 'absolute',
	bottom: '0.25rem',
	left: '0.25rem',
	right: '0.25rem',

	fontWeight: 'bold',

	span: {
		display: 'block',
		fontSize: '$lg',
	},

	strong: {
		display: 'block',

		fontSize: '$xl',
		color: '$green300',

		marginTop: '0.5rem',
	},
});

export const AddToCartButton = styled('button', {
	width: 56,
	height: 56,

	padding: '0.75rem',

	background: '$green500',

	borderRadius: 6,

	textAlign: 'center',

	transition: 'all 0.2s',

	'&:hover': {
		opacity: 0.7,
	},

	svg: {
		color: '$white',
	},
});
