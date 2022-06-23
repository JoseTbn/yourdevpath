import React from 'react'
import moment from 'moment'
import Link from 'next/dist/client/link'


const PostCard = ({post}) => {
    console.log(post);
  return (
<>

<div className="2xl:w-7/12 lg:w-8/12 md:w-10/12">
                        <img src={post.featuredImage.url} alt={post.title} alt="fingerprint recognition" className="lg:w-full w-auto" />
                        <div className="mt-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <p className="text-base leading-4 text-gray-500">5 feb</p>
                                    <p className="text-base leading-none text-gray-500 ml-12">5 min read</p>
                                </div>
                                <div className="flex items-center">
                                    <svg width={64} height={2} viewBox="0 0 64 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M64 1H0" stroke="#6B7280" />
                                    </svg>
                                    <p className="text-base leading-none text-gray-500 ml-2">{post.author.name}</p>
                                </div>
                            </div>
                            <h1 className="lg:text-3xl text-2xl font-semibold mt-4 text-gray-800">{post.title}</h1>
                            <p className="text-base leading-6 text-gray-600 mt-2">{post.excerpt}</p>
                        </div>
                    </div>
   
    </>
  )
}

export default PostCard 


