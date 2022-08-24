import type { NextPage } from "next";
import Head from "next/head";

import Header from "../components/Header";
import Hero from "../components/Hero";
import PostCard from "../components/PostCard";

import { sanityClient, urlFor } from "../sanity";
import { Post } from "../typings";

interface Props {
  posts: [Post];
}
export default function Home({ posts }: Props) {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Clone Medium</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />

      {/* POSTS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6">
        {posts.map((post) => (
          <PostCard
            key={post._id}
            title={post.title}
            description={post.description}
            author={post.author}
            slug={post.slug}
            mainImage={post.mainImage}
          />
        ))}
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
    _id,
    title,
    author-> {
      name,
      image
    },
    description,
    mainImage,
    slug
  }`;
  const posts = await sanityClient.fetch(query);
  return {
    props: {
      posts,
    },
  };
};
