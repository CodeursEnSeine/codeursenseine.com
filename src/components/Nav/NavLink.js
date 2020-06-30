import React from "react"
import { PseudoBox } from "@chakra-ui/core"

export const NavLink = ({
  children = null,
  isMain = false,
  isActive = false,
  ...rest
}) => {
  return (
    <PseudoBox role="group" d="block" textAlign={{ md: "right" }} {...rest}>
      <PseudoBox
        as="span"
        d="inline-flex"
        transition="0.2s"
        borderRadius="md"
        py="1"
        px="4"
        position="relative"
        fontFamily="heading"
        fontSize={isMain ? "xl" : "sm"}
        _hover={{ bg: "rgba(0, 0, 0, 0.1)" }}
        _after={
          isActive && {
            content: `""`,
            position: "absolute",
            left: 4,
            right: 4,
            bottom: "0.3rem",
            h: "0.1rem",
            bg: "brand.400",
          }
        }
      >
        {children}
      </PseudoBox>
    </PseudoBox>
  )
}
