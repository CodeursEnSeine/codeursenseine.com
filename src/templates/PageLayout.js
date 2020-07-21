import React from "react"
import Layout from "components/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import SEO from "components/seo"

const PageLayout = ({ pageContext }) => {
  const { body, title, theme } = pageContext

  return (
    <Layout theme={theme}>
      <SEO title={title} />
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  )
}

export default PageLayout
