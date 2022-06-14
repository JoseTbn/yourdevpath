import Link from 'next/link'
import React,{useContext} from 'react'

const categories = [
    {name:'sfsdf' , slug:'sfsdf'}, 
    {name:'tyuret' , slug:'suytuty'} 
]


const Navbar = () => {
  return (
    <div className=" container mx-auto px-10 mb-8">
        <div className="border-b w-full inline-block border-blue-100 py-8">
            <div className="md:float-left block">
                <Link href='/'>
                <span className="cursor-pointer font-bold text-4xl text-white">DevDoorOps</span>
                </Link>
            </div>
            <div className=" hidden md:float-left md:contents">
{categories.map((category) =>(
    <Link key={category.slug} href={`/category/${category.slug}`}>
        <span className="cursor-pointer md:float-right mt-2 align-middle  text-white ml-4 font-semibold">{category.name}
        </span>
    </Link>
))}
            </div>

        </div>

    </div>
  )
}

export default Navbar