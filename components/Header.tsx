import Link from 'next/link';

type Path = {
  href: string;
  name: string;
};

const paths: Path[] = [
  {
    href: '/',
    name: 'Writing'
  },
  {
    href: '/about',
    name: 'About'
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
