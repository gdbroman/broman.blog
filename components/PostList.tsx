import Link from 'next/link';

import { PostData } from '../util/getPosts';
import { Meta } from './Meta';

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
      {filteredPosts.map(({ id, date, title, description, category }) => {
        if (date) {
          return (
            <article key={id}>
              <Link href={`/${id}`}>
                <a>
                  <h2>{title}</h2>
                </a>
              </Link>
              <Meta date={date} category={category} />
              <p>{description}</p>
            </article>
          );
        }
      })}
    </section>
  );
};
