import React from "react"
import { Box, Grid, Stack } from "@chakra-ui/core"
import SEO from "../seo"
import Layout from "../layout"
import { MeetupSponsors } from "./MeetupSponsors"
import { MeetupAssociations } from "./MeetupAssociations"

export const MeetupLayout = ({ children, title }) => {
  return (
    <Layout theme="meetup">
      <SEO title={title} />
      <Grid templateColumns={{ base: "1fr", md: "2.5fr 1fr" }} gap={8}>
        <Box>{children}</Box>
        <Stack spacing={10}>
          <MeetupSponsors />
          <MeetupAssociations />
        </Stack>
      </Grid>
    </Layout>
  )
}
