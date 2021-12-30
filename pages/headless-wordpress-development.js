import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';
import { PageSEO } from '@/components/SEO';
function HeadlessWPServicePage() {
	return (
		<Layout>
			<PageSEO
				title={`Custom Headless WordPress Development`}
				description={`When you merge modern frontend development with the world's most popular CMS, WordPress.`}
			/>
			<article>
				<PageHeader
					title={`Custom Headless WordPress Development`}
					copy={`When you merge modern frontend development with the world's most popular CMS, WordPress.`}
				/>
				<section className="pt-10 pb-20 post-content">
					<div className="px-4 max-w-3xl mx-auto">
						<h2>Defining a Headless CMS</h2>
						<p>
							This seems to be a popular buzz phrase in recent years but for a great meaning, a
							headless content management system or headless CMS is a way to let the a CMS handle
							only the data and a modern JS framework, like react, Vue, Svelte, etc handle how to
							display the data.{' '}
							<Link href={`/blog/byoungz-headlesswp-gatsby`}>
								<a>Headless Wordpress</a>
							</Link>{' '}
							is using WordPress to manage the content as the backend.
						</p>
						<h3>Defining JAMstack and Static Site Generation</h3>

						<blockquote citation="Mathias Biilmann (CEO &amp; Co-founder of Netlify).">
							{' '}
							A modern web development architecture based on client-side JavaScript, reusable APIs,
							and prebuilt Markup
						</blockquote>

						<p>
							Jamstack approach uses JavaScript to connect to third party backends, such as headless
							WordPress to create static generated sites, called pre-rendering or compiling, the
							data into basic HTML, JS, and CSS files.
						</p>
						<h3>Why a Headless WordPress Approach?</h3>
						<p>
							WordPress already claims{' '}
							<a href="https://wordpress.com/" target="_blank" rel="noopener noreferrer nofollow">
								over 40%
							</a>{' '}
							of the web is built on its platform. So it&#x27;s familiarity as managing content is
							widely popular. However, WordPress can be infamous for being bloated and insecure.
							When we remove the &quot;head&quot; and only use WordPres to manage data, we can
							create a blazingly fast and secure website that will leave your competitors in your
							wake.
						</p>
						<p>Some benefits of headless CMS development in general</p>
						<ul className="bulleted-list">
							<li>
								Easy to integrate multiple data sources into one frontend framework like using
								WordPress for basic data and shopify for ecommerce.
							</li>
							<li>
								Removing a lot of security concerns through database exploits. Can&#x27;t exploit a
								database if there isn&#x27;t one connected to the frontend.
							</li>
							<li>
								Blazingly fast static generated site that leveraging modern techniques like code
								splitting, mage optimization, inline critical styles, and much more to give you off
								the charts performance scores.
							</li>
						</ul>
						<h3>Headlesss WordPress JavaScript Frameworks</h3>
						<p>
							I have an experience in a variety of JavaScript frameworks. I have used several JS
							frameworks to build headless CMS and specifically headless Wordpress solutions such
							as:
						</p>
						<ul>
							<li>Gatsby JS</li>
							<li>Frontity</li>
							<li>Next.JS</li>
							<li>Eleventy</li>
							<li>Wp Engines Atlas</li>
						</ul>
					</div>
				</section>
			</article>
		</Layout>
	);
}

export default HeadlessWPServicePage;
