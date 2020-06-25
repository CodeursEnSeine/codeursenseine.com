import React from "react"
import { Link } from "@chakra-ui/core"

/**
 * The `A` React component is named after the HTML tag `a`. This is to avoid
 * name clash with Link from gatsby.
 */
export const A = ({ ...props }) => {
  return <Link color="brand.600" textDecoration="underline" {...props} />
}
