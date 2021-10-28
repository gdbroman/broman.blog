import { Footer } from '../components/Footer';
import { Intro } from '../components/Intro';
import { Layout } from '../components/Layout';
import { PostList } from '../components/PostList';
import { getSortedPostsData, PostData } from '../util/getPosts';

const isDevelopment = process.env.NODE_ENV === 'development';

type HomeProps = {
  allPostsData: PostData[];
};

const Home = ({ allPostsData }: HomeProps): JSX.Element => {
  const sortedPosts = allPostsData
    .filter((p) => !p.isDraft || isDevelopment)
    .sort((a, b) => {
      if (a.title > b.title) return 1;
      if (a.title < b.title) return -1;
      return 0;
    });
  const posts = sortedPosts.filter((p) => !p.isPinned);
  const pinnedPosts = sortedPosts.filter((p) => p.isPinned);

  return (
    <Layout>
      <Intro />
      <section id="posts">
        <PostList posts={pinnedPosts} />
        <hr />
        <PostList posts={posts} />
      </section>
      <Footer />
    </Layout>
  );
};

export const getStaticProps = async (): Promise<{ props: HomeProps }> => ({
  props: {
    allPostsData: getSortedPostsData()
  }
});

export default Home;
