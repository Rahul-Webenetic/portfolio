import { MotionBox } from "@/pages/_app"
import { motion, useMotionTemplate } from "framer-motion"
import React, { useEffect, useState } from "react"

type Props = {
  children: React.ReactNode
}

export default function CustomMouse({ children }: Props) {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  })

  const mouseMove = useMotionTemplate`translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`

  useEffect(() => {
    const mouseMove = (e: any) => {
      setMousePosition({
        x: e.clientX - 14,
        y: e.clientY - 14,
      })
    }
    window.addEventListener("mousemove", mouseMove)

    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }
  }, [])

  return (
    <>
      <MotionBox
        as={motion.div}
        h={"28px"}
        w={"28px"}
        bg={"brand.300"}
        position={"fixed"}
        top={0}
        left={0}
        rounded={"full"}
        style={{
          transform: mouseMove,
        }}
        zIndex={50}
        pointerEvents={"none"}
      ></MotionBox>
      {children}
    </>
  )
}
