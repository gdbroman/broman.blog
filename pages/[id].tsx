import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';

import { Article } from '../components/Article';
import { Layout } from '../components/Layout';
import { Newsletter } from '../components/newsletter/Newsletter';
import { getAllPostIds, getPostData, PostData } from '../util/getPosts';
import { useHighlight } from '../util/useHighlight';

const Post = ({
  title,
  contentHtml,
  description,
  date,
  newsletter,
  thumbnail
}: PostData): JSX.Element => {
  useHighlight();

  useEffect(() => {
    if (newsletter) {
      const s = document.createElement('script');
      s.setAttribute('src', 'https://platform.twitter.com/widgets.js');
      s.setAttribute('async', 'true');
      document.head.appendChild(s);
    }
  }, []);

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="og:title" content={title} />
        <meta name="description" content={description} />
        <meta name="og:description" content={description} />
        {thumbnail && (
          <>
            <meta property="og:image" content={`https://broman.blog${thumbnail}`} />
            <meta name="twitter:image" content={`https://broman.blog${thumbnail}`} />
          </>
        )}
      </Head>
      <Article
        title={title}
        date={date}
        newsletter={newsletter}
        thumbnail={thumbnail}
        contentHtml={contentHtml}
      />
      {newsletter && (
        <>
          <hr />
          <Newsletter />
        </>
      )}
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
