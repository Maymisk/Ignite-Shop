import { NextApiRequest, NextApiResponse } from 'next';
import { stripeAPI } from '../../services/stripe';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method != 'POST') {
		return res.status(405).json({ error: 'Method not allowed' });
	}

	const { line_items } = req.body;

	const success_url = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
	const cancel_url = `${process.env.NEXT_URL}`;

	const { url: checkoutUrl } = await stripeAPI.checkout.sessions.create({
		mode: 'payment',
		line_items,
		cancel_url,
		success_url,
	});

	res.status(201).json({ checkoutUrl });
}
