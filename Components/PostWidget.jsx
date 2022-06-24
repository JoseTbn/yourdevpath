import Image from 'next/image'
import Link from 'next/link'
import React, {useState,useEffect} from 'react'
import { getRecentPosts ,getSimilarPosts} from '../services'


const PostWidget = ({categories,slug}) => {
  const [relatedPost, setRelatedPost] = useState([])
  

useEffect(() => {
  if(slug){
    getSimilarPosts(categories,slug)
    .then((results)=> setRelatedPost(results))
  } else {
    getRecentPosts(categories,slug)
    .then((results)=> setRelatedPost(results))
  }
}, [slug])



  return (
    <div className=" text-black  bg-slate-100 shadow-lg rounded-lg p-8  mb-8">
<h3 className=" text-xl mb-8 font-semibold border-b pb-4">
  {slug ? 'Realated post' : "Recent Post"}
  </h3>      

{
  relatedPost.map(()=>(
    <div className=" flex items-center w-full mb-4" key={post.title}>
<div className=" w-16 flex-none">
  
  <img src={post.featuredImage.url}
   alt={post.title} 
    height= '60px'
    width= '60px'
    className=" align-middle round w-full"
  />
</div>

<div className="flex-grow ml-4">
  <p className='  text-black font-extralight'>
    {moment(post.created).format('DD.MM.YYYY')}
  </p>
<Link href={`/post/${post.slug}`} key={post.title} className="" >
{post.title}
</Link>
</div>

    </div>
  ))
}

  </div>
  )
}

export default PostWidget