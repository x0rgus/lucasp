"use client"

import { useEffect, useState } from "react"

export default function ResponsiveIndicator() {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth)
    updateWidth()
    window.addEventListener("resize", updateWidth)
    return () => window.removeEventListener("resize", updateWidth)
  }, [])

  if (process.env.NODE_ENV === "production") return null

  return (
    <div className="res-indicator">
      {width}px
    </div>
  )
}