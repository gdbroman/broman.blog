import { Layout } from '../components/Layout';
import { Newsletter } from '../components/newsletter/Newsletter';
import { PostList } from '../components/PostList';
import { generateRssFeed } from '../util/generateRssFeed';
import { getSortedPostsData, PostData } from '../util/getPosts';

export type HomeProps = {
  sortedPostsData: PostData[];
};

const Home = ({ sortedPostsData }: HomeProps): JSX.Element => (
  <Layout>
    <Newsletter />
    <hr />
    <PostList posts={sortedPostsData} filterBy="published" />
  </Layout>
);

export const getStaticProps = async (): Promise<{ props: HomeProps }> => {
  const sortedPostsData = await getSortedPostsData();
  await generateRssFeed(sortedPostsData);

  return {
    props: {
      sortedPostsData
    }
  };
};

export default Home;
