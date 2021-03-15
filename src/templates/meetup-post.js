import React from "react";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Box, Button, Stack } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { MeetupRegistration, MeetupTitle } from "components/Meetup";
import MeetupLayout from "components/Meetup/MeetupLayout";
import { A } from "components/A";

const MeetupPost = ({ data }) => {
  const { body, frontmatter, parent } = data.mdx;

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
        <Button
          variant="outline"
          as="a"
          href={`https://github.com/CodeursEnSeine/codeursenseine-new/edit/master/content/meetups/${parent.base}`}
          leftIcon={<FaGithub />}
        >
          Modifier cette page
        </Button>
      </Stack>
    </MeetupLayout>
  );
};

export const query = graphql`
  query MeetupPostById($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        meetup_date(formatString: "dddd DD MMMM YYYY", locale: "fr-FR")
        meetup_end_time
        meetup_start_time
        meetup_location
        meetup_register_link
        title
      }
      parent {
        ... on File {
          base
          id
        }
      }
    }
  }
`;

export default MeetupPost;
