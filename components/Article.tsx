import { Date } from '../components/Date';

type ArticleProps = {
  title: string;
  contentHtml: string;
  date: string | undefined;
};

export const Article = ({ title, contentHtml, date }: ArticleProps): JSX.Element => (
  <article>
    <h1>{title}</h1>
    {date && <Date dateString={date} />}
    <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
  </article>
);
