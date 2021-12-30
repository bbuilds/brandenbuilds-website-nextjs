import fs from 'fs';
import path from 'path';
import { getFileBySlug, getAllFilesFrontMatter, formatSlug } from '@/lib/mdx';
import { MDXLayoutRenderer } from '@/components/MDXComponent';
import Layout from '@/components/Layout';

const PostPage = ({ post, prev, next }) => {
	const { mdxSource, toc, frontMatter } = post;

	return (
		<Layout>
			<MDXLayoutRenderer
				layout={'PostLayout'}
				toc={toc}
				frontMatter={frontMatter}
				mdxSource={mdxSource}
				prev={prev}
				next={next}
			/>
		</Layout>
	);
};

export const getStaticPaths = async () => {
	const files = fs.readdirSync(path.join('data/posts'));
	const paths = files.map((filename) => ({
		params: {
			slug: filename.replace(/\.(mdx|md)/, '')
		}
	}));
	return {
		paths,
		fallback: false
	};
};

export const getStaticProps = async ({ params }) => {
	//grab all of the posts
	const allPosts = await getAllFilesFrontMatter();

	const postIndex = allPosts.findIndex((post) => formatSlug(post.slug) === params.slug);
	const prev = allPosts[postIndex + 1] || null;
	const next = allPosts[postIndex - 1] || null;

	const post = await getFileBySlug(params.slug);
	return {
		props: {
			post,
			prev,
			next
		}
	};
};

export default PostPage;
