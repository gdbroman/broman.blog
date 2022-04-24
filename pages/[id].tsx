import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

import { Article } from '../components/Article';
import { Layout } from '../components/Layout';
import { getAllPostIds, getPostData, PostData } from '../util/getPosts';
import { useHighlight } from '../util/useHighlight';

const Post = ({ title, contentHtml, description, date = '' }: PostData): JSX.Element => {
  useHighlight();

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
      </Head>
      <Article title={title} contentHtml={contentHtml} date={date} />
    </Layout>
  );
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string);
  return {
    props: {
      ...postData
    }
  };
};
