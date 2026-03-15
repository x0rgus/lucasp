import { notFound } from "next/navigation"
import { posts } from "../posts"

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {

  const { slug } = await params

  const loader = posts[slug as keyof typeof posts]

  if (!loader) {
    notFound()
  }

  const Post = (await loader()).default

  return (
    <article className="prose prose-invert max-w-none">
      <Post />
    </article>
  )
}