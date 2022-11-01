interface IProduct {
	id: string;
	name: string;
	description: string;
	imageUrl: string;
	formattedPrice: string;
	price: number;
}

export const productSample: IProduct[] = [
	{
		id: '1',
		name: 'Shirt Beyond The Limits',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda voluptatem earum, blanditiis voluptates iste quos ad delectus, ratione id doloribus dolores aut facilis qui, officiis quaerat sequi veritatis excepturi fugit fuga velit. Repellat et quo vero ad laboriosam aut necessitatibus saepe aspernatur. Maiores corrupti autem delectus? Similique quas iste saepe?',
		imageUrl: '/beyondTheLimits.png',
		formattedPrice: 'R$ 79,90',
		price: 79.9,
	},
	{
		id: '2',
		name: 'Shirt Explorer',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda voluptatem earum, blanditiis voluptates iste quos ad delectus, ratione id doloribus dolores aut facilis qui, officiis quaerat sequi veritatis excepturi fugit fuga velit. Repellat et quo vero ad laboriosam aut necessitatibus saepe aspernatur. Maiores corrupti autem delectus? Similique quas iste saepe?',
		imageUrl: '/explorer.png',
		formattedPrice: 'R$ 79,90',
		price: 79.9,
	},
	{
		id: '3',
		name: 'Shirt Igniter Aboard',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda voluptatem earum, blanditiis voluptates iste quos ad delectus, ratione id doloribus dolores aut facilis qui, officiis quaerat sequi veritatis excepturi fugit fuga velit. Repellat et quo vero ad laboriosam aut necessitatibus saepe aspernatur. Maiores corrupti autem delectus? Similique quas iste saepe?',
		imageUrl: '/igniterAboard.png',
		formattedPrice: 'R$ 79,90',
		price: 79.9,
	},
	{
		id: '4',
		name: 'Shirt Igniter Aboard',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda voluptatem earum, blanditiis voluptates iste quos ad delectus, ratione id doloribus dolores aut facilis qui, officiis quaerat sequi veritatis excepturi fugit fuga velit. Repellat et quo vero ad laboriosam aut necessitatibus saepe aspernatur. Maiores corrupti autem delectus? Similique quas iste saepe?',
		imageUrl: '/igniterAboard.png',
		formattedPrice: 'R$ 79,90',
		price: 79.9,
	},
];
