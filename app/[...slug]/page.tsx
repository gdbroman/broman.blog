import { redirect } from "next/navigation";
import { allPosts } from "contentlayer/generated";

import { Metadata } from "next";
import { Mdx } from "@/components/mdx-components";
import Link from "next/link";
import Image from "next/image";

interface PostProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostProps["params"]) {
  return allPosts.find((post) => post.slug.slice(1) === params.slug[0]);
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export async function generateStaticParams(): Promise<PostProps["params"][]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

export default async function PostPage({ params }: PostProps) {
  const post = await getPostFromParams(params);

  if (!post) redirect("/");

  const toReadableString = (date: string) => {
    const dateObj = new Date(date);
    return dateObj.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <article className="my-10 prose dark:prose-invert relative">
      <h1 className="mb-2">{post.title}</h1>
      {post.description && <p className="text-xl mt-0">{post.description}</p>}
      <hr className="my-4" />
      <div className="flex justify-between items-center">
        <p className="text-sm m-0">{toReadableString(post.date)}</p>
        <p className="text-sm m-0">
          <Link href="/about">@gdbroman</Link>
        </p>
      </div>
      {post.image ? (
        <div className="unset-img">
          <Image
            fill
            alt={post.title}
            src={post.image}
            className="rounded-lg"
          />
        </div>
      ) : (
        <hr className="my-4" />
      )}
      <Mdx code={post.body.code} />
    </article>
  );
}
