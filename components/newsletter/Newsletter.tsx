import Image from 'next/image';

import { GitLetterForm } from './GitLetterForm';

const greeting = "Hey friends, I'm Gustaf";

type NewsletterProps = {
  standalone?: boolean;
};

export const Newsletter = ({ standalone }: NewsletterProps) => (
  <div id="newsletter" className={standalone && 'standalone'}>
    <div id="tse">
      <Image src="/images/tse.jpeg" alt={greeting} width={100} height={100} />
    </div>
    <h1>{greeting}</h1>
    <p>I build things for the web. And every Sunday I document lessons from being a dev.</p>
    <GitLetterForm />
  </div>
);
