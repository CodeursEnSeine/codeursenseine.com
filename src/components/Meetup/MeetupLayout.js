import React from "react"
import { Link } from "gatsby"
import { Box, Button, Flex, Grid, Text } from "@chakra-ui/core"
import SEO from "../seo"
import Layout from "../layout"
import { MeetupSponsors } from "./MeetupSponsors"

export const MeetupLayout = ({ children, title }) => {
  return (
    <Layout theme="meetup">
      <SEO title={title} />
      <Flex justify="space-between">
        <Box>
          <Text>Retrouvez Codeurs en Seine toute l'année !</Text>
          <Text as="strong">Meetups Codeurs en Seine</Text>
        </Box>
        <Box>
          <Button
            as={Link}
            to="/meetups/sponsors"
            variant="outline"
            variantColor="brand"
          >
            Devenir sponsor
          </Button>
        </Box>
      </Flex>
      <Grid templateColumns="2fr 1fr" gap={8}>
        {children}
        <MeetupSponsors />
      </Grid>
    </Layout>
  )
}
