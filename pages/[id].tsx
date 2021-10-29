import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

import { Article } from '../components/Article';
import { Footer } from '../components/Footer';
import { Intro } from '../components/Intro';
import { Layout } from '../components/Layout';
import { applyHighlight } from '../util/applyHighlight';
import { getAllPostIds, getPostData, PostData } from '../util/getPosts';

const Post = ({ title, contentHtml, date, thumbnail }: PostData): JSX.Element => {
  applyHighlight();

  let description = contentHtml.substring(0, 165);

  if (typeof window !== 'undefined') {
    const div = document.createElement('div');
    div.innerHTML = contentHtml;
    description = div.innerText.substring(0, 165);
  }

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.3.2/build/styles/default.min.css"
        ></link>
        <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Intro mini />
      <Article title={title} contentHtml={contentHtml} date={date} thumbnail={thumbnail} />
      <Footer />
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
