import { createContext, ReactNode, useContext, useState } from 'react';
import { Toast } from '../components/Toast';

interface IProduct {
	id: string;
	name: string;
	imageUrl: string;
	formattedPrice: string;
	price: number;
	price_id: string;
}

interface ICartContextData {
	cart: IProduct[];
	addProduct(product: IProduct): boolean;
	removeProduct(id: string): void;
	clearCart(): void;
}

interface ICartContextProviderProps {
	children: ReactNode;
}

const CartContext = createContext<ICartContextData>({} as ICartContextData);

export function CartContextProvider({ children }: ICartContextProviderProps) {
	const [cart, setCart] = useState<IProduct[]>([]);
	const [toastIsOpen, setToastIsOpen] = useState(false);

	function addProduct(product: IProduct) {
		const productExists = cart.find(
			cartProduct => cartProduct.id === product.id
		);

		if (productExists) {
			setToastIsOpen(true);
			return false;
		}

		setCart(prevState => [...prevState, product]);

		return true;
	}

	function removeProduct(id: string) {
		setCart(prevState => prevState.filter(product => product.id !== id));
	}

	function clearCart() {
		setCart([]);
	}

	return (
		<CartContext.Provider
			value={{ cart, addProduct, removeProduct, clearCart }}
		>
			{children}

			<Toast
				title="Aviso"
				description="Esse produto já está no seu carrinho."
				variant="warning"
				duration={1500}
				type="foreground"
				open={toastIsOpen}
				onOpenChange={setToastIsOpen}
			/>
		</CartContext.Provider>
	);
}

export function useCart() {
	return useContext(CartContext);
}
