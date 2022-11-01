import { styled } from '../../../../styles';

export const PurchaseInfoContainer = styled('div', {
	marginTop: 'auto',

	div: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',

		lineHeight: 1.6,

		color: '$gray100',

		'& + div': {
			marginTop: '0.5rem',
		},
	},

	'div:nth-of-type(1)': {
		fontWeight: 'normal',

		span: {
			fontSize: '1.125rem',
			color: '$gray300',
		},
	},

	'div:nth-of-type(2)': {
		fontWeight: 'bold',
		fontSize: '1.125rem',

		span: {
			fontSize: '1.5rem',

			lineHeight: 1.4,
		},
	},
});
