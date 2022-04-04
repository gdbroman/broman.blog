import { Layout } from '../components/Layout';
import { PostList } from '../components/PostList';
import { generateRssFeed } from '../util/generateRssFeed';
import { getSortedPostsData, PostData } from '../util/getPosts';

type HomeProps = {
  allPostsData: PostData[];
};

const Home = ({ allPostsData }: HomeProps): JSX.Element => {
  const sortedPosts = allPostsData.filter((p) => p.category !== 'page' && p.draft);

  return (
    <Layout>
      <section id="posts">
        <PostList posts={sortedPosts} />
      </section>
    </Layout>
  );
};

export const getStaticProps = async (): Promise<{ props: HomeProps }> => {
  const postData = getSortedPostsData();
  await generateRssFeed(postData);

  return {
    props: {
      allPostsData: postData
    }
  };
};

export default Home;
