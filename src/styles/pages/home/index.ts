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
