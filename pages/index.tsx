import Link from 'next/link';

import { Date } from '../components/Date';
import { Footer } from '../components/Footer';
import { Intro } from '../components/Intro';
import { Layout } from '../components/Layout';
import { getSortedPostsData, isDevelopment, PostData } from '../util/getPosts';

type HomeProps = {
  allPostsData: PostData[];
};

const Home = ({ allPostsData }: HomeProps): JSX.Element => (
  <Layout>
    <Intro />
    <section id="posts">
      <ul>
        {allPostsData
          .filter((p) => !p.isDraft || isDevelopment)
          .map(
            ({ id, date, title }) =>
              date &&
              title && (
                <li key={id}>
                  <Link href={`/${id}`}>
                    <a>{title}</a>
                  </Link>
                  <Date dateString={date} />
                </li>
              )
          )}
      </ul>
    </section>
    <Footer />
  </Layout>
);

export const getStaticProps = async (): Promise<{ props: HomeProps }> => ({
  props: {
    allPostsData: getSortedPostsData()
  }
});

export default Home;
