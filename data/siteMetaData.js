const dev = process.env.NODE_ENV !== 'production';
const server = dev ? 'http://localhost:3000' : 'https://brandenbuilds.com';

const siteMetaData = {
	title: 'Branden Builds Web Developer && Storyteller',
	author: 'Branden Builds',
	headerTitle: 'TailwindBlog',
	description:
		'Branden Builds specializes in building custom web development, headless wordpress solutions, and telling bad ass stories',
	language: 'en-us',
	siteUrl: server,
	siteRepo: 'https://github.com/bbuilds/brandenbuilds-website-nextjs',
	siteLogo: '/images/logo.png',
	socialBanner: '/images/brandenbuilds-opengraph.jpg',
	email: 'hello@brandenbuilds.com',
	github: 'https://github.com/bbuilds',
	linkedin: 'https://www.linkedin.com/in/branden-builds',
	locale: 'en-US'
};

module.exports = siteMetaData;
