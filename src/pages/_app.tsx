import Header from "@/components/layout/Header"
import CustomMouse from "@/components/util/CustomMouse"
import { theme } from "@/styles/theme"
import {
  Box,
  ChakraProvider,
  Text,
  chakra,
  extendTheme,
  shouldForwardProp,
} from "@chakra-ui/react"
import {
  AnimatePresence,
  isValidMotionProp,
  motion,
  useMotionTemplate,
} from "framer-motion"
import type { AppProps } from "next/app"
import { Montserrat } from "next/font/google"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
})

export const MotionBox = motion(chakra.div)

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <>
      <ChakraProvider theme={theme}>
        <AnimatePresence mode="wait">
          <ChakraBox
            key={router.route}
            transition={{
              duration: "0.5",
              ease: "easeOut",
            }}
            initial={{
              background: "black",
              opacity: 0,
              clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
            }}
            animate={{
              background: "black",
              opacity: 1,
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            }}
            exit={{
              background: "black",
              clipPath: "polygon(0 50%, 100% 50%, 100% 50%, 0 50%)",
            }}
            cursor={"none"}
            overflow={"hidden"}
          >
            <CustomMouse>
              <Header />
              <Component {...pageProps} />
            </CustomMouse>
          </ChakraBox>
        </AnimatePresence>
      </ChakraProvider>
    </>
  )
}
