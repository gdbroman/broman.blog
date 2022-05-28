import Image from 'next/image';

import { ConvertKitForm } from '../components/ConvertKitForm';
import { Layout } from '../components/Layout';
import { PostList } from '../components/PostList';
import { generateRssFeed } from '../util/generateRssFeed';
import { getSortedPostsData, PostData } from '../util/getPosts';

export type HomeProps = {
  sortedPostsData: PostData[];
};

const Home = ({ sortedPostsData }: HomeProps): JSX.Element => (
  <Layout>
    <div id="newsletter">
      <Image src="/favicon/android-chrome-512x512.png" width={100} height={100} alt="Gustaf" />
      <div id="body">
        <h1>Greetings! I&apos;m Gustaf</h1>
        <p>
          Every Sunday I write an idea-driven email, trying to make sense of our technoculture.
          Biased towards individual sovereignty.
        </p>
      </div>
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
