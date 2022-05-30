import Image from 'next/image';

import { Meta } from './Meta';

type ArticleProps = {
  title: string;
  date: string;
  category: string;
  thumbnail: string;
  contentHtml: string;
};

export const Article = ({
  title,
  date,
  category,
  thumbnail,
  contentHtml
}: ArticleProps): JSX.Element => (
  <article>
    <h1>{title}</h1>
    {date && <Meta date={date} category={category} />}
    {thumbnail && (
      <div className="thumbnail">
        <Image width={21} height={9} layout="responsive" src={thumbnail} alt={title} />
      </div>
    )}
    <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
  </article>
);
