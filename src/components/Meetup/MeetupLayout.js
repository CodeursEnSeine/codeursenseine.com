import React from "react"
import { Box, Grid } from "@chakra-ui/core"
import SEO from "../seo"
import Layout from "../layout"
import { MeetupSponsors } from "./MeetupSponsors"
import { MeetupHeader } from "./MeetupHeader"

export const MeetupLayout = ({ children, title }) => {
  return (
    <Layout theme="meetup">
      <SEO title={title} />
      <MeetupHeader />
      <Grid templateColumns="2fr 1fr" gap={8}>
        <Box>{children}</Box>
        <Box>
          <MeetupSponsors />
        </Box>
      </Grid>
    </Layout>
  )
}
