import { Layout } from '../components/Layout';
import { PostList } from '../components/PostList';
import { generateRssFeed } from '../util/generateRssFeed';
import { getSortedPostsData, PostData } from '../util/getPosts';

export type HomeProps = {
  allPostsData: PostData[];
};

const Home = ({ allPostsData }: HomeProps): JSX.Element => {
  const filteredPosts = allPostsData.filter((p) => p.category !== 'page' && !p.draft);

  return (
    <Layout>
      <PostList posts={filteredPosts} />
    </Layout>
  );
};

export const getStaticProps = async (): Promise<{ props: HomeProps }> => {
  const postData = await getSortedPostsData();
  await generateRssFeed(postData);

  return {
    props: {
      allPostsData: postData
    }
  };
};

export default Home;
