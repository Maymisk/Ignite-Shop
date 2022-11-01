import { useMemo } from 'react';
import { useCart } from '../../../../contexts/CartContext';
import { NumberFormatter } from '../../../../utils/formatter';
import { PurchaseInfoContainer } from './styles';

export function PurchaseInfo() {
	const { cart } = useCart();

	const itemsAmount = cart.length;
	const total = useMemo(() => {
		const totalPrice = cart.reduce((total, product) => {
			return (total += product.price);
		}, 0);

		return NumberFormatter.format(totalPrice);
	}, [JSON.stringify(cart)]);

	return (
		<PurchaseInfoContainer>
			<div>
				Quantidade
				<span>{itemsAmount} itens</span>
			</div>

			<div>
				Valor total
				<span>{total}</span>
			</div>
		</PurchaseInfoContainer>
	);
}
