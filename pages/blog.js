import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { PageSEO } from '@/components/SEO';
import PostCard from '@/components/PostCard';
import { getAllFilesFrontMatter } from '@/lib/mdx';

function BlogPage({ posts }) {
	return (
		<>
			<PageSEO
				title={`Branden Builds Blog | Web Development | SEO | Branding`}
				description={
					'Brande Builds technical articles and posts on web development, SEO, and branding.'
				}
			/>
			<Layout>
				<article>
					<PageHeader
						title={`Branden Builds Blog`}
						copy={`Read articles and posts on web development, SEO, and branding.`}
					/>
					<section id="recent-posts" className="bg-bbuilds-gray py-20">
						<div className="container mx-auto px-4">
							<h2 id="trigger-articles" className="mb-16 text-center text-h2">
								Articles
							</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-x-4">
								{posts.map((post, index) => {
									return (
										<div
											key={index}
											className="posts-grid__item"
											data-aos="fade-right"
											data-aos-anchor="#trigger-articles"
											data-aos-delay={`${index}00`}
										>
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

export async function getStaticProps() {
	const posts = await getAllFilesFrontMatter();

	return { props: { posts } };
}

export default BlogPage;
