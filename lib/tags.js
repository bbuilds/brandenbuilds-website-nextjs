import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { getFiles } from './mdx';
import { slug } from 'github-slugger';

const kebabCase = (str) => slug(str);

const root = process.cwd();

export async function getAllTags() {
	const files = await getFiles();

	let tagCount = {};
	// Iterate through each post, putting all found tags into `tags`
	files.forEach((file) => {
		const source = fs.readFileSync(path.join(root, 'data/posts', file), 'utf8');
		const { data } = matter(source);
		if (data.tags && data.draft !== true) {
			data.tags.forEach((tag) => {
				const formattedTag = kebabCase(tag);
				if (formattedTag in tagCount) {
					tagCount[formattedTag] += 1;
				} else {
					tagCount[formattedTag] = 1;
				}
			});
		}
	});

	return tagCount;
}
