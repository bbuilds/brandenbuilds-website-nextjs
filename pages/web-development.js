import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import Image from 'next/image';
import { PageSEO } from '@/components/SEO';
import siteMetaData from '@/data/siteMetaData';
import { skills } from '@/data/skillsData';

function WebDevServicePage() {
	const backendSkills = skills.filter((skill) => {
		return skill.type === 'backend' || skill.type === 'both';
	});

	const frontendSkills = skills.filter((skill) => {
		return skill.type === 'frontend' || skill.type === 'both';
	});
	return (
		<>
			<PageSEO
				title={`Website and Web App Development`}
				description={`I like creating sexy user interfaces && lean + scalable backend systems.`}
			/>
			<Layout>
				<article>
					<PageHeader
						title={`Website and Web App Development`}
						copy={`I like creating sexy user interfaces && lean + scalable backend systems.`}
					/>
					<section className="pt-10 pb-20 post-content">
						<div className="px-4 max-w-3xl mx-auto">
							<p>
								There is no one size fits all or cooking cutter process when it comes to creating
								digital experiences on the web. I am able to build custom websites and apps from the
								group up or jump in any part of the process to aide a currently development team.
								Transform ideas and inspirations into engaging digital experiences.
							</p>
							<p>I use a tried true process to build web solutions from the ground up.</p>
							<ol>
								<li>Discovery - What are the business goals and problem we would like to solve?</li>
								<li>Research - Who are we solving this for?</li>
								<li>Create - How will we build this solution?</li>
								<li>QA - Test Our Solution</li>
								<li>Launch - Time to market our solution?</li>
							</ol>
							<p>
								Repeat steps 2, 3, and 4 are necessary. This is not a waterfall approach process.
							</p>
							<h2>Frontend Development</h2>
							<p>
								First impressions are vital to your reputation and business. I enjoy creating
								frontend web development solutions using latest JS frameworks like Vue, React, and
								Svelte, specially consuming decoupled backend CMS solutions. I can take designs and
								craft them into sexy user interfaces that are remarkably fast. I enjoy using
								animation as tool for intuitive client interactions.
							</p>
							<ul
								className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-6"
								style={{ paddingLeft: 0 }}
							>
								{frontendSkills &&
									frontendSkills.map((skill) => {
										return (
											<li
												key={skill.title}
												className="flex items-center bg-bbuilds-gray text-center shadow-sm"
											>
												<Image
													src={skill.logo}
													alt={`${skill.title} Logo`}
													width="40"
													height="40"
													className="p-1.5 bg-white h-12 w-12"
												/>
												<span className="ml-auto mr-auto">{skill.title}</span>
											</li>
										);
									})}
							</ul>
							<h2>Backend Development</h2>
							<p>
								Need a scalable and secure API built? I enjoy using the backend languages PHP and
								Node.js mostly
							</p>
							<ul
								className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-6"
								style={{ paddingLeft: 0 }}
							>
								{backendSkills &&
									backendSkills.map((skill) => {
										return (
											<li
												key={skill.title}
												className="flex items-center bg-bbuilds-gray text-center shadow-sm"
											>
												<Image
													src={skill.logo}
													alt={`${skill.title} Logo`}
													width="40"
													height="40"
													className="p-1.5 bg-white h-12 w-12"
												/>
												<span className="ml-auto mr-auto">{skill.title}</span>
											</li>
										);
									})}
							</ul>
						</div>
					</section>
				</article>
			</Layout>
		</>
	);
}

export default WebDevServicePage;
