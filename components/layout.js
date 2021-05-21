import Head from "next/head";
import Link from "next/link";

export const authorName = "Gustaf Broman";
export const siteTitle = "broman.blog";
export const siteDescription = "I like to build and I like to explore";

export default function Layout({ children, home }) {
  return (
    <section>
      <Head>
        <link rel="icon" href="/images/me.jpg" />
        <meta name="description" content={siteDescription} />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main id="container">{children}</main>
    </section>
  );
}
