import { Date } from '../components/Date';

type ArticleProps = {
  title: string;
  contentHtml: string;
  date: string;
  showDate?: boolean;
};

export const Article = ({
  title,
  contentHtml,
  date,
  showDate = true
}: ArticleProps): JSX.Element => (
  <article>
    <h1>{title}</h1>
    {showDate && <Date dateString={date} />}
    <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
  </article>
);
