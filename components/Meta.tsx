import { Date } from './Date';

type MetaProps = {
  date: string;
  category: string;
};

export const Meta = ({ date, category }: MetaProps): JSX.Element => (
  <div className="meta">
    {date && <Date dateString={date} />}
    {category && <span> – {category}</span>}
  </div>
);
