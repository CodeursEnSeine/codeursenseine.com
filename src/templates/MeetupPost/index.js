import React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import {
  MeetupRegistration,
  MeetupTitle,
  MeetupLayout,
} from "../../components/Meetup"
import { Box, Stack } from "@chakra-ui/core"
import { A } from "../../components/A"

const MeetupPost = ({ data }) => {
  const { body, frontmatter } = data.mdx

  return (
    <MeetupLayout>
      <Stack spacing={8}>
        <A as={Link} to="/meetups">
          Retour à la liste des meetups
        </A>
        <MeetupTitle metadata={frontmatter} />
        <MeetupRegistration metadata={frontmatter} />
        <Box>
          <MDXRenderer>{body}</MDXRenderer>
        </Box>
        <MeetupRegistration metadata={frontmatter} />
      </Stack>
    </MeetupLayout>
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
