import { useEffect, useState } from 'react';
import PostCard from '@/components/PostCard';

function PostList(props) {
	const { posts, showAmount } = props;

	const displayAmount = showAmount || 6;

	//Create a new list from all posts
	const [list, setList] = useState([...posts.slice(0, displayAmount)]);

	// State to trigger load more
	const [loadMore, setLoadMore] = useState(false);

	// State of whether there is more to load
	const [hasMore, setHasMore] = useState(posts.length > displayAmount);

	function handleLoadMore() {
		setLoadMore(true);
	}

	// Handle loading more articles
	useEffect(() => {
		if (loadMore && hasMore) {
			const currentLength = list.length;
			const isMore = currentLength < posts.length;
			const nextResults = isMore ? posts.slice(currentLength, currentLength + 3) : [];
			setList([...list, ...nextResults]);
			setLoadMore(false);
		}
	}, [loadMore, hasMore, posts]); //eslint-disable-line

	useEffect(() => {
		const isMore = list.length < posts.length;
		setHasMore(isMore);
	}, [list, posts]);

	useEffect(() => {
		setList([...posts.slice(0, displayAmount)]);
	}, [posts, displayAmount]);

	return (
		<>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-x-4">
				{list?.map((post, index) => {
					return (
						<div
							key={index}
							className="posts-grid__item"
							data-aos="fade-right"
							data-aos-anchor="#trigger-articles"
							data-aos-delay={`${index}00`}
						>
							<PostCard post={post} />
						</div>
					);
				})}
			</div>
			{hasMore ? (
				<div className="text-center my-8">
					<button
						className="decor-link text-white relative animated hover:text-primary"
						onClick={handleLoadMore}
					>
						Load More Articles
					</button>
				</div>
			) : (
				<p className="text-center">No more posts</p>
			)}
		</>
	);
}

export default PostList;
