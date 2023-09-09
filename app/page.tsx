import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";

export default function Home() {
  return (
    <div className="prose dark:prose-invert">
      {allPosts.map(
        (post) =>
          !post.draft && (
            <article key={post._id}>
              <Link href={post.slug}>
                <h2>{post.title}</h2>
              </Link>
              {post.description && (
                <p className="text-lg">{post.description}</p>
              )}
            </article>
          )
      )}
    </div>
  );
}
