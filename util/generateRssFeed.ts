import { Feed } from 'feed';
import fs from 'fs';

import {
  authorName,
  bannerImage,
  rssPath,
  siteDescription,
  siteTitle,
  siteUrl
} from '../components/Layout';
import { PostData } from './getPosts';

export const generateRssFeed = async (postData: PostData[]) => {
  const date = new Date();
  const author = {
    name: authorName,
    link: siteUrl
  };
  const feed = new Feed({
    title: siteTitle,
    description: siteDescription,
    id: siteUrl,
    link: siteUrl,
    image: `${siteUrl}${bannerImage}`,
    favicon: `${siteUrl}/favicon/apple-touch-icon.png`,
    copyright: `All rights reserved ${date.getFullYear()}, Gustaf Broman`,
    updated: date,
    feedLinks: {
      rss2: `${siteUrl}/rss/feed.xml`
    },
    author
  });

  postData.forEach((post) => {
    const url = `${siteUrl}/${post.id}`;
    feed.addItem({
      title: post.title,
      id: url,
      link: url,
      author: [author],
      category: [{ name: post.category }],
      contributor: [author],
      date: new Date(post.date)
    });
  });

  fs.mkdirSync('./public/rss', { recursive: true });
  fs.writeFileSync(`./public${rssPath}`, feed.rss2());
};
