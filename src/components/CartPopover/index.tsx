import * as Popover from '@radix-ui/react-popover';
import axios from 'axios';
import { X } from 'phosphor-react';
import { ReactNode, useState } from 'react';
import { useCart } from '../../contexts/CartContext';
import { Toast } from '../Toast';
import { PurchaseInfo } from './components/PurchaseInfo';
import { ShirtItem } from './components/ShirtItem';
import {
	CartPopoverAnchor,
	CartPopoverContent,
	CartPopverCloseButton,
	FinishPurchaseButton,
} from './styles';

interface ICartPopoverProps {
	children: ReactNode;
}

export function CartPopover({ children }: ICartPopoverProps) {
	const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
		useState(false);
	const [toastIsOpen, setToastIsOpen] = useState(false);

	const { cart } = useCart();

	async function handlePurchase() {
		try {
			setIsCreatingCheckoutSession(true);

			const line_items = cart.map(product => {
				return {
					price: product.price_id,
					quantity: 1,
				};
			});

			const response = await axios.post('/api/checkout', {
				line_items,
			});

			const { checkoutUrl } = response.data;

			window.location.href = checkoutUrl;
		} catch (err) {
			setToastIsOpen(true);
			setIsCreatingCheckoutSession(false);
		}
	}

	return (
		<>
			<Popover.Root>
				{children}
				<CartPopoverAnchor />

				<Popover.Portal>
					<CartPopoverContent>
						<CartPopverCloseButton>
							<X size={24} weight="bold" />
						</CartPopverCloseButton>

						<h1>Sacola de compras</h1>

						{cart.map(product => (
							<ShirtItem key={product.id} {...product} />
						))}

						<PurchaseInfo />

						<FinishPurchaseButton
							disabled={
								isCreatingCheckoutSession || cart.length === 0
							}
							onClick={handlePurchase}
						>
							Finalizar compra
						</FinishPurchaseButton>
					</CartPopoverContent>
				</Popover.Portal>
			</Popover.Root>

			<Toast
				duration={3000}
				type="background"
				variant="error"
				title="Erro"
				description="Falha ao completar a compra"
				open={toastIsOpen}
				onOpenChange={setToastIsOpen}
			/>
		</>
	);
}
