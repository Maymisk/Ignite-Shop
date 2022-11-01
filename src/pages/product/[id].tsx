import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/future/image';
import { useRouter } from 'next/router';
import Stripe from 'stripe';
import { stripeAPI } from '../../services/stripe';
import {
	ImageContainer,
	ProductContainer,
	ProductInfo,
	PurchaseButton,
} from '../../styles/pages/product';
import { NumberFormatter } from '../../utils/formatter';

import { ProductSkeletonScreen } from '../../components/ProductPage/skeletonScreen';
import { useCart } from '../../contexts/CartContext';
import { productSample } from '../../utils/sample';
import { Toast } from '../../components/Toast';
import { useState } from 'react';

interface IProduct {
	id: string;
	name: string;
	description: string;
	price: number;
	formattedPrice: string;
	price_id: string;
	imageUrl: string;
}

interface IProductProps {
	product: IProduct;
}

export default function Product({ product }: IProductProps) {
	const { isFallback } = useRouter();
	const { addProduct } = useCart();

	const [toastIsOpen, setToastIsOpen] = useState(false);

	if (isFallback) {
		return <ProductSkeletonScreen />;
	}

	function handleAddToCart(product: IProduct) {
		const productNotInCart = addProduct(product);

		if (productNotInCart) {
			setToastIsOpen(true);
		}
	}

	return (
		<>
			<ProductContainer>
				<ImageContainer>
					<Image
						src={product.imageUrl}
						alt=""
						width={576}
						height={656}
					/>
				</ImageContainer>

				<ProductInfo>
					<h1>{product.name}</h1>

					<span>{product.formattedPrice}</span>

					<p>{product.description}</p>

					<PurchaseButton
						type="button"
						onClick={() => handleAddToCart(product)}
					>
						Colocar na sacola
					</PurchaseButton>
				</ProductInfo>
			</ProductContainer>

			<Toast
				type="foreground"
				open={toastIsOpen}
				onOpenChange={setToastIsOpen}
				duration={1500}
				title="Produto adicionado"
				description="Produto adicionado ao carrinho!"
			/>
		</>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	// if needed, get the most popular products and specify their ids in the paths array

	return {
		paths: [],
		fallback: true,
	};
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
	params,
}) => {
	const productId = params?.id;

	try {
		if (!productId) {
			return {
				notFound: true,
			};
		}

		const product = await stripeAPI.products.retrieve(productId, {
			expand: ['default_price'],
		});

		const price = product.default_price as Stripe.Price;

		return {
			props: {
				product: {
					id: product.id,
					name: product.name,
					description: product.description,
					price: NumberFormatter.format(price.unit_amount! / 100),
					price_id: price.id,
					imageUrl: product.images[0],
				},
			},
			revalidate: 60 * 60 * 1, // 1 hour
		};
	} catch (err) {
		console.log(err);

		const product = productSample.find(product => product.id === productId);

		return {
			props: {
				product,
			},
			revalidate: 60 * 60 * 1,
		};
	}
};
