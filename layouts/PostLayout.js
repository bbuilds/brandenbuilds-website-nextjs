import Link from 'next/link';
import Image from 'next/image';
import siteMetaData from '@/data/siteMetaData';
import PageTitle from '@/components/PageTitle';
import Tag from '@/components/Tag';
import BlogStyles from '@/styles/posts.module.css';
import SocialShare from '@/components/SocialShare';
import EditDialog from '@/components/EditDialog';
import { BlogSEO } from '@/components/SEO';

const editUrl = (fileName) => `${siteMetaData.siteRepo}/blob/master/data/posts/${fileName}`;

export default function PostLayout({ frontMatter, next, prev, children }) {
	//pull fornt matter data
	const { slug, date, title, tags, readingMinutes, featuredImage, fileName } = frontMatter;
	//reading mins rounding
	const roundedReadingMinutes = Math.round(readingMinutes);

	return (
		<div
			className="max-w-3xl px-4 mx-auto sm:px-6 xl:px-0 lg:max-w-4xl
		"
		>
			<BlogSEO url={`${siteMetaData.siteUrl}/${slug}`} {...frontMatter} />

			<article className={BlogStyles['blog-post']}>
				<header className="pt-8 lg:mt-10 lg:pb-8 lg:border-b lg:border-gray-200 lg:mb-12">
					<div className="mx-auto lg:max-w-2xl">
						<div className="space-y-1 lg:text-center">
							<div>
								<dt className="sr-only">Published on</dt>
								<dd className="text-base leading-6">
									<time dateTime={date}>
										{new Date(date).toLocaleDateString(siteMetaData.locale, {
											weekday: 'long',
											year: 'numeric',
											month: 'long',
											day: 'numeric'
										})}
									</time>
								</dd>
							</div>
							<PageTitle>{title}</PageTitle>
							{tags && (
								<div className="py-2 flex items-center lg:justify-center">
									<h2 className="text-small mb-0 mr-2">Tags:</h2>
									<div className="flex flex-wrap">
										{tags.map((tag) => (
											<Tag key={tag} text={tag} isPost={true} />
										))}
									</div>
								</div>
							)}
						</div>
					</div>
				</header>
				<div
					className="pb-8 lg:grid lg:grid-cols-4 lg:gap-x-6"
					style={{ gridTemplateRows: 'auto 1fr' }}
				>
					<aside>
						<dl className="hidden lg:block">
							<dt className="sr-only">Reading Time</dt>
							<dd className="py-4 lg:pb-6 lg:pt-0 lg:border-b lg:border-gray-200">
								<span className="text-small tracking-wide">
									{roundedReadingMinutes}{' '}
									{roundedReadingMinutes == 1 ? ' Minute ' : ' Minutes ' + ' Read'}
								</span>
							</dd>
						</dl>
						<div className="py-4 lg:py-6 border-b border-gray-200">
							<SocialShare url={`${siteMetaData.siteUrl}/${slug}`} title={title} />
						</div>
					</aside>
					<div className="divide-y divide-gray-200 lg:pb-0 lg:col-span-3 lg:row-span-2">
						<div className="post-content pt-5 pb-8 prose max-w-none lg:pt-0">
							{featuredImage && <Image src={featuredImage} alt={title} width={820} height={430} />}

							{children}
						</div>
					</div>
					<footer>
						<EditDialog>
							<p>Notice something that needs to be changed? You can edit this post on Github!</p>
							<p>
								<a href={editUrl(fileName)} target="_blank" rel="noopener noreferrer">
									Edit on Github
								</a>
							</p>
						</EditDialog>
						{(next || prev) && (
							<div className="py-4">
								{prev && (
									<div>
										<h2 className="text-small tracking-wide  uppercase">Previous Article</h2>

										<Link href={`/${prev.slug}`}>
											<a className="text-small">{prev.title}</a>
										</Link>
									</div>
								)}
								{next && (
									<div className="mt-6">
										<h2 className="text-small tracking-wide  uppercase">Next Article</h2>

										<Link href={`/${next.slug}`}>
											<a className="text-small">{next.title}</a>
										</Link>
									</div>
								)}
							</div>
						)}
						<div className="pt-5">
							<Link href="/blog" className="text-primary-500 hover:text-primary-600">
								&larr; Back to the blog
							</Link>
						</div>
					</footer>
				</div>
			</article>
		</div>
	);
}
