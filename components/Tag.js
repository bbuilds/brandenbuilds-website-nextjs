import Link from 'next/link';
import { slug } from 'github-slugger';

const kebabCase = (str) => slug(str);

const Tag = ({ text, isPost }) => {
	function cssClasses(isPost) {
		if (isPost) {
			return 'mr-3 text-small uppercase my-0';
		} else {
			return 'p-2 bg-white m-1 text-small text-gray-800';
		}
	}

	return (
		<Link href={`/tags/${kebabCase(text)}`}>
			<a className={cssClasses(isPost)}>#{text.split(' ').join('-')}</a>
		</Link>
	);
};

export default Tag;
