import { useCart } from '../../../contexts/CartContext';
import { CartProductCounterContainer } from './styles';

export function CartProductCounter() {
	const { cart } = useCart();

	if (cart.length === 0) {
		return null;
	}

	return (
		<CartProductCounterContainer>{cart.length}</CartProductCounterContainer>
	);
}
