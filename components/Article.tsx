import { Meta } from './Meta';

type ArticleProps = {
  title: string;
  contentHtml: string;
  date: string;
  category: string;
};

export const Article = ({ title, contentHtml, date, category }: ArticleProps): JSX.Element => (
  <article>
    <h1>{title}</h1>
    <Meta date={date} category={category} />
    <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
  </article>
);
