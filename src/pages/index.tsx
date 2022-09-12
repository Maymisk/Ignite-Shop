import { GetStaticProps } from 'next';
import Image from 'next/future/image';
import Head from 'next/head';
import { Stripe } from 'stripe';
import { stripeAPI } from '../services/stripe';
import { HomeContainer, Product, ProductFooter } from '../styles/pages/home';
import { NumberFormatter } from '../utils/formatter';
import Link from 'next/link';

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
			<Head>
				<title>igShop | Home</title>
			</Head>

			{products?.map(product => {
				return (
					<Link
						href={`/product/${product.id}`}
						key={product.id}
						prefetch={false}
					>
						<Product>
							<Image
								src={product.imageUrl}
								alt=""
								width={520}
								height={480}
							/>

							<ProductFooter>
								<span>{product.name}</span>

								<strong>{product.price}</strong>
							</ProductFooter>
						</Product>
					</Link>
				);
			})}
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
				price: NumberFormatter.format(price.unit_amount! / 100),
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
				products: [],
			},
			revalidate: 60 * 60 * 2, // 2 hours
		};
	}
};
