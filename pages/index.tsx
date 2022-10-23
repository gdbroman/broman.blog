import { Layout } from '../components/Layout';
import { Newsletter } from '../components/newsletter/Newsletter';
import { PostList } from '../components/PostList';
import { getSortedPostsData, PostData } from '../util/getPosts';

export type HomeProps = {
  sortedPostsData: PostData[];
};

const Home = ({ sortedPostsData }: HomeProps): JSX.Element => (
  <Layout>
    <div className="flexer">
      <Newsletter standalone />
      <hr style={{ margin: '32px 0' }} />
      <PostList posts={sortedPostsData} filterBy="newsletter" max={2} />
    </div>
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

export default Home;
