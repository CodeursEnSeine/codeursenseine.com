import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../../components/layout"

const MeetupPost = ({ data }) => {
  console.log(data)
  return (
    <Layout theme="meetup">
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  )
}

export default MeetupPost

export const pageQuery = graphql`
  query MeetupPostBySlug($id: String!) {
    mdx(id: { eq: $id }) {
      body
    }
  }
`
