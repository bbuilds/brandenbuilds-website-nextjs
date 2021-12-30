const withMDX = require('@next/mdx')({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [],
		rehypePlugins: []
	}
});

module.exports = withMDX({
	reactStrictMode: true,
	pageExtensions: ['js', 'jsx', 'md', 'mdx'],
	webpack(config, { isServer }) {
		if (isServer) {
			require('./scripts/generate-sitemap');
		}
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack']
		});

		return config;
	}
});
