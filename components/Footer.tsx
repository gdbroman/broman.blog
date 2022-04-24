import Image from 'next/image';

import GithubIcon from './icons/github.svg';
import GoodreadsIcon from './icons/goodreads.svg';
import TwitterIcon from './icons/twitter.svg';
import UrbitIcon from './icons/urbit.svg';

/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */

type Path = {
  href: string;
  alt: string;
  icon: typeof GithubIcon;
};

const socials: Path[] = [
  {
    href: 'https://github.com/gdbroman',
    alt: 'Gustaf Broman on Github',
    icon: GithubIcon
  },
  {
    href: 'https://twitter.com/gdbroman',
    alt: 'Gustaf Broman on Twitter',
    icon: TwitterIcon
  },
  {
    href: 'https://www.goodreads.com/gdbroman',
    alt: 'Gustaf Broman on Goodreads',
    icon: GoodreadsIcon
  }
];

const urbitId = '~lopsyp-doztun';

const copyUrbitIdToClipBoard = () => {
  navigator.clipboard.writeText(urbitId);
};

export const Footer = (): JSX.Element => (
  <footer>
    <ul>
      {socials.map(({ href, icon, alt }) => (
        <li key={href}>
          <a href={href} target="_blank" rel="noreferrer" title={`Go to ${alt}`}>
            <Image src={icon} alt={alt} />
          </a>
        </li>
      ))}
      <li>
        <a
          role="button"
          href={`#${urbitId}`}
          title="Copy Urbit ID to clipboard"
          onClick={copyUrbitIdToClipBoard}
        >
          <Image src={UrbitIcon} alt="Gustaf Broman on Urbit" />
        </a>
      </li>
    </ul>
  </footer>
);
