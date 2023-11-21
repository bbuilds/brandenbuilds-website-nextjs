/* eslint-disable react/display-name */
import { useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";
import Image from "next/image";
import Link from "next/link";
import TOCInline from "@/components/TOCInline";
import Layout from "@/layouts/PostLayout";

export const MDXComponents = {
  Image,
  Link,
  TOCInline,
  wrapper: ({ components, layout, ...rest }) => {
    return <Layout {...rest} />;
  },
};

export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource]);
  return <MDXLayout layout={layout} components={MDXComponents} {...rest} />;
};
