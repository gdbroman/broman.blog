import Link from "next/link";

import Date from "../components/date";
import Layout from "../components/layout";
import { Intro } from "../components/intro";
import { Footer } from "../components/footer";
import { getSortedPostsData } from "../lib/posts";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Intro />
      <section id="posts">
        <ul>
          {allPostsData.map(({ id, date, title }) => {
            if (date && title) {
              return (
                <li key={id}>
                  <Link href={`/${id}`}>
                    <a>{title}</a>
                  </Link>
                  <Date dateString={date} />
                </li>
              );
            }
          })}
        </ul>
      </section>
      <Footer />
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
