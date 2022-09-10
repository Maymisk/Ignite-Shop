import { HomeContainer, Product, ProductFooter } from '../styles/pages/home';
import shirtPath from '../assets/Shirt.png';
import Image from 'next/future/image';
import { GetStaticProps } from 'next';
import { stripeAPI } from '../services/stripe';
import { Stripe } from 'stripe';
import { NumberFormatter } from '../utils/formatter';

interface IHomeProps {
	products: {
		id: string;
		name: string;
		imageUrl: string;
		price: string;
	}[];
}

// implement carousel with radix ui when it releases
export default function Home({ products }: IHomeProps) {
	return (
		<HomeContainer>
			{products.map(product => {
				return (
					<Product key={product.id}>
						<Image src={product.imageUrl} alt="" />

						<ProductFooter>
							<span>{product.name}</span>

							<strong>{product.price}</strong>
						</ProductFooter>
					</Product>
				);
			})}
		</HomeContainer>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const response = await stripeAPI.products.list({
		expand: ['data.default_price'],
	});

	const products = response.data.map(product => {
		const price = product.default_price as Stripe.Price;

		return {
			id: product.id,
			name: product.name,
			imageUrl: product.images[0],
			price: NumberFormatter.format(price.unit_amount! / 100),
		};
	});

	return {
		props: {
			products,
		},
	};
};
