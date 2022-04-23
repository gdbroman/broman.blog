import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import remark from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export type PostData = {
  id: string;
  contentHtml: string;
  title: string;
  description?: string;
  date?: string;
  category?: string;
  draft?: boolean;
};

const truncate = (str, max, suffix) =>
  str.length < max
    ? str
    : `${str.substr(0, str.substr(0, max - suffix.length).lastIndexOf(' '))}${suffix}`;

const getDescription = (contentHtml: string): string => {
  const withoutTags = contentHtml.replace(/<[^>]*>?/gm, '');
  const truncated = truncate(withoutTags, 165, '...');
  return truncated;
};

export const getSortedPostsData = async (): Promise<PostData[]> => {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const postData = await Promise.all(
    fileNames.map(async (fileName) => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, '');

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Use remark to convert markdown into HTML string
      const processedContent = await remark().use(html).process(matterResult.content);
      const contentHtml = processedContent.toString();
      const description = getDescription(contentHtml);

      // Combine the data with the id
      return {
        id,
        description,
        ...matterResult.data
      } as PostData;
    })
  );

  // Sort posts by date
  return postData.sort((a, b) => {
    if (a.date > b.date) return -1;
    if (a.date < b.date) return 1;
    return 0;
  });
};

export const getAllPostIds = () => {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    };
  });
};

export const getPostData = async (id: string): Promise<PostData> => {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString();
  const description = getDescription(contentHtml);

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    description,
    title: matterResult.data.title,
    date: matterResult.data.date ?? '',
    ...matterResult.data
  };
};
