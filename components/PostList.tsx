import Link from 'next/link';

import { PostData } from '../util/getPosts';
import { Date } from './Date';

type PostsProps = {
  posts: PostData[];
};

export const PostList = ({ posts }: PostsProps): JSX.Element => (
  <ul>
    {posts.map(
      ({ id, date, title }) =>
        date &&
        title && (
          <li key={id}>
            <Link href={`/${id}`}>
              <a>{title}</a>
            </Link>
            <Date dateString={date} />
          </li>
        )
    )}
  </ul>
);
