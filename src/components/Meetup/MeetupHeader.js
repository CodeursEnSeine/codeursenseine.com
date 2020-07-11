import React from "react"
import { Link } from "gatsby"
import { Button } from "@chakra-ui/core"
import { Header } from "../Header"

export const MeetupHeader = () => {
  return (
    <Header
      description="Retrouvez Codeurs en Seine toute l'année !"
      actions={
        <Button
          as={Link}
          to="/meetups/sponsors"
          variant="outline"
          variantColor="brand"
        >
          Devenir sponsor
        </Button>
      }
    >
      Meetups Codeurs en Seine
    </Header>
  )
}
