import { allPosts } from "@/.contentlayer/generated";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="prose dark:prose-invert">
      <section className="pt-2">
        <Image src="/gus.jpg" width={132} height={132} alt="Gus" />
        <h1>Hi friend, I&apos;m Gus</h1>
        <p>I&apos;m a product-focused software engineer.</p>
        <ul>
          <li>
            <a href="https://twitter.com/gdbroman" target="_blank">
              @gdbroman
            </a>{" "}
            on Twitter
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
