import Image from 'next/image';

import { GitLetterForm } from './GitLetterForm';

type NewsletterProps = {
  standalone?: boolean;
};

export const Newsletter = ({ standalone }: NewsletterProps) => (
  <div id="newsletter" className={standalone && 'standalone'}>
    <div id="tse">
      <Image src="/images/tse.jpeg" width={100} height={100} />
    </div>
    <h1>Hey friends, I&apos;m Gustaf</h1>
    <p>Every Sunday I document learnings from being a dev.</p>
    <GitLetterForm />
  </div>
);
