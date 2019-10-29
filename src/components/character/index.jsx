import React, { useState } from "react"
import useEventListener from "@use-it/event-listener"

const SIZE = 32
const DIRECTION = {
  DOWN: 0,
  LEFT: SIZE * 1,
  RIGHT: SIZE * 2,
  UP: SIZE * 3
}
export default function Character() {
  const offset = { left: 0, top: 0 }
  const [facing, setFacing] = useState(DIRECTION.DOWN)

  useEventListener("keydown", ({ code }) => {
    if (code.indexOf("Arrow") === -1) return
    const direction = DIRECTION[code.replace("Arrow", "").toUpperCase()]

    setFacing(direction)
  })

  return (
    <div
      style={{
        width: SIZE,
        height: SIZE,
        background: `url(/characters.png) -${offset.left}px -${offset.top +
          facing}px`
      }}
    />
  )
}
