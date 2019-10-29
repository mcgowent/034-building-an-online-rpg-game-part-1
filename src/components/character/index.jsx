import React, { useState, useEffect } from "react"
import useEventListener from "@use-it/event-listener"

const MAX_STEP = 3
const SIZE = 32
const DIRECTION = {
  DOWN: 0,
  LEFT: SIZE * 1,
  RIGHT: SIZE * 2,
  UP: SIZE * 3
}
export default function Character() {
  const offset = { left: 0, top: 0 }
  const [facing, setFacing] = useState({
    current: DIRECTION.DOWN,
    previous: DIRECTION.DOWN
  })
  const [step, setStep] = useState(0)

  useEventListener("keydown", ({ code }) => {
    if (code.indexOf("Arrow") === -1) return
    const direction = DIRECTION[code.replace("Arrow", "").toUpperCase()]

    setFacing(prev => ({
      current: direction,
      previous: prev.current
    }))
  })

  useEffect(() => {
    if (facing.current === facing.previous) {
      setStep(prev => (prev < MAX_STEP - 1 ? prev + 1 : 0))
    } else {
      setStep(0)
    }
  }, [facing])

  return (
    <div
      style={{
        width: SIZE,
        height: SIZE,
        background: `url(/characters.png) -${offset.left +
          step * SIZE}px -${offset.top + facing.current}px`
      }}
    />
  )
}
