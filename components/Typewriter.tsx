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
    
    // Define a velocidade base: escrevendo (120ms), apagando (60ms)
    let speed = deleting ? 60 : 120

    // Se a palavra estiver completa, espera 2 segundos
    if (!deleting && text === currentWord) {
      speed = 2000 
    } 
    // Se acabou de apagar, espera meio segundo antes da próxima
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