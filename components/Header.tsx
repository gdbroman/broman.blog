import Link from 'next/link';

const isDevelopment = process.env.NODE_ENV === 'development';

type Path = {
  href: string;
  name: string;
};

const paths: Path[] = [
  {
    href: '/',
    name: 'home'
  },
  isDevelopment && {
    href: '/drafts',
    name: 'drafts'
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
