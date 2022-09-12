import type { AppProps } from 'next/app';
import { Container, Header } from '../styles/app';
import { globalStyles } from '../styles/global';
import logoPath from '../assets/Logo.svg';
import Image from 'next/future/image';
import Link from 'next/link';

globalStyles();

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Container>
			<Link href={'/'}>
				<Header>
					<Image src={logoPath} alt="" />
				</Header>
			</Link>

			<Component {...pageProps} />
		</Container>
	);
}

export default MyApp;
