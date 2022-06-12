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
        {' '}
        –{' '}
        <a
          href="https://www.getrevue.co/profile/tse"
          target="_blank"
          rel="noreferrer"
          className="newsletterlink"
        >
          {'Sundays'}
        </a>
      </span>
    )}
  </div>
);
