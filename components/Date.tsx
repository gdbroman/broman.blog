import { format, parseISO } from 'date-fns';

type DateProps = {
  dateString: string;
};

export const Date = ({ dateString }: DateProps): JSX.Element => {
  const date = parseISO(dateString);
  const dateFormated = format(date, 'LLL dd, yyyy');

  return <time dateTime={dateString}>{dateFormated}</time>;
};
