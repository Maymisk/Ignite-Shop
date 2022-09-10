import type { AppProps } from 'next/app';
import { Container, Header } from '../styles/app';
import { globalStyles } from '../styles/global';
import logoPath from '../assets/Logo.svg';
import Image from 'next/future/image';

globalStyles();

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Container>
			<Header>
				<Image src={logoPath} alt="" />
			</Header>
			<Component {...pageProps} />
		</Container>
	);
}

export default MyApp;
