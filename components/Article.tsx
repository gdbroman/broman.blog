import { Date } from '../components/Date';

type ArticleProps = {
  title: string;
  contentHtml: string;
  date: string;
  thumbnail: string;
};

export const Article = ({ title, contentHtml, date, thumbnail }: ArticleProps): JSX.Element => (
  <article>
    {thumbnail && <img src={thumbnail} alt={title} className="thumbnail" />}
    <h1>{title}</h1>
    <Date dateString={date} />
    <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
  </article>
);
