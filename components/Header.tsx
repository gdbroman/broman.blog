import Link from 'next/link';

export const Header = (): JSX.Element => (
  <header>
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="https://github.com/gdbroman/broman.blog">Source</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
    </ul>
  </header>
);
