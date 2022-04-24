import { Layout } from '../components/Layout';
import { PostList } from '../components/PostList';
import { generateRssFeed } from '../util/generateRssFeed';
import { getSortedPostsData } from '../util/getPosts';
import { HomeProps } from './index';

const Home = ({ sortedPostsData }: HomeProps): JSX.Element => (
  <Layout>
    <PostList posts={sortedPostsData} filterBy="drafts" />
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
