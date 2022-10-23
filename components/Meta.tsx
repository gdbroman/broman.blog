import Link from 'next/link';

import { Date } from './Date';

type MetaProps = {
  date: string;
  newsletter: boolean;
};

export const Meta = ({ date, newsletter }: MetaProps): JSX.Element => (
  <div className="meta">
    {date && <Date dateString={date} />}
    {newsletter && (
      <span>
        {` – `}
        <Link href="/">
          <a className="newsletterlink">The Sovereign Engineer</a>
        </Link>
      </span>
    )}
  </div>
);
