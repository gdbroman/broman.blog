import Link from 'next/link';

type Path = {
  href: string;
  name: string;
};

const paths: Path[] = [
  {
    href: '/',
    name: 'home'
  },
  {
    href: '/acc',
    name: 'future'
  },
  {
    href: '/about',
    name: 'about'
  }
];

export const Header = (): JSX.Element => (
  <header>
    <ul>
      {paths.map((path) => (
        <li key={path.href}>
          <Link href={path.href}>{path.name}</Link>
        </li>
      ))}
    </ul>
  </header>
);
