import Image from 'next/image';

import GithubIcon from './icons/github.svg';
import TwitterIcon from './icons/twitter.svg';
import UrbitIcon from './icons/urbit.svg';

const urbitId = '~lopsyp-doztun';

const copyUrbitIdToClipBoard = () => navigator.clipboard.writeText(urbitId);

export const Footer = () => (
  <footer>
    <ul>
      <li>
        <a href="https://github.com/gdbroman" target="_blank" rel="noreferrer">
          <Image src={GithubIcon} alt="https://github.com/gdbroman" />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/gdbroman" target="_blank" rel="noreferrer">
          <Image src={TwitterIcon} alt="https://twitter.com/gdbroman" />
        </a>
      </li>
      <li>
        <a
          role="button"
          href={`#${urbitId}`}
          title="Copy Urbit ID to clipboard"
          onClick={copyUrbitIdToClipBoard}
        >
          <Image src={UrbitIcon} alt={urbitId} />
        </a>
      </li>
    </ul>
  </footer>
);
