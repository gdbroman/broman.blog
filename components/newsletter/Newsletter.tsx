import Image from 'next/image';

import { RevueForm } from './RevueForm';

type NewsletterProps = {
  standalone?: boolean;
};

export const Newsletter = ({ standalone }: NewsletterProps) => (
  <div id="newsletter" className={standalone && 'standalone'}>
    <div id="tse">
      <Image src="/images/tse.jpeg" width={100} height={100} />
    </div>
    <h1>Hey friends, I&apos;m Gustaf</h1>
    <p>I write a Sunday letter where I document my journey as a developer/human.</p>
    <RevueForm />
  </div>
);
