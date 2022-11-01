import { globalCss } from '.';

export const globalStyles = globalCss({
	'*': {
		margin: 0,
		padding: 0,
		boxSizing: 'border-box',
	},

	body: {
		backgroundColor: '$gray900',
		color: '$gray100',
	},

	'body, input, textarea, button': {
		fontFamily: 'Roboto, sans-serif',
		fontWeight: 400,
		fontSize: '$md',
	},

	button: {
		border: 0,
		cursor: 'pointer',
	},

	a: {
		textDecoration: 'none',
	},

	'@mobile': {
		html: {
			fontSize: '87.5%',
		},
	},
});
