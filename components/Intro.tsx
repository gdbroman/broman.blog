import Link from 'next/link';

export const Intro = (): JSX.Element => (
  <header>
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="https://github.com/gdbroman">GitHub</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
    </ul>
  </header>
);
