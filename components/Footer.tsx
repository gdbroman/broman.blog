import Image from 'next/image';

import GithubIcon from './icons/github.svg';
import GoodreadsIcon from './icons/goodreads.svg';
import TelegramIcon from './icons/telegram.svg';
import TwitterIcon from './icons/twitter.svg';

type Path = {
  href: string;
  alt: string;
  icon: any;
};

const socials: Path[] = [
  {
    href: 'https://github.com/gdbroman',
    alt: 'Github',
    icon: GithubIcon
  },
  {
    href: 'https://twitter.com/gdbroman',
    alt: 'Twitter',
    icon: TwitterIcon
  },
  {
    href: 'https://www.goodreads.com/gdbroman',
    alt: 'Goodreads',
    icon: GoodreadsIcon
  },
  {
    href: 'https://t.me/gdbroman',
    alt: 'Telegram',
    icon: TelegramIcon
  }
];

export const Footer = (): JSX.Element => (
  <footer>
    <ul>
      {socials.map(({ href, icon, alt }) => (
        <li key={href}>
          <a href={href} target="_blank" rel="noreferrer">
            <Image src={icon} alt={alt} />
          </a>
        </li>
      ))}
    </ul>
  </footer>
);
