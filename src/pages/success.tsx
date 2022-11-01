import { GetServerSideProps } from 'next';
import Image from 'next/future/image';
import Head from 'next/head';
import Link from 'next/link';
import Stripe from 'stripe';
import { stripeAPI } from '../services/stripe';
import {
	ImageContainer,
	ImageGradient,
	SuccessContainer,
} from '../styles/pages/success';
import { productSample } from '../utils/sample';

interface ICheckoutProps {
	customerName: string;
	products: {
		name: string;
		imageUrl: string;
	}[];
}

export default function Success({ customerName, products }: ICheckoutProps) {
	const LEFT_OFFSET = (products.length - 1) * 31;

	return (
		<>
			<Head>
				<title>New Drip! | Ig Shop</title>

				<meta name="robots" content="noindex" />
			</Head>

			<SuccessContainer>
				<ImageContainer
					css={{
						left: products.length > 1 ? LEFT_OFFSET : 'auto',
					}}
				>
					{products.map((product, index) => {
						return (
							<ImageGradient
								css={{
									zIndex: index,
									right: index * 62,
								}}
							>
								<Image
									src={product.imageUrl}
									alt=""
									width={140}
									height={140}
								/>
							</ImageGradient>
						);
					})}
				</ImageContainer>

				<h1>Compra efetuada!</h1>

				<p>
					Uhuul <strong>{customerName},</strong> sua compra de{' '}
					{products.length} camiseta(s) já está a caminho da sua casa.{' '}
				</p>

				<Link href={'/'}>Voltar ao catálogo</Link>
			</SuccessContainer>
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	const session_id = query.session_id as string;

	try {
		const checkoutSession = await stripeAPI.checkout.sessions.retrieve(
			session_id,
			{
				expand: ['line_items', 'line_items.data.product'],
			}
		);

		const customerName = checkoutSession.customer_details?.name;
		const products = checkoutSession.line_items?.data.map(lineItem => {
			const product = lineItem.product as Stripe.Product;

			return {
				name: product.name,
				imageUrl: product.images[0],
			};
		});

		return {
			props: {
				customerName: customerName,
				products,
			},
		};
	} catch {
		return {
			redirect: {
				destination: '/',
				permanent: false,
			},
		};
	}
};
