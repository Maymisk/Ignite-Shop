import { ToastProps } from '@radix-ui/react-toast';
import { X } from 'phosphor-react';
import { ComponentProps } from 'react';
import {
	CloseToastButton,
	ToastContainer,
	ToastDescription,
	ToastTitle,
} from './styles';

interface IToastProps
	extends ToastProps,
		ComponentProps<typeof ToastContainer> {
	title: string;
	description: string;
}

export function Toast({ title, description, ...rest }: IToastProps) {
	return (
		<ToastContainer {...rest} asChild>
			<div>
				<ToastTitle>{title}</ToastTitle>

				<ToastDescription>{description}</ToastDescription>

				<CloseToastButton>
					<X size={16} weight="bold" />
				</CloseToastButton>
			</div>
		</ToastContainer>
	);
}
