import Image from 'next/image';

import { Meta } from './Meta';

type ArticleProps = {
  title: string;
  date: string;
  isNewsletter: boolean;
  thumbnail: string;
  contentHtml: string;
};

export const Article = ({
  title,
  date,
  isNewsletter,
  thumbnail,
  contentHtml
}: ArticleProps): JSX.Element => (
  <article>
    <h1>{title}</h1>
    {date && <Meta date={date} isNewsletter={isNewsletter} />}
    {thumbnail && (
      <div className="thumbnail">
        <Image width={21} height={9} layout="responsive" src={thumbnail} alt={title} />
      </div>
    )}
    <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
  </article>
);
