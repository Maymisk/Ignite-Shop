import axios from 'axios';
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

import { useState } from 'react';
import { ProductSkeletonScreen } from '../../components/productPage/skeletonScreen';

interface IProductProps {
	product: {
		name: string;
		description: string;
		price: string;
		price_id: string;
		imageUrl: string;
	};
}

export default function Product({ product }: IProductProps) {
	const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
		useState(false);

	const { isFallback } = useRouter();

	if (isFallback) {
		return <ProductSkeletonScreen />;
	}

	async function handlePurchase() {
		try {
			setIsCreatingCheckoutSession(true);

			const response = await axios.post('/api/checkout', {
				price_id: product.price_id,
			});

			const { checkoutUrl } = response.data;

			window.location.href = checkoutUrl;
		} catch (err) {
			alert('Falha ao completar a compra');

			setIsCreatingCheckoutSession(false);
		}
	}

	return (
		<ProductContainer>
			<ImageContainer>
				<Image src={product.imageUrl} alt="" />
			</ImageContainer>

			<ProductInfo>
				<h1>{product.name}</h1>

				<span>{product.price}</span>

				<p>{product.description}</p>

				<PurchaseButton
					type="button"
					onClick={handlePurchase}
					disabled={isCreatingCheckoutSession}
				>
					Comprar agora
				</PurchaseButton>
			</ProductInfo>
		</ProductContainer>
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
};
