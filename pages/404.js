import Link from 'next/link';
import Layout from '@/components/Layout';
import BrandCube from '@/components/BrandCube';
export default function Custom404() {
	return (
		<Layout>
			<section
				id="404-hero"
				className="min-h-screen bg-bbuilds-black text-bbuilds-gray flex flex-wrap items-center relative"
			>
				<div className="container mx-auto px-4">
					<h1 className="mb-8">404 - Page Not Found</h1>
					<Link href="/">
						<a className="button">Go back home</a>
					</Link>
				</div>
				<div className="hero-brand-cube max-w-100 hidden md:block absolute right-0 bottom-0">
					<BrandCube />
				</div>
			</section>
		</Layout>
	);
}
