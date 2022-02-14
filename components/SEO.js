import Head from 'next/head';
import { useRouter } from 'next/router';
import siteMetaData from '@/data/siteMetaData';

const CommonSEO = ({ title, description, ogType, ogImage, twImage }) => {
	const router = useRouter();
	return (
		<Head>
			<title>{title}</title>
			<meta name="robots" content="follow, index" />
			<meta name="description" content={description} />
			<meta property="og:url" content={`${siteMetaData.siteUrl}${router.asPath}`} />
			<meta property="og:type" content={ogType} />
			<meta property="og:site_name" content={siteMetaData.title} />
			<meta property="og:description" content={description} />
			<meta property="og:title" content={title} />
			{ogImage.constructor.name === 'Array' ? (
				ogImage.map(({ url }) => <meta property="og:image" content={url} key={url} />)
			) : (
				<meta property="og:image" content={ogImage} key={ogImage} />
			)}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:site" content={siteMetaData.twitter} />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={twImage} />
		</Head>
	);
};

export const PageSEO = ({ title, description }) => {
	const ogImageUrl = siteMetaData.siteUrl + siteMetaData.socialBanner;
	const twImageUrl = siteMetaData.siteUrl + siteMetaData.socialBanner;
	return (
		<CommonSEO
			title={title}
			description={description}
			ogType="website"
			ogImage={ogImageUrl}
			twImage={twImageUrl}
		/>
	);
};

export const TagSEO = ({ title, description }) => {
	const ogImageUrl = siteMetaData.siteUrl + siteMetaData.socialBanner;
	const twImageUrl = siteMetaData.siteUrl + siteMetaData.socialBanner;
	const router = useRouter();
	return (
		<>
			<CommonSEO
				title={title}
				description={description}
				ogType="website"
				ogImage={ogImageUrl}
				twImage={twImageUrl}
			/>
			<Head>
				<link
					rel="alternate"
					type="application/rss+xml"
					title={`${description} - RSS feed`}
					href={`${siteMetaData.siteUrl}${router.asPath}/feed.xml`}
				/>
			</Head>
		</>
	);
};

export const BlogSEO = ({ title, summary, date, lastmod, url, featuredImage }) => {
	const router = useRouter();
	const publishedAt = new Date(date).toISOString();
	const modifiedAt = new Date(lastmod || date).toISOString();

	const featuredImageURL = `${siteMetaData.siteUrl}${featuredImage}`;

	const authorList = {
		'@type': 'Person',
		name: siteMetaData.author
	};

	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'Article',
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': url
		},
		headline: title,
		image: featuredImageURL,
		datePublished: publishedAt,
		dateModified: modifiedAt,
		author: authorList,
		publisher: {
			'@type': 'Organization',
			name: siteMetaData.author,
			logo: {
				'@type': 'ImageObject',
				url: `${siteMetaData.siteUrl}${siteMetaData.siteLogo}`
			}
		},
		description: summary
	};

	return (
		<>
			<CommonSEO
				title={title}
				description={summary}
				ogType="article"
				ogImage={featuredImageURL}
				twImage={featuredImageURL}
			/>
			<Head>
				{date && <meta property="article:published_time" content={publishedAt} />}
				{lastmod && <meta property="article:modified_time" content={modifiedAt} />}
				<link rel="canonical" href={`${siteMetaData.siteUrl}${router.asPath}`} />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(structuredData, null, 2)
					}}
				/>
			</Head>
		</>
	);
};
