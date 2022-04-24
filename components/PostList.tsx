import Link from 'next/link';

import { PostData } from '../util/getPosts';
import { Date } from './Date';

type PostsProps = {
  posts: PostData[];
  filterBy?: 'all' | 'drafts' | 'published';
};

export const PostList = ({ posts, filterBy = 'all' }: PostsProps): JSX.Element => {
  const filteredPosts = posts.filter((p) => {
    switch (filterBy) {
      case 'all':
        return true;
      case 'drafts':
        return p.draft;
      case 'published':
        return !p.draft;
    }
  });

  return (
    <section id="posts">
      {filteredPosts.map(({ id, date, title, description }) => {
        if (date) {
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
};
