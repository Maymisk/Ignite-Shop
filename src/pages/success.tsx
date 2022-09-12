import { GetServerSideProps } from 'next';
import Image from 'next/future/image';
import Head from 'next/head';
import Link from 'next/link';
import Stripe from 'stripe';
import { stripeAPI } from '../services/stripe';
import { ImageContainer, SuccessContainer } from '../styles/pages/success';

interface ICheckoutProps {
	customerName: string;
	product: {
		name: string;
		imageUrl: string;
	};
}

export default function Success({ customerName, product }: ICheckoutProps) {
	return (
		<>
			<Head>
				<title>New Drip! | Ig Shop</title>

				<meta name="robots" content="noindex" />
			</Head>
			<SuccessContainer>
				<h1>Compra efetuada!</h1>

				<ImageContainer>
					<Image src={product.imageUrl} alt="" width={115} />
				</ImageContainer>

				<p>
					Uhuul <strong>{customerName},</strong> sua{' '}
					<strong>{product.name}</strong> já está a caminho da sua
					casa.{' '}
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
				expand: ['line_items', 'line_items.data.price.product'],
			}
		);

		const customerName = checkoutSession.customer_details?.name;
		const product = checkoutSession.line_items?.data[0]
			.product as Stripe.Product;

		return {
			props: {
				customerName: customerName,
				product: {
					name: product.name,
					imageUrl: product.images[0],
				},
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
