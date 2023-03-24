import { extendTheme } from "@chakra-ui/react"

const customTheme = {
  colors: {
    gray: {
      "900": "#171923",
      "800": "#1A202C",
      "600": "#4A5568",
      "500": "#718096",
      "100": "#F7FAFC",
    },
    others: {
      "50": "#EC7E83",
    },
  },
  fonts: {
    body: "Inter",
  },
  styles: {
    global: {
      body: {
        bg: "gray.100",
      },
    },
  },
}

export const theme = extendTheme(customTheme)
