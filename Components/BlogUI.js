import React from 'react'
import { PostCard, Categories, PostWidget,Navbar } from '../Components/'
import { getPosts } from '../services'


const BlogUI = ({post}) => {
  return (
   
<section className="py-20">
  <div className="container px-4 mx-auto text-white">
    <h2 className="mb-12 lg:mb-20 text-3xl md:text-4xl font-bold font-heading">Our Blog</h2>
    <div className="flex flex-wrap -mx-4 mb-20">
      <div className="w-full lg:w-1/2 px-4 lg:pr-20 lg:pt-4 order-1 lg:order-0">
        <span className="inline-block py-1 px-3 uppercase text-xs font-semibold bg-blue-50 rounded-full text-blue-600">Development</span>
        <h3 className="my-4 text-xl md:text-2xl font-bold font-heading">Curabitur vestibulum odio maximus.</h3>
        <p className="mb-4 text-sm md:text-base leading-loose text-blueGray-400">Aenean tempus orci eu est ultrices hendrerit. Fusce suscipit, leo a semper venenatis, felis urna pulvinar nibh, vitae porta erat risus sed mauris. Vestibulum vehicula leo eget libero eleifend, quis dictum eros bibendum. Maecenas convallis tempor varius.</p>
        <a className="text-xs font-semibold text-blue-600" href="#">
          <span>Read More</span>
          <svg className="inline-block w-4 h-4 ml-1" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </a>
      </div>
      <div className="w-full lg:w-1/2 px-4 mb-8 order-0 lg:order-1">
        <img className="w-full h-80 object-cover rounded" src={post.featuredImage.url} alt={post.title}/>
      </div>
    </div>
    <div className="flex flex-wrap -mx-4 mb-20">
      <div className="w-full lg:w-1/2 px-4 lg:pl-20 lg:pt-4 order-1">
        <span className="inline-block py-1 px-3 uppercase text-xs font-semibold bg-blue-50 rounded-full text-blue-600">Startup</span>
        <h3 className="my-4 text-xl md:text-2xl font-bold font-heading">Curabitur vestibulum odio maximus.</h3>
        <p className="mb-4 text-sm md:text-base leading-loose text-blueGray-400">Aenean tempus orci eu est ultrices hendrerit. Fusce suscipit, leo a semper venenatis, felis urna pulvinar nibh, vitae porta erat risus sed mauris. Vestibulum vehicula leo eget libero eleifend, quis dictum eros bibendum. Maecenas convallis tempor varius.</p>
        <a className="text-xs font-semibold text-blue-600" href="#">
          <span>Read More</span>
          <svg className="inline-block w-4 h-4 ml-1" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </a>
      </div>
      <div className="w-full lg:w-1/2 px-4 mb-8 order-0">
        <img className="w-full h-80 object-cover rounded" src={post.featuredImage.url} alt={post.title}/>
      </div>
    </div>
    <div className="flex flex-wrap -mx-4 mb-20">
      <div className="w-full lg:w-1/2 px-4 lg:pr-20 lg:pt-4 order-1 lg:order-0">
        <span className="inline-block py-1 px-3 uppercase text-xs font-semibold bg-blue-50 rounded-full text-blue-600">Startup</span>
        <h3 className="my-4 text-xl md:text-2xl font-bold font-heading">Curabitur vestibulum odio maximus.</h3>
        <p className="mb-4 text-sm md:text-base leading-loose text-blueGray-400">Aenean tempus orci eu est ultrices hendrerit. Fusce suscipit, leo a semper venenatis, felis urna pulvinar nibh, vitae porta erat risus sed mauris. Vestibulum vehicula leo eget libero eleifend, quis dictum eros bibendum. Maecenas convallis tempor varius.</p>
        <a className="text-xs font-semibold text-blue-600" href="#">
          <span>Read More</span>
          <svg className="inline-block w-4 h-4 ml-1" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </a>
      </div>
      <div className="w-full lg:w-1/2 px-4 mb-8 order-0 lg:order-1">
        <img className="w-full h-80 object-cover rounded" src={post.featuredImage.url} alt={post.title}/>
      </div>
    </div>
    <div className="flex flex-wrap -mx-4 mb-20">
      <div className="w-full lg:w-1/2 px-4 lg:pl-20 lg:pt-4 order-1">
        <span className="inline-block py-1 px-3 uppercase text-xs font-semibold bg-blue-50 rounded-full text-blue-600">Startup</span>
        <h3 className="my-4 text-xl md:text-2xl font-bold font-heading">Curabitur vestibulum odio maximus.</h3>
        <p className="mb-4 text-sm md:text-base leading-loose text-blueGray-400">Aenean tempus orci eu est ultrices hendrerit. Fusce suscipit, leo a semper venenatis, felis urna pulvinar nibh, vitae porta erat risus sed mauris. Vestibulum vehicula leo eget libero eleifend, quis dictum eros bibendum. Maecenas convallis tempor varius.</p>
        <a className="text-xs font-semibold text-blue-600" href="#">
          <span>Read More</span>
          <svg className="inline-block w-4 h-4 ml-1" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </a>
      </div>
      <div className="w-full lg:w-1/2 px-4 mb-8 order-0">
        <img className="w-full h-80 object-cover rounded" src={post.featuredImage.url} alt={post.title}/>
      </div>
    </div>
    <div className="text-center"><a className="inline-block py-4 px-8 text-xs text-white font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded" href="#">Show all posts</a></div>
  </div>
</section>
  )
}

// {posts.map((post) => <PostCard post={post.node} key={post.title} />)}



export async function getStaticProps(){
    const posts = (await getPosts()) || [];
  
    return {
      props: {posts}
    }
  }

export default BlogUI