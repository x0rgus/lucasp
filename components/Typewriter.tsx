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

    const timeout = setTimeout(() => {

      if (!deleting) {

        setText(currentWord.substring(0, text.length + 1))

        if (text === currentWord) {
          setDeleting(true)
        }

      } else {

        setText(currentWord.substring(0, text.length - 1))

        if (text === "") {
          setDeleting(false)
          setWordIndex((wordIndex + 1) % words.length)
        }

      }

    }, deleting ? 60 : 120)

    return () => clearTimeout(timeout)

  }, [text, deleting, wordIndex])

  return (
    <h1 style={{ fontSize: "28px" }}>
      <span className="accent">&gt;</span> {text}
      <span className="cursor">█</span>
    </h1>
  )
}