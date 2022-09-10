import { Container, Product, ProductFooter } from '../styles/pages/home';
import shirtPath from '../assets/Shirt.png';
import Image from 'next/future/image';

// implement carousel with radix ui when it releases
export default function Home() {
	return (
		<Container>
			<Product>
				<Image src={shirtPath} alt="" />

				<ProductFooter>
					<span>Camisa</span>

					<strong>79,80</strong>
				</ProductFooter>
			</Product>
			<Product>
				<Image src={shirtPath} alt="" />

				<ProductFooter>
					<span>Camisa</span>

					<strong>79,80</strong>
				</ProductFooter>
			</Product>
			<Product>
				<Image src={shirtPath} alt="" />

				<ProductFooter>
					<span>Camisa</span>

					<strong>79,80</strong>
				</ProductFooter>
			</Product>
		</Container>
	);
}
