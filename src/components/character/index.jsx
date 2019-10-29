import React from "react"
import useEventListener from "@use-it/event-listener"

export default function Character() {
  const offset = { left: 0, top: 0 }

  useEventListener("keydown", ({ code }) => {
    if (code.indexOf("Arrow") === -1) return
    const direction = code.replace("Arrow", "")
    console.dir(direction)
  })

  return (
    <div
      style={{
        width: 32,
        height: 32,
        background: `url(/characters.png) -${offset.left}px -${offset.top}px`
      }}
    />
  )
}
