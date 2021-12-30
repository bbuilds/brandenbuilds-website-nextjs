import { getAllFilesFrontMatter } from '@/lib/mdx';

async function handler(req, res) {
	const reposts = await getAllFilesFrontMatter();
	return res.status(200).json(reposts);
}

export default handler;
