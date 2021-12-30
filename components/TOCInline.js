const TOCInline = ({ headings, indentDepth = 3, fromHeading = 1, toHeading = 6, exclude = '' }) => {
	const re = Array.isArray(exclude)
		? new RegExp('^(' + exclude.join('|') + ')$', 'i')
		: new RegExp('^(' + exclude + ')$', 'i');

	const filteredToc = headings.filter(
		(heading) =>
			heading.depth >= fromHeading && heading.depth <= toHeading && !re.test(heading.value)
	);

	const tocList = (
		<ul className="list-none">
			{filteredToc.map((heading) => (
				<li key={heading.value} className={`mb-3 ${heading.depth >= indentDepth && 'ml-6'}`}>
					<a href={heading.url}>{heading.value}</a>
				</li>
			))}
		</ul>
	);

	return (
		<>
			<details open className="border-l-2 border-bbuilds-yellow py-1 px-2 my-3 bg-bbuilds-gray">
				<summary className="pt-2 pb-2 ml-6 text-xl font-bold">Table of Contents</summary>
				<div className="ml-6 pb-2">{tocList}</div>
			</details>
		</>
	);
};

export default TOCInline;
