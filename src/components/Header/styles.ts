import { styled } from '../../styles';
import { Trigger } from '@radix-ui/react-popover';

export const HeaderContainer = styled('header', {
	width: '100%',
	maxWidth: 1180,

	padding: '2rem 0',
	margin: '0 auto',

	cursor: 'pointer',

	display: 'flex',
	justifyContent: 'space-between',
});

export const CartButton = styled(Trigger, {
	width: 48,
	height: 48,

	background: '$gray800',

	borderRadius: 6,

	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',

	position: 'relative',

	'&:hover': {
		opacity: 0.7,
	},

	svg: {
		color: '$white',
	},
});
