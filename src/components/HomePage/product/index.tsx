import Image from 'next/future/image';
import Link from 'next/link';
import { Handbag } from 'phosphor-react';
import { useCart } from '../../../contexts/CartContext';
import { AddToCartButton, ProductContainer, ProductFooter } from './styles';

interface IProduct {
	id: string;
	name: string;
	price: number;
	formattedPrice: string;
	imageUrl: string;
	price_id: string;
}

interface IProductProps {
	product: IProduct;
	openToast(): void;
}

export function Product({ product, openToast }: IProductProps) {
	const { addProduct } = useCart();

	function addToCart(product: IProduct) {
		const productNotInCart = addProduct(product);

		if (productNotInCart) {
			openToast();
		}
	}

	return (
		<ProductContainer>
			<Link href={`/product/${product.id}`} prefetch={false}>
				<Image src={product.imageUrl} alt="" width={520} height={480} />
			</Link>

			<ProductFooter>
				<div>
					<span>{product.name}</span>

					<strong>{product.formattedPrice}</strong>
				</div>

				<AddToCartButton
					type="button"
					onClick={() => addToCart(product)}
				>
					<Handbag size={32} weight="bold" />
				</AddToCartButton>
			</ProductFooter>
		</ProductContainer>
	);
}
