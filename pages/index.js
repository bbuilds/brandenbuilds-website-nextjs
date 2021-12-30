import Layout from '@/components/Layout';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Process from '@/components/home/Process';
import Reccomendations from '@/components/home/Reccomendations';
import RecentPosts from '@/components/home/RecentPosts';
import siteMetaData from '@/data/siteMetaData';
import { servicesList } from '@/data/servicesData';
import { skills } from '@/data/skillsData';
import { getAllFilesFrontMatter } from '@/lib/mdx';
import { PageSEO } from '@/components/SEO';

function HomePage({ data, posts }) {
	return (
		<Layout>
			<PageSEO title={siteMetaData.title} description={siteMetaData.description} />
			<article>
				<Hero />
				<Services servicesList={servicesList} skillsList={skills} />
				<Process />
				<Reccomendations />
				<RecentPosts posts={posts} />
			</article>
		</Layout>
	);
}

export async function getStaticProps() {
	const posts = await getAllFilesFrontMatter();

	return {
		props: { posts } // will be passed to the page component as props
	};
}

export default HomePage;
