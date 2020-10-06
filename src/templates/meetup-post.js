import React from "react";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Box, Stack } from "@chakra-ui/core";
import { MeetupRegistration, MeetupTitle } from "components/Meetup";
import MeetupLayout from "components/Meetup/MeetupLayout";
import { A } from "components/A";

const MeetupPost = ({ data }) => {
  const { body, frontmatter } = data.mdx;

  return (
    <MeetupLayout title={frontmatter.title}>
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
  );
};

export const query = graphql`
  query MeetupPostById($id: String!) {
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
`;

export default MeetupPost;
