/* eslint-disable react/display-name */
import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import Image from 'next/image';
import Link from 'next/link';
import TOCInline from './TOCInline';

export const MDXComponents = {
	Image,
	Link,
	TOCInline,
	wrapper: ({ components, layout, ...rest }) => {
		const Layout = require(`../layouts/${layout}`).default;
		return <Layout {...rest} />;
	}
};

export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }) => {
	const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource]);
	return <MDXLayout layout={layout} components={MDXComponents} {...rest} />;
};
