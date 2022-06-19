import Link from 'next/link';

import { PostData } from '../util/getPosts';
import { Meta } from './Meta';

type PostsProps = {
  posts: PostData[];
  filterBy?: 'all' | 'drafts' | 'published' | 'isNewsletter';
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
      case 'isNewsletter':
        return !p.draft && p.isNewsletter;
    }
  });

  return (
    <section id="posts">
      {filteredPosts.map(({ id, date, title, description, isNewsletter }) => {
        if (date) {
          return (
            <article key={id}>
              <Link href={`/${id}`}>
                <a className="postlink">
                  <h2>{title}</h2>
                </a>
              </Link>
              <Meta date={date} isNewsletter={isNewsletter} />
              <p>{description}</p>
            </article>
          );
        }
      })}
    </section>
  );
};
