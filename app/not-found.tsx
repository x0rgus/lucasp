"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NotFound() {
  const pathname = usePathname()

  return (
    <div className="container-limit flex flex-col items-start justify-center font-mono">
              <p className="text-xl">
          <span className="text-primary mr-2">$</span>
          cd {pathname}
        </p>
      <div className="text-primary mb-6 animate-pulse">
        <pre className="leading-none text-xs sm:text-sm">
{`
░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░▒▓█▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░ 
░▒▓████████▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░ 
       ░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░ 
       ░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░ 
       ░▒▓█▓▒░▒▓████████▓▒░      ░▒▓█▓▒░ 
                                         
                                         
`}
        </pre>
      </div>
      

      <div className="space-y-4">

        
        <p className="text-muted-foreground">
          [CRITICAL] DIRECTORY_NOT_FOUND: "{pathname}" does not exist in the local filesystem.
        </p>

        <p className="text-xl">
          <span className="text-primary mr-2">$</span>
          locate home
          <span className="cursor ml-1">█</span>
        </p>

        <div className="pt-8">
          <Link 
            href="/" 
            className="text-primary hover:underline underline-offset-4 decoration-primary"
          >
            {">"} return to safety
          </Link>
        </div>
      </div>

    </div>
  )
}