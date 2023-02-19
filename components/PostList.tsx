import Link from 'next/link';

import { PostData } from '../util/getPosts';
import { Meta } from './Meta';

type PostsProps = {
  posts: PostData[];
  max?: number;
  filterBy?: 'all' | 'crap' | 'published' | 'newsletter' | 'featured';
};

export const PostList = ({ posts, max, filterBy = 'all' }: PostsProps) => {
  const filteredPosts = posts.filter((p) => {
    switch (filterBy) {
      case 'all':
        return true;
      case 'crap':
        return p.crap;
      case 'published':
        return !p.crap;
      case 'newsletter':
        return !p.crap && p.newsletter;
      case 'featured':
        return !p.crap && p.featured;
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
