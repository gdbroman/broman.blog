import Link from 'next/link';

import { PostData } from '../util/getPosts';
import { Date } from './Date';

type PostsProps = {
  posts: PostData[];
};

export const PostList = ({ posts }: PostsProps): JSX.Element => (
  <section id="posts">
    {posts.map(({ id, date, title, description }) => {
      if (date && title && description) {
        return (
          <article key={id}>
            <Link href={`/${id}`}>
              <a>
                <h2>{title}</h2>
              </a>
            </Link>
            <Date dateString={date} />
            <p>{description}</p>
          </article>
        );
      }
    })}
  </section>
);
