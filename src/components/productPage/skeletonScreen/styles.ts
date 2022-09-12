import { styled } from '../../../styles';

export const SkeletonContainer = styled('main', {
	width: '100%',
	height: 656,

	maxWidth: 1180,

	margin: '5.5rem auto',

	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
});

const BaseBox = styled('div', {
	borderRadius: 8,

	background: '$gray800',
});

export const BigBox = styled(BaseBox, {
	width: '40%',
	height: '40%',
});

export const MediumBox = styled(BaseBox, {
	width: '40%',
	height: 60,

	marginTop: '1rem',
});

export const SmallBox = styled(BaseBox, {
	width: '25%',
	height: 32,

	marginTop: 'auto',
});
