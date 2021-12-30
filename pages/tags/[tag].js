import { TagSEO } from '@/components/SEO';
import { getAllTags } from '@/lib/tags';
import { getAllFilesFrontMatter } from '@/lib/mdx';
import { slug } from 'github-slugger';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import PostCard from '@/components/PostCard';

export async function getStaticPaths() {
	const tags = await getAllTags();

	return {
		paths: Object.keys(tags).map((tag) => ({
			params: {
				tag
			}
		})),
		fallback: false
	};
}

export async function getStaticProps({ params }) {
	const kebabCase = (str) => slug(str);
	const allPosts = await getAllFilesFrontMatter();
	const filteredPosts = allPosts.filter((post) =>
		post.tags.map((t) => kebabCase(t)).includes(params.tag)
	);

	return { props: { posts: filteredPosts, tag: params.tag } };
}

export default function TagPage({ posts, tag }) {
	const title = tag[0].toUpperCase() + tag.split(' ').join('-').slice(1);
	return (
		<>
			<TagSEO title={`Posts Tagged: ${title} | Branden Builds Blog`} />
			<Layout>
				<article>
					<PageHeader title={`Posts Tagged: ${title}`} />
					<section id="recent-posts" className="bg-bbuilds-gray py-20">
						<div className="container mx-auto px-4">
							<h2 className="mb-16 text-center text-h2">{`Articles About ${title}`}</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-x-4">
								{posts.map((post, index) => {
									return (
										<div key={index} className="posts-grid__item">
											<PostCard post={post} />
										</div>
									);
								})}
							</div>
						</div>
					</section>
				</article>
			</Layout>
		</>
	);
}
