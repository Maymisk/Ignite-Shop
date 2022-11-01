import { styled } from '../../styles';
import { Anchor, Content, Close, Root } from '@radix-ui/react-popover';

export const CartPopoverAnchor = styled(Anchor, {
	position: 'absolute',
	right: 0,
	top: 0,
});

export const CartPopoverContent = styled(Content, {
	width: '40rem',
	height: '100vh',

	display: 'flex',
	flexDirection: 'column',

	background: '$gray800',

	position: 'relative',

	padding: '4rem',

	boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.8)',

	'> h1': {
		fontSize: '1.25rem',
		fontWeight: 'bold',

		lineHeight: 1.6,

		color: '$gray100',

		marginBottom: '2rem',
	},
});

export const CartPopverCloseButton = styled(Close, {
	background: 'transparent',
	border: 0,

	position: 'absolute',
	top: 24,
	right: 24,

	cursor: 'pointer',

	svg: {
		color: '$gray400',
	},
});

export const FinishPurchaseButton = styled('button', {
	width: '100%',
	height: 69,

	padding: '1.25rem 2rem',

	background: '$green500',

	borderRadius: 8,

	textAlign: 'center',
	color: '$white',

	fontSize: '1.125rem',
	fontWeight: 'bold',

	marginTop: '4.5rem',

	transition: 'background-color 0.2s',

	'&:not(:disabled):hover': {
		background: '$green300',
	},

	'&:disabled': {
		opacity: 0.6,
		cursor: 'not-allowed',
	},
});
