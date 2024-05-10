import { StyleFunctionProps, ThemeConfig, extendTheme } from "@chakra-ui/react"
import { Raleway } from "next/font/google"
// 1. Import the extendTheme function

const raleway = Raleway({
  subsets: ["cyrillic", "latin", "latin-ext", "vietnamese"],
})

const fonts = {
  heading: raleway.style.fontFamily,
  body: raleway.style.fontFamily,
}

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      color: "white",
      bg: "#1A1A1A",
      cursor: "none",
    },
  }),
}

const colors = {
  brand: {
    100: "#F4F0E6", // Romance
    200: "#1A1A1A", // Pitch Black
    300: "#FF3B00", // Pure red
  },
}

export const theme = extendTheme({
  styles,
  colors,
  fonts,
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "4rem",
    "7xl": "5rem",
    "8xl": "6rem",
    "9xl": "8rem",
    "10xl": "9rem", // New font size here
  },
})
