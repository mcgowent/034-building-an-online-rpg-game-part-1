import React from "react"

export default function Character() {
  const offset = { left: 0, top: 0 }

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
