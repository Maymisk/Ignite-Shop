import Image from 'next/future/image';
import { useCart } from '../../../../contexts/CartContext';
import {
	ShirtImageContainer,
	ShirtInfoContainer,
	ShirtItemContainer,
} from './styles';

interface IShirtItemProps {
	id: string;
	name: string;
	formattedPrice: string;
	imageUrl: string;
}

export function ShirtItem({
	id,
	name,
	formattedPrice,
	imageUrl,
}: IShirtItemProps) {
	const { removeProduct } = useCart();

	return (
		<ShirtItemContainer>
			<ShirtImageContainer>
				<Image src={imageUrl} alt="" width={94} height={94} />
			</ShirtImageContainer>

			<ShirtInfoContainer>
				<h1>{name}</h1>
				<p>{formattedPrice}</p>

				<button type="button" onClick={() => removeProduct(id)}>
					Remover
				</button>
			</ShirtInfoContainer>
		</ShirtItemContainer>
	);
}
