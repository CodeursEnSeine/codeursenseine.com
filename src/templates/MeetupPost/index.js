import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../../components/layout"
import { MeetupRegistration, MeetupTitle } from "../../components/Meetup"
import { Box, Stack } from "@chakra-ui/core"

const MeetupPost = ({ data }) => {
  const { body, frontmatter } = data.mdx

  return (
    <Layout theme="meetup">
      <Stack spacing={8}>
        <MeetupTitle metadata={frontmatter} />
        <MeetupRegistration metadata={frontmatter} />
        <Box>
          <MDXRenderer>{body}</MDXRenderer>
        </Box>
        <MeetupRegistration metadata={frontmatter} />
      </Stack>
    </Layout>
  )
}

export default MeetupPost

export const pageQuery = graphql`
  query MeetupPostBySlug($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        meetup_date(formatString: "dddd DD MMMM YYYY", locale: "fr-FR")
        meetup_end_time
        meetup_start_time
        meetup_location
        meetup_register_link
      }
    }
  }
`
