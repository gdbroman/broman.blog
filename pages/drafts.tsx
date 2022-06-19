import { Layout } from '../components/Layout';
import { PostList } from '../components/PostList';
import { getSortedPostsData } from '../util/getPosts';
import { HomeProps } from './archive';

const Drafts = ({ sortedPostsData }: HomeProps): JSX.Element => (
  <Layout>
    <PostList posts={sortedPostsData} filterBy="drafts" />
  </Layout>
);

export const getStaticProps = async (): Promise<{ props: HomeProps }> => {
  const sortedPostsData = await getSortedPostsData();

  return {
    props: {
      sortedPostsData
    }
  };
};

export default Drafts;
