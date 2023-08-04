import { allPosts } from "@/.contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import { metadata } from "./layout";

export default function Home() {
  return (
    <div className="prose dark:prose-invert">
      <section className="pt-4">
        <Image
          alt="Gus"
          src="/me.jpg"
          width={222}
          height={222}
          className="rounded-full"
        />
        <h1>{metadata.title}</h1>
        <p>{metadata.description}</p>
        <ul>
          <li>
            <a href="https://x.com/gdbroman" target="_blank">
              @gdbroman
            </a>{" "}
            on X
          </li>
          <li>
            <a href="https://github.com/gdbroman" target="_blank">
              @gdbroman
            </a>{" "}
            on GitHub
          </li>
          <li>~lopsyp-doztun on Urbit</li>
        </ul>
        <p>Some things I believe to be true:</p>
        <ul>
          <li>The computer is supposed to be a bicycle for the mind.</li>
          <li>Privacy matters because your attention is valuable.</li>
          <li>Character, e.g. courage, is rarer than intelligence.</li>
        </ul>
      </section>
      <hr />
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
