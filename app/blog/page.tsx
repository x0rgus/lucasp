import Link from "next/link"

const posts = [
  {
    slug: "hello-world",
    title: "hello world",
    date: "2026-03-15"
  }
]

export default function BlogPage() {

  return (

    <div>

      <h1 className="text-xl mb-8">
        <span className="accent">&gt;</span> blog
      </h1>

      <ul className="space-y-4">

        {posts.map(post => (

          <li key={post.slug}>

            <Link href={`/blog/${post.slug}`}>
              {post.title}
            </Link>

            <span className="text-muted ml-4">
              {post.date}
            </span>

          </li>

        ))}

      </ul>

    </div>

  )

}