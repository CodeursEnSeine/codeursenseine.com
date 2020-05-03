import React from "react"
import { PseudoBox, useTheme } from "@chakra-ui/core"

export const Card = ({ isLink, variant, ...props }) => {
  const theme = useTheme()

  const primary = {
    background: theme.gradients.brand,
    color: "white",
  }

  return (
    <PseudoBox
      position="relative"
      d="flex"
      flexDirection="column"
      p={6}
      borderRadius="md"
      boxShadow="brand"
      border="1px solid transparent"
      overflow="hidden"
      _hover={
        isLink
          ? {
              borderColor: "brand.600",
            }
          : {}
      }
      _focus={
        isLink
          ? {
              borderColor: "brand.600",
            }
          : {}
      }
      {...(variant === "primary" ? primary : {})}
      {...props}
    />
  )
}
