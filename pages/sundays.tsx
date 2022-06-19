import Head from 'next/head';

import { Layout } from '../components/Layout';
import { Newsletter } from '../components/newsletter/Newsletter';
import { PostList } from '../components/PostList';
import { getSortedPostsData, PostData } from '../util/getPosts';

export type HomeProps = {
  sortedPostsData: PostData[];
};

const Sundays = ({ sortedPostsData }: HomeProps): JSX.Element => (
  <Layout>
    <Head>
      <title>Sundays</title>
    </Head>
    <Newsletter standalone />
    <hr style={{ margin: '32px 0' }} />
    <PostList posts={sortedPostsData} filterBy="isNewsletter" />
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

export default Sundays;
