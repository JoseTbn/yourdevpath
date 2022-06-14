import React from 'react'
import moment from 'moment'
import Link from 'next/dist/client/link'


const PostCard = ({post}) => {
    console.log(post);
  return (
<>


        <div className="md:w-2/3 w-full pb-6 md:pb-0 md:pr-12">
            <a href="./blog.html">                        
                <div className="h-96 w-full">
                    <img src={post.featuredImage.url} alt={post.title} className="h-full w-full object-cover overflow-hidden rounded shadow" />
                </div>
                <p className="mt-6 mb-2 text-sm text-teal-500"></p>
                <h2 className="text-4xl text-gray-900 font-light">{post.title}</h2>
                <p className="text-gray-600 text-sm mt-4">12 September 2020</p>
            </a>
        </div>
        {/* <div className="md:w-1/3 w-full">
            <a href="./blog.html">                        
                <div className="h-96 w-full">
                    <img src="./assets/images/2.png" alt="" className="h-full w-full object-cover overflow-hidden rounded shadow" />
                </div>
                <p className="mt-6 mb-2 text-sm text-teal-500">Travel</p>
                <h2 className="text-4xl text-gray-900 font-light">Crossing the Canadian border on foot. Learn the basics and join me!</h2>
                <p className="text-gray-600 text-sm mt-4">12 September 2020</p>
            </a>
        </div>
 */}

    <div>{post.title}
    {post.excerpt}
    </div>
    </>
  )
}

export default PostCard