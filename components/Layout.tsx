import Head from 'next/head';
import { ReactNode } from 'react';

import { Footer } from './Footer';
import { Header } from './Header';

export const siteName = 'broman.blog';
export const siteUrl = 'https://broman.blog';
export const rssPath = '/rss/feed.xml';
export const bannerImage = '/images/banner.jpg';
export const authorName = 'Gustaf Broman';
export const greeting = "Hey friend, I'm Gus";
export const siteDescription =
  'I write code, and emails about software craftsmanship. Reach me on Twitter @gdbroman, or on Urbit as ~lopsyp-doztun, if you have questions or ideas. Thank you for reading.';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps): JSX.Element => (
  <section>
    <Head>
      <title>{greeting}</title>
      <meta name="description" content={siteDescription} />

      <meta name="og:title" content={greeting} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`https://broman.blog${bannerImage}`} />
      <meta property="og:site_name" content={siteName} />
      <meta name="og:description" content={siteDescription} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={`https://broman.blog${bannerImage}`} />
      <meta name="twitter:site" content={siteName} />

      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png?new=true" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png?new=true" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png?new=true" />
      <link rel="manifest" href="/favicon/site.webmanifest?new=true"></link>

      <link rel="alternate" type="application/rss+xml" href={`${siteUrl}${rssPath}`} />
    </Head>
    <main id="container">
      <Header />
      {children}
      <Footer />
    </main>
  </section>
);
