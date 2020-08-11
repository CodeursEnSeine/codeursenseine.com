import React from "react"
import Layout from "components/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import SEO from "components/seo"
import { OGURL } from "../components/OG"

const PageLayout = ({ pageContext }) => {
  const { body, title, theme, pagePath } = pageContext

  return (
    <Layout theme={theme}>
      <SEO title={title} />
      <OGURL path={pagePath} />
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  )
}

export default PageLayout
