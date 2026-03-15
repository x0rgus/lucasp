import Typewriter from "@/components/Typewriter"

export default function Home() {
  return (

    <main className="main-content">

      <Typewriter />

      <div className="divider my-6"></div>

      <p className="fade-in">
        software developer
      </p>

      <div className="divider my-6"></div>

      <p className="fade-in" style={{ animationDelay: "200ms" }}>
        building things on the internet
      </p>

    </main>

  )
}