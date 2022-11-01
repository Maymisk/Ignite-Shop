import { CartButton, HeaderContainer } from './styles';
import { Handbag } from 'phosphor-react';
import logoPath from '../../assets/Logo.svg';
import Image from 'next/future/image';
import Link from 'next/link';
import { CartPopover } from '../CartPopover';
import { CartProductCounter } from './CartProductCounter';

export function Header() {
	return (
		<HeaderContainer>
			<Link href={'/'}>
				<Image src={logoPath} alt="" />
			</Link>

			<CartPopover>
				<CartButton>
					<Handbag size={24} weight="bold" />
					<CartProductCounter />
				</CartButton>
			</CartPopover>
		</HeaderContainer>
	);
}
