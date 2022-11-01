import { styled } from '../../styles';
import { keyframes } from '@stitches/react';
import {
	Root,
	Title,
	Description,
	Action,
	Close,
	ToastProps,
} from '@radix-ui/react-toast';

const slideRight = keyframes({
	from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
	to: { transform: 'translateX(100%)' },
});

const slideIn = keyframes({
	from: { transform: `translateX(100%)` },
	to: { transform: 'translateX(0)' },
});

const hide = keyframes({
	from: { opacity: 1 },
	to: { opacity: 0 },
});

export const ToastContainer = styled(Root, {
	padding: '1rem 1.5rem',

	borderRadius: '4px 0 0 4px',

	background: '$green500',

	position: 'relative',

	variants: {
		variant: {
			error: {
				background: '#e06464',
			},

			warning: {
				background: '$gray800',
			},
		},
	},

	boxShadow:
		'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',

	'&[data-state="open"]': {
		animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
	},

	'&[data-state="closed"]': {
		animation: `${hide} 100ms ease-in`,
	},

	'&[data-swipe="move"]': {
		transform: 'translateX(var(--radix-toast-swipe-move-x))',
	},

	'&[data-swipe="cancel"]': {
		transform: 'translateX(0)',
		transition: 'transform 200ms ease-out',
	},

	'&[data-swipe="end"]': {
		animation: `${slideRight} 100ms ease-out`,
	},
});

export const ToastTitle = styled(Title, {
	fontWeight: 'bold',
	fontSize: '1.125rem',

	color: '$white',

	marginBottom: '0.5rem',
});

export const ToastDescription = styled(Description, {
	fontSize: '0.875rem',
});

export const CloseToastButton = styled(Close, {
	color: '$white',
	background: 'transparent',

	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',

	position: 'absolute',
	top: '0.75rem',
	right: '0.5rem',
});
