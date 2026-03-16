"use client"

import { useEffect, useState } from "react"

const words = [
  "x0rg",
  "Lucas Procópio"
]

export default function Typewriter() {

  const [text, setText] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {

    const currentWord = words[wordIndex]
    
    // Set base speed: writing (120ms), deleting (60ms)
    let speed = deleting ? 60 : 120

    // If word is complete, wait 2 seconds
    if (!deleting && text === currentWord) {
      speed = 2000 
    } 
    // If finished deleting, wait half a second before the next one
    else if (deleting && text === "") {
      speed = 500
    }

    const timeout = setTimeout(() => {
      if (!deleting) {
        if (text === currentWord) {
          setDeleting(true)
        } else {
          setText(currentWord.substring(0, text.length + 1))
        }
      } else {
        if (text === "") {
          setDeleting(false)
          setWordIndex((wordIndex + 1) % words.length)
        } else {
          setText(currentWord.substring(0, text.length - 1))
        }
      }
    }, speed)

    return () => clearTimeout(timeout)

  }, [text, deleting, wordIndex])

  return (
    <h1 style={{ fontSize: "28px" }} className="typewriter-container">
      <span className="accent">&gt;</span> {text}
      <span className="cursor">█</span>
    </h1>
  )
}