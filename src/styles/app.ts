import { styled } from '.';
import { Viewport } from '@radix-ui/react-toast';

export const Container = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
	justifyContent: 'center',

	padding: '0 1rem',
});

export const ToastViewport = styled(Viewport, {
	position: 'absolute',
	top: '4rem',
	right: 0,
	zIndex: 9999999999,
});
