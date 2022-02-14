import { useState } from 'react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { PageSEO } from '@/components/SEO';
import PostList from '@/components/PostList';
import { getAllFilesFrontMatter } from '@/lib/mdx';
import { getAllTags } from '@/lib/tags';
import SearchIcon from '@/images/svg/search.svg';
import Tag from '@/components/Tag';

function BlogPage({ posts, tags }) {
	const [allData] = useState(posts);
	const [filteredData, setFilteredData] = useState(allData);

	function handleSearchFiltering(event) {
		let value = event.target.value.toLowerCase();
		let result = [];

		result = allData.filter((data) => {
			let title = data.title.toLowerCase();
			return title.search(value) !== -1;
		});

		if (!result || result.length === 0) {
			result = [...allData];
		}

		setFilteredData(result);
	}

	//sorting the tags object by number of entries
	const sortedPostTags = Object.keys(tags)
		.sort(function (a, b) {
			return -(tags[a] - tags[b]);
		})
		.slice(0, 20);

	return (
		<>
			<PageSEO
				title={`Branden Builds Blog | Web Development | SEO | Branding`}
				description={
					'Branden Builds technical articles and posts on web development, SEO, and branding.'
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
							<div id="trigger-articles" className="filter-posts mb-10">
								<label htmlFor="search-input" className="sr-only">
									Search Branden Builds Articles
								</label>
								<div className="input-search flex-grow search-form flex items-center p-2 mb-6 text-base leading-normal bg-white text-grey-darker border border-grey rounded">
									<SearchIcon className="stroke-current" />
									<input
										id="search-input"
										type="search"
										name="search-input"
										placeholder={`Search Branden Builds`}
										className="search p-2 flex-grow bg-white"
										onChange={(event) => {
											handleSearchFiltering(event, 'search');
										}}
									/>
								</div>
								<div className="input-tags hidden lg:block">
									<p className="mb-2">Popular Topics:</p>
									<div className="flex flex-wrap">
										{sortedPostTags.map((tag, index) => {
											return <Tag key={tag} text={tag} isPost={false} />;
										})}
									</div>
								</div>
							</div>
							<PostList posts={filteredData} showAmount={6} />
						</div>
					</section>
				</article>
			</Layout>
		</>
	);
}

export async function getStaticProps() {
	const posts = await getAllFilesFrontMatter();
	const tags = await getAllTags();
	return { props: { posts, tags } };
}

export default BlogPage;
