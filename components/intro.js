import Link from "next/link";

import { authorName } from "../components/layout";

export const Intro = ({ mini }) => (
  <header className={`intro ${mini && "mini"}`}>
    <Link href="/">
      <img className="profile-picture" alt={authorName} src="/images/me.jpg" />
    </Link>
    <section>
      <Link href="/">
        <h1>broman.blog</h1>
      </Link>
      {!mini && (
        <>
          <p>
            Hello 👋 I'm a{" "}
            <a href="/resume/resume.pdf" target="_blank">
              developer
            </a>{" "}
            from Stockholm, currently experimenting with nomadic living. Lately
            I've been trying to think about the{" "}
            <a href="https://isness.substack.com" target="_blank">
              future
            </a>{" "}
            of consciousness.
          </p>
        </>
      )}
    </section>
  </header>
);
