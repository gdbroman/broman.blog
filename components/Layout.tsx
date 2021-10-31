import Head from 'next/head';
import { ReactNode } from 'react';

import { Intro } from '../components/Intro';

export const authorName = 'Gustaf Broman';
export const siteUrl = 'https://broman.blog';
export const siteTitle = 'broman.blog';
export const siteDescription =
  "Hello, I'm Gustaf Broman—a developer from Stockholm. Building in perpetuity, exploring the unknown. Using this for thinking out loud.";

const bannerImage = '/images/banner.png';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps): JSX.Element => (
  <section>
    <Head>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />

      <meta name="og:title" content={siteTitle} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`https://broman.blog${bannerImage}`} />
      <meta property="og:site_name" content={siteTitle} />
      <meta name="og:description" content={siteDescription} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={`https://broman.blog${bannerImage}`} />
      <meta name="twitter:site" content={'broman.blog'} />

      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/favicon/site.webmanifest"></link>
    </Head>
    <main id="container">
      <Intro />
      <hr />
      {children}
    </main>
  </section>
);
