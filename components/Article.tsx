import { Date } from '../components/Date';
import { Outro } from './Outro';

type ArticleProps = {
  title: string;
  contentHtml: string;
  date: string;
  showDate?: boolean;
  showOutro?: boolean;
  thumbnail?: string;
};

export const Article = ({
  title,
  contentHtml,
  date,
  thumbnail,
  showDate = true,
  showOutro = false
}: ArticleProps): JSX.Element => (
  <article>
    {thumbnail && <img src={thumbnail} alt={title} className="thumbnail" />}
    <h1>{title}</h1>
    {showDate && <Date dateString={date} />}
    <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    {showOutro && <Outro />}
  </article>
);
