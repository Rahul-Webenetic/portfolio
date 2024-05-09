import { HStack, Heading, Icon, Spacer } from "@chakra-ui/react"
import React from "react"
import { RxHamburgerMenu } from "react-icons/rx"

type Props = {}

export default function Header({}: Props) {
  return (
    <HStack
      h={28}
      position={"fixed"}
      top={0}
      w={"full"}
      px={8}
      color={"brand.300"}
      blendMode={"color-dodge"}
    >
      <Heading fontSize={"3xl"} fontWeight={"extrabold"}>
        HY
      </Heading>
      <Spacer />
      <Icon as={RxHamburgerMenu} boxSize={"9"}></Icon>
    </HStack>
  )
}
