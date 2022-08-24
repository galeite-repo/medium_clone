import Link from 'next/link'
import React from 'react'
import { urlFor } from '../sanity'

export interface CardPost{

    title: string;
    description: string;
    author :{
     name: string;
     image: string;
    };
    mainImage:{
     url: string;
    };
    slug:{
     current: string;
    };
 }

function PostCard({ slug, mainImage, title, description, author}: CardPost) {
  return (
    <Link href={`/post/${slug.current}`}>
    <div className="border rounded-lg group cursor-pointer overflow-hidden">
      <img
        className="h-60 w-full object-cover group-hover:scale-105
        transition-transform duration-200 ease-in-out"
        src={urlFor(mainImage).url()!}
        alt=""
      />
      <div className="flex justify-between p-5 bg-white">
        <div>
          <p className="text-lg font-bold">{title}</p>
          <p className="text-xs">
            {description} by {author.name}
          </p>
        </div>
        <img
          className="h-12 w-12 rounded-full"
          src={urlFor(author.image).url()!}
          alt=""
        />
      </div>
    </div>
  </Link>
  )
}

export default PostCard