import { styled } from '../..';

export const HomeContainer = styled('div', {
	width: '100%',
	maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
	minHeight: 656,

	display: 'flex',
	gap: '3rem',

	marginLeft: 'auto',

	'@mobile': {
		flexDirection: 'column',
	},
});

export const Product = styled('div', {
	minWidth: 696,

	background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',

	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',

	cursor: 'pointer',

	borderRadius: 8,

	position: 'relative',

	padding: '0.25rem',

	img: {
		objectFit: 'cover',
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

	padding: '2rem 2.5rem 2rem 2rem',

	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',

	position: 'absolute',
	bottom: '0.25rem',
	left: '0.25rem',
	right: '0.25rem',

	fontWeight: 'bold',

	span: {
		fontSize: '$lg',
	},

	strong: {
		fontSize: '$xl',
		color: '$green300',
	},
});
