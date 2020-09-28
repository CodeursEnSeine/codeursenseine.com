import React from "react"
import { CSSReset, ThemeProvider } from "@chakra-ui/core"
import themes from "../src/themes"

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "ces",
    toolbar: {
      icon: "paintbrush",
      // array of plain string values or MenuItem shape (see below)
      items: ["ces", "meetups", "devoxx4kids"],
    },
  },
}

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  (Story, context) => (
    <ThemeProvider theme={themes[context.globals.theme]}>
      <CSSReset />
      <Story />
    </ThemeProvider>
  ),
]
