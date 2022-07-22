import { Feed } from 'feed';
import fs from 'fs';

import {
  authorName,
  bannerImage,
  rssPath,
  siteDescription,
  siteName,
  siteUrl
} from '../components/Layout';
import { PostData } from './getPosts';

export const generateRssFeed = async (postData: PostData[]) => {
  const today = new Date();
  const author = {
    name: authorName,
    link: siteUrl
  };
  const feed = new Feed({
    id: siteUrl,
    title: siteName,
    description: siteDescription,
    link: siteUrl,
    image: `${siteUrl}${bannerImage}`,
    favicon: `${siteUrl}/favicon/apple-touch-icon.png`,
    copyright: `All rights reserved ${today.getFullYear()}, Gustaf Broman`,
    updated: today,
    feedLinks: {
      rss2: `${siteUrl}/rss/feed.xml`
    },
    author
  });

  postData.forEach(({ id, title, date }) => {
    const url = `${siteUrl}/${id}`;
    feed.addItem({
      title: title,
      id: url,
      link: url,
      author: [author],
      contributor: [author],
      date: date ? new Date(date) : today
    });
  });

  fs.mkdirSync('./public/rss', { recursive: true });
  fs.writeFileSync(`./public${rssPath}`, feed.rss2());
};
