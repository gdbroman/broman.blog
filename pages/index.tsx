import { ConvertKitForm } from '../components/ConvertKitForm';
import { Layout, siteTitle } from '../components/Layout';
import { PostList } from '../components/PostList';
import { generateRssFeed } from '../util/generateRssFeed';
import { getSortedPostsData, PostData } from '../util/getPosts';

export type HomeProps = {
  sortedPostsData: PostData[];
};

const Home = ({ sortedPostsData }: HomeProps): JSX.Element => (
  <Layout>
    <div id="newsletter">
      <h1>{siteTitle}</h1>
      <p>Receive an email when I publish.</p>
      <ConvertKitForm />
    </div>
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
