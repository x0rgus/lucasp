export default function LinksPage() {
  const links = [
    {
      name: "github",
      url: "https://github.com/x0rgus",
      description: "source code & projects"
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/lucas-p-147513265/",
      description: "professional network"
    },
    {
      name: "email",
      url: "mailto:lucas.pr1@hotmail.com",
      description: "get in touch"
    }
  ]

  return (
    <div className="container-limit">
      <h1 className="text-xl mb-8">
        <span className="accent">&gt;</span> links
      </h1>

      <ul className="flex flex-col">
        {links.map((link) => (
          <li key={link.name} className="border-t border-border py-4 last:border-b last:border-border">
            <a 
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-between items-center group transition-colors"
            >
              <div className="flex gap-8 items-center">
                <span className="text-primary font-bold w-24">{link.name}</span>
                <span className="text-muted-foreground text-sm">{link.description}</span>
              </div>
              <span className="text-muted-foreground text-[10px] tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                VISIT ↗
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
