import { GetStaticProps } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import { Stripe } from 'stripe';
import { Product } from '../components/HomePage/product';
import { Toast } from '../components/Toast';
import { stripeAPI } from '../services/stripe';
import { HomeContainer } from '../styles/pages/home';
import { NumberFormatter } from '../utils/formatter';
import { productSample } from '../utils/sample';

interface IProduct {
	id: string;
	name: string;
	imageUrl: string;
	formattedPrice: string;
	price: number;
	price_id: string;
}

interface IHomeProps {
	products: IProduct[];
}

// implement carousel with radix ui when it releases
export default function Home({ products }: IHomeProps) {
	const [toastIsOpen, setToastIsOpen] = useState(false);

	function openToast() {
		setToastIsOpen(true);
	}

	return (
		<HomeContainer>
			<Head>
				<title>igShop | Home</title>
			</Head>

			{products?.map(product => {
				return (
					<Product
						key={product.id}
						product={product}
						openToast={openToast}
					/>
				);
			})}

			<Toast
				type="foreground"
				duration={1500}
				title="Produto adicionado"
				description="Produto adicionado ao carrinho!"
				open={toastIsOpen}
				onOpenChange={setToastIsOpen}
			/>
		</HomeContainer>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const response = await stripeAPI.products.list({
			expand: ['data.default_price'],
		});

		const products = response.data.map(product => {
			const price = product.default_price as Stripe.Price;

			return {
				id: product.id,
				name: product.name,
				imageUrl: product.images[0],
				formattedPrice: NumberFormatter.format(
					price.unit_amount! / 100
				),
				price: price.unit_amount! / 100,
				price_id: price.id,
			};
		});

		return {
			props: {
				products,
			},
			revalidate: 60 * 60 * 2, // 2 hours
		};
	} catch (err) {
		console.log(err);

		return {
			props: {
				products: productSample,
			},
			revalidate: 60 * 60 * 2, // 2 hours
		};
	}
};
