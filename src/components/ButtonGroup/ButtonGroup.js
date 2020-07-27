import React from "react"
import { StackInline } from "components/StackInline"

export const ButtonGroup = ({ childProps = {}, ...rest }) => {
  return (
    <StackInline
      spacing={4}
      childProps={{ flexGrow: { base: 1, sm: 0 }, ...childProps }}
      {...rest}
    />
  )
}
