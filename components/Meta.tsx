import Link from 'next/link';

import { Date } from './Date';

type MetaProps = {
  date: string;
  isNewsletter: boolean;
};

export const Meta = ({ date, isNewsletter }: MetaProps): JSX.Element => (
  <div className="meta">
    {date && <Date dateString={date} />}
    {isNewsletter && (
      <span>
        {` – `}
        <Link href="/">
          <a className="newsletterlink">The Sovereign Engineer</a>
        </Link>
      </span>
    )}
  </div>
);
