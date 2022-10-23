import Link from 'next/link';

import { PostData } from '../util/getPosts';
import { Meta } from './Meta';

type PostsProps = {
  posts: PostData[];
  max?: number;
  filterBy?: 'all' | 'drafts' | 'published' | 'newsletter';
};

export const PostList = ({ posts, max, filterBy = 'all' }: PostsProps): JSX.Element => {
  const filteredPosts = posts.filter((p) => {
    switch (filterBy) {
      case 'all':
        return true;
      case 'drafts':
        return p.draft;
      case 'published':
        return !p.draft;
      case 'newsletter':
        return !p.draft && p.newsletter;
    }
  });
  if (max) {
    filteredPosts.splice(max);
  }

  return (
    <section id="posts">
      {filteredPosts.map(({ id, date, title, description, newsletter }) => {
        if (date) {
          return (
            <article key={id}>
              <Link href={`/${id}`}>
                <a className="postlink">
                  <h2>{title}</h2>
                </a>
              </Link>
              <Meta date={date} newsletter={newsletter} />
              <p>{description}</p>
            </article>
          );
        }
      })}
    </section>
  );
};
