import { bundleMDX } from 'mdx-bundler';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import readingTime from 'reading-time';
import getAllFilesRecursively from './files';
import remarkTocHeadings from './remark-toc-headings';

// Rehype packages
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

const root = process.cwd();

export function getFiles() {
	const prefixPaths = path.join(root, 'data/posts');
	const files = getAllFilesRecursively(prefixPaths);
	// Only want to return blog/path and ignore root, replace is needed to work on Windows
	return files.map((file) => file.slice(prefixPaths.length + 1).replace(/\\/g, '/'));
}

export function formatSlug(slug) {
	return slug.replace(/\.(mdx|md)/, '');
}

export function dateSortDesc(a, b) {
	if (a > b) return -1;
	if (a < b) return 1;
	return 0;
}

//Retrieve blog posts by slug
export async function getFileBySlug(slug) {
	const mdxPath = path.join(root, 'data/posts', `${slug}.mdx`);
	const mdPath = path.join(root, 'data/posts', `${slug}.md`);
	const source = fs.existsSync(mdxPath)
		? fs.readFileSync(mdxPath, 'utf8')
		: fs.readFileSync(mdPath, 'utf8');

	// https://github.com/kentcdodds/mdx-bundler#nextjs-esbuild-enoent
	if (process.platform === 'win32') {
		process.env.ESBUILD_BINARY_PATH = path.join(root, 'node_modules', 'esbuild', 'esbuild.exe');
	} else {
		process.env.ESBUILD_BINARY_PATH = path.join(root, 'node_modules', 'esbuild', 'bin', 'esbuild');
	}

	let toc = [];

	// Parsing frontmatter here to pass it in as options to rehype plugin
	const { data: frontMatter } = matter(source);
	const { code } = await bundleMDX({
		source,
		// mdx imports can be automatically source from the components directory
		cwd: path.join(root, 'components'),
		xdmOptions(options) {
			// this is the recommended way to add custom remark/rehype plugins:
			// The syntax might look weird, but it protects you in case we add/remove
			// plugins in the future.
			options.remarkPlugins = [
				...(options.remarkPlugins ?? []),
				[remarkTocHeadings, { exportRef: toc }]
			];
			options.rehypePlugins = [
				...(options.rehypePlugins ?? []),
				rehypeSlug,
				rehypeAutolinkHeadings
			];
			return options;
		},
		esbuildOptions: (options) => {
			options.loader = {
				...options.loader,
				'.js': 'jsx'
			};
			return options;
		}
	});

	return {
		mdxSource: code,
		toc,
		frontMatter: {
			readingMinutes: readingTime(code).minutes,
			slug: slug || null,
			fileName: fs.existsSync(mdxPath) ? `${slug}.mdx` : `${slug}.md`,
			...frontMatter
		}
	};
}

//Retrieve all blog posts frontmatter
export async function getAllFilesFrontMatter() {
	const prefixPaths = path.join(root, 'data/posts');

	const files = getAllFilesRecursively(prefixPaths);

	const allFrontMatter = [];

	files.forEach((file) => {
		// Replace is needed to work on Windows
		const fileName = file.slice(prefixPaths.length + 1).replace(/\\/g, '/');
		// Remove Unexpected File
		if (path.extname(fileName) !== '.md' && path.extname(fileName) !== '.mdx') {
			return;
		}
		const source = fs.readFileSync(file, 'utf8');
		const { data: frontmatter } = matter(source);
		if (frontmatter.draft !== true) {
			allFrontMatter.push({
				...frontmatter,
				slug: formatSlug(fileName),
				date: frontmatter.date ? new Date(frontmatter.date).toISOString() : null
			});
		}
	});

	return allFrontMatter.sort((a, b) => dateSortDesc(a.date, b.date));
}
