import Link from 'next/link';
import { slug } from 'github-slugger';

const kebabCase = (str) => slug(str);

const Tag = ({ text }) => {
	return (
		<Link href={`/tags/${kebabCase(text)}`}>
			<a className="mr-3 text-small uppercase my-0">{text.split(' ').join('-')}</a>
		</Link>
	);
};

export default Tag;
