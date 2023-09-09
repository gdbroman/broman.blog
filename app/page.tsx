import { allPosts } from "@/.contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import { metadata } from "./layout";

export default function Home() {
  return (
    <div className="prose dark:prose-invert">
      {allPosts.map((post) => (
        <article key={post._id}>
          <Link href={post.slug}>
            <h2>{post.title}</h2>
          </Link>
          {post.description && <p className="text-lg">{post.description}</p>}
        </article>
      ))}
    </div>
  );
}
