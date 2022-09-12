import { BigBox, MediumBox, SkeletonContainer, SmallBox } from './styles';

export function ProductSkeletonScreen() {
	return (
		<SkeletonContainer>
			<BigBox />
			<MediumBox />
			<SmallBox />
		</SkeletonContainer>
	);
}
