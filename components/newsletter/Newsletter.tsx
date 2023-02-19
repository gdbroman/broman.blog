import Image from 'next/image';

import { greeting } from '../Layout';
import { GitLetterForm } from './GitLetterForm';

type NewsletterProps = {
  standalone?: boolean;
};

export const Newsletter = ({ standalone }: NewsletterProps) => (
  <div id="newsletter" className={standalone && 'standalone'}>
    <div id="tse">
      <Image src="/images/profile.jpeg" alt={greeting} width={100} height={100} />
    </div>
    <h1>{greeting}</h1>
    <p>
      Here I share my takes on how to navigate the information age as a dev. Get it straight to your
      inbox:
    </p>
    <GitLetterForm />
  </div>
);
