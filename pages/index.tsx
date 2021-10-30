import { Layout } from '../components/Layout';
import { PostList } from '../components/PostList';
import { getSortedPostsData, PostData } from '../util/getPosts';

const isDevelopment = process.env.NODE_ENV === 'development';

type HomeProps = {
  allPostsData: PostData[];
};

const Home = ({ allPostsData }: HomeProps): JSX.Element => {
  const sortedPosts = allPostsData.filter((p) => !p.unlisted || isDevelopment);
  const posts = sortedPosts.filter((p) => !p.isPinned);
  const pinnedPosts = sortedPosts.filter((p) => p.isPinned);

  return (
    <Layout>
      <section id="posts">
        <PostList posts={pinnedPosts} />
        <hr />
        <PostList posts={posts} />
      </section>
    </Layout>
  );
};

export const getStaticProps = async (): Promise<{ props: HomeProps }> => ({
  props: {
    allPostsData: getSortedPostsData()
  }
});

export default Home;
