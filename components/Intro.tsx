import Image from 'next/image';
import Link from 'next/link';

import { authorName, siteDescription, siteTitle } from './Layout';

type IntroProps = {
  mini?: boolean;
};

export const Intro = ({ mini = false }: IntroProps): JSX.Element => (
  <header className={`intro ${mini && 'mini'}`}>
    <Link href="/">
      <a className="profile-picture">
        <Image
          layout="fill"
          alt={authorName}
          objectFit="cover"
          src="/images/me.jpg"
          objectPosition="center"
        />
      </a>
    </Link>
    <section>
      <Link href="/">{mini ? <h2>{siteTitle}</h2> : <h1>{siteTitle}</h1>}</Link>
      {!mini && <p>{siteDescription}</p>}
    </section>
  </header>
);
