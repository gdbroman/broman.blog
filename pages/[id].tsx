import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

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
  isNewsletter,
  thumbnail
}: PostData): JSX.Element => {
  useHighlight();

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
        isNewsletter={isNewsletter}
        thumbnail={thumbnail}
        contentHtml={contentHtml}
      />
      {isNewsletter && (
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
