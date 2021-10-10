import React from "react";
import Layout from "components/layout";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Seo from "components/seo";
import { OgUrl } from "components/OG";

const PageLayout = ({ pageContext }) => {
  const { body, title, theme, pagePath } = pageContext;

  return (
    <Layout theme={theme}>
      <Seo title={title} />
      <OgUrl path={pagePath} />
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  );
};

export default PageLayout;
