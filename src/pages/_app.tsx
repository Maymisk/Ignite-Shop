import type { AppProps } from 'next/app';
import { Header } from '../components/Header';
import { Container, ToastViewport } from '../styles/app';
import { globalStyles } from '../styles/global';
import { CartContextProvider } from '../contexts/CartContext';
import { Provider as ToastProvider } from '@radix-ui/react-toast';

globalStyles();

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ToastProvider label="Notificação" swipeDirection="right">
			<CartContextProvider>
				<Container>
					<Header />

					<Component {...pageProps} />
				</Container>

				<ToastViewport />
			</CartContextProvider>
		</ToastProvider>
	);
}

export default MyApp;
