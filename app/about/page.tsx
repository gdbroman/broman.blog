import Image from "next/image";

export const metadata = {
  title: "Hi friend, I'm Gus",
  description:
    "I'm a product-focused software engineer with interests in attention, sociology, and digital sovereignty.",
};

export default function About() {
  return (
    <div className="prose dark:prose-invert">
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
        <li>
          <a href="https://linkedin.com/in/gdbroman" target="_blank">
            /in/gdbroman
          </a>{" "}
          on LinkedIn
        </li>
      </ul>
      <h2>Some things I believe to be true</h2>
      <ul>
        <li>The computer is supposed to be a bicycle for the mind.</li>
        <li>Privacy matters because your attention is valuable.</li>
        <li>Character, e.g. courage, is rarer than intelligence.</li>
      </ul>
      <h2>Best way to reach me</h2>
      <p>99gustaf [at] gmail [dot] com</p>
    </div>
  );
}
