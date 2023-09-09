import Image from "next/image";
import { metadata } from "../layout";

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
        <li>~lopsyp-doztun on Urbit</li>
        <li>99gustaf [at] gmail [dot] com</li>
      </ul>
      <p>Some things I believe to be true:</p>
      <ul>
        <li>The computer is supposed to be a bicycle for the mind.</li>
        <li>Privacy matters because your attention is valuable.</li>
        <li>Character, e.g. courage, is rarer than intelligence.</li>
        <li>The frontier is always open.</li>
      </ul>
    </div>
  );
}
