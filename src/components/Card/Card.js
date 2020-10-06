import React, { forwardRef } from "react"
import PropTypes from "prop-types"
import { PseudoBox, useTheme } from "@chakra-ui/core"

export const Card = forwardRef(({ isLink, variant, ...props }, ref) => {
  const theme = useTheme()

  const primary = {
    background: theme.gradients.brand,
    color: "white",
  }

  return (
    <PseudoBox
      ref={ref}
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
              cursor: "pointer",
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
})

Card.propTypes = {
  isLink: PropTypes.bool,
  variant: PropTypes.oneOf(["", "primary"]),
}
