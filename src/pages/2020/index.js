import React from "react"
import { Link } from "gatsby"
import { Button } from "@chakra-ui/core"

import Layout from "../../components/layout"
import Image from "../../components/image"
import SEO from "../../components/seo"

const IndexPage = () => (
  <Layout theme="ces">
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Button variantColor="brand" as={Link} to="/page-2/">
      Go to page 2
    </Button>
  </Layout>
)

export default IndexPage
