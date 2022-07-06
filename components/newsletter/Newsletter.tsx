import Image from 'next/image';

import { siteTitle } from '../Layout';
import { GitLetterForm } from './GitLetterForm';

type NewsletterProps = {
  standalone?: boolean;
};

export const Newsletter = ({ standalone }: NewsletterProps) => (
  <div id="newsletter" className={standalone && 'standalone'}>
    <div id="tse">
      <Image src="/images/tse.jpeg" alt={siteTitle} width={100} height={100} />
    </div>
    <h1>Hey friends, I&apos;m Gustaf</h1>
    <p>Every Sunday I document lessons on being a dev.</p>
    <GitLetterForm />
  </div>
);
