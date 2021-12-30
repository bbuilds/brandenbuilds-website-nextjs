import Layout from '@/components/Layout';
import BrandCube from '@/components/BrandCube';
import { PageSEO } from '@/components/SEO';

function ContactPage() {
	return (
		<Layout>
			<PageSEO
				title={`Contact Branden Builds`}
				description={'Drop ya boy Branden Builds a line and lets do work!'}
			/>
			<article>
				<section
					id="contact-hero"
					className="py-20 bg-bbuilds-black text-bbuilds-gray flex flex-wrap items-center relative min-h-screen"
				>
					<div className="container mx-auto px-4 relative z-10">
						<h1 className="text-xl md:text-3xl lg:max-w-2/3 mb-8">Contact Branden Builds</h1>
						<form
							name="bbuilds-contact"
							className="md:max-w-1/2"
							action="https://formspree.io/f/xjvjpbqb"
							method="POST"
						>
							<ul>
								<li className="mb-4">
									<label className="block mb-2" htmlFor="name">
										Name*
									</label>
									<input
										id="name"
										className="block bg-bbuilds-gray w-full p-2 text-bbuilds-black"
										type="text"
										autoComplete="name"
										name="name"
									/>
								</li>
								<li className="mb-4">
									<label htmlFor="email" className="block mb-2">
										E-Mail*
									</label>
									<input
										id="email"
										type="email"
										autoComplete="email"
										name="email"
										className="block bg-bbuilds-gray w-full p-2 text-bbuilds-black"
									/>
								</li>
								<li className="mb-4">
									<label className="block mb-2" htmlFor="message">
										Your message*
									</label>
									<textarea
										id="message"
										cols="30"
										rows="10"
										className="block bg-bbuilds-gray w-full p-2 text-bbuilds-black"
										name="message"
									/>
								</li>
								<li>
									<button type="submit" className="btn">
										Send message
									</button>
								</li>
							</ul>
						</form>
					</div>
					<div className="hero-brand-cube absolute right-0 bottom-0 max-w-1/2 md:max-w-1/4">
						<BrandCube />
					</div>
				</section>
			</article>
		</Layout>
	);
}

export default ContactPage;
