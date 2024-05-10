import { Box, BoxProps, Heading, HeadingProps } from "@chakra-ui/react"
import React from "react"

interface Props extends BoxProps {
  text: string
  headingProps?: HeadingProps
}

export default function BubbleText({ text, headingProps, ...props }: Props) {
  return (
    <Box {...props}>
      {text.split("").map((letter, index) => (
        <Heading
          key={index}
          as={"span"}
          fontSize={{ base: "6xl", md: "8xl", "2xl": "10xl" }}
          fontWeight={"extrabold"}
          textTransform={"uppercase"}
          sx={{
            transition: "all 0.35s",
            "&:hover": {
              fontWeight: "black",
            },
          }}
          {...headingProps}
        >
          {letter}
        </Heading>
      ))}
    </Box>
  )
}
