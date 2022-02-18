import cn from 'classnames';
import Link from 'next/link';
import Image from 'next/image';
import siteMetaData from '@/data/siteMetaData';
import PostCardStyles from '@/styles/post-card.module.css';

export default function PostCard({ post }) {
	const { featuredImage, title, slug, summary, date, tags } = post;
	return (
		<article
			className={cn(
				'relative group transition duration-300 ease-in-out bg-zinc-50 h-full rounded-xl overflow-hidden hover:drop-shadow-md focus:drop-shadow-md',
				PostCardStyles['post-preview']
			)}
		>
			<div
				className={cn(
					PostCardStyles['post-preview-image'],
					'post-preview-image m-auto bg-bbuilds-black  h-48 w-full flex items-center justify-center text-bbuilds-gray relative transition duration-300 ease-in-out'
				)}
			>
				<Image src={featuredImage} alt={title} className="img" width={488} height={214} />
				<svg
					aria-hidden="true"
					focusable="false"
					className={cn(
						'duration-200 absolute w-10 h-10 z-10 opacity-0 group-hover:opacity-100',
						PostCardStyles['post-preview-image-link']
					)}
					role="img"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
				>
					<path
						fill="currentColor"
						d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"
					></path>
				</svg>
			</div>
			<div className="p-3 bg-off-white">
				<Link href={`/${slug}`}>
					<a className="link-shield">
						<h2 className="my-3 leading-none text-xl">{title}</h2>
					</a>
				</Link>
				<div className="post-meta mb-2">
					<p className="text-small">
						<span>
							{new Date(date).toLocaleDateString(siteMetaData.locale, {
								weekday: 'long',
								year: 'numeric',
								month: 'long',
								day: 'numeric'
							})}
						</span>
					</p>
				</div>

				<p>{summary}</p>
				<div className="filter sr-only">
					{tags &&
						tags.map((tag, index) => {
							return (
								<span key={index} className="tag">
									{tag}
								</span>
							);
						})}
				</div>
			</div>
		</article>
	);
}
