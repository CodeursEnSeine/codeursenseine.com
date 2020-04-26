import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { Divider, Heading } from "@chakra-ui/core"

const H2 = (props) => <Heading as="h2" {...props} />
const HR = (props) => <Divider my={8} {...props} />

const components = {
  h2: H2,
  hr: HR,
}

export const Mdx = ({ children }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
)
