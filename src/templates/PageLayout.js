import React from "react"
import Layout from "../components/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"

const PageLayout = ({ pageContext }) => {
  const { body, theme } = pageContext

  return (
    <Layout theme={theme}>
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  )
}

export default PageLayout
