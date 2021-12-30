import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';
import { PageSEO } from '@/components/SEO';
function WordPressServicePage() {
	return (
		<Layout>
			<PageSEO
				title={`Traditional WordPress Development`}
				description={`Using WordPress as a traditional monolithic CMS? I come correct in every aspect of real WordPress development.`}
			/>
			<article>
				<PageHeader
					title={`Traditional WordPress Development`}
					copy={`Using WordPress as a traditional monolithic CMS? I come correct in every aspect of real WordPress development.`}
				/>
				<section className="pt-10 pb-20 post-content">
					<div className="px-4 max-w-3xl mx-auto">
						<p>
							WordPress has been around for a long time and dominates the web as{' '}
							<a href="https://wordpress.com/" target="_blank" rel="noopener noreferrer nofollow">
								42% of the web is powered by WordPress.
							</a>{' '}
							It&pos;s a highly flexible and customizable CMS that I have tinkered with every aspect
							of the WordPress ecosystem.
						</p>
						<h2>An Actual WordPress Developer</h2>
						<p>
							WordPress can get a bad reputation from being bloated and having a lot of people
							&quot;claim&quot; to be developers and then build a half-assed website using a site
							builder. It can be really difficult to sift through the thousands of marketing or
							&quot;web development&quot; agencies to see who is legit.
						</p>
						<p>
							When I builds WordPress solutions or join a team, I am looking to build from the
							ground up and use as minimal plugins as possible. I take pride in the speed and code
							quality of every WordPress website project I&#x27;m in.
						</p>
						<p>Some WordPress Development Services I offer:</p>
						<ul>
							<li>custom plugin development</li>
							<li>custom built from the ground up theme development</li>
							<li>migrations to or from WordPress</li>
							<li>building Block Editor (Gutenberg) blocks</li>
							<li>optimization / website Audit.</li>
							<li>agency training</li>
							<li>
								<Link href="/headless-wordpress-development">
									<a>headless WordPress development</a>
								</Link>
							</li>
						</ul>
					</div>
				</section>
			</article>
		</Layout>
	);
}

export default WordPressServicePage;
