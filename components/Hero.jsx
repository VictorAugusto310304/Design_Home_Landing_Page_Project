import React from 'react'
import Button from './Button'
import Link from 'next/link'
import {BsFacebook, BsTwitter, BsYoutube, BsLinkedin} from 'react-icons/bs'

export default function Hero() {
    return(
        <div className=' bg-[url("/living.jpg")] h-screen object-scale-down bg-cover bg-no-repeat bg-center
        bg-fixed flex items-center relative '>
            <div className=' absolute inset-0 bg-black/60 '></div>
            <div className=' container mx-auto px-4 z-10 '>
                <div className=' max-w-[450px] text-white flex flex-col gap-[40px] '>
                    <div>
                        <h1 className=' text-4xl md:text-5xl font-semibold tracking-wide '>Design your Dream</h1>
                    </div>
                    <div>
                        <h1 className=' text-4xl md:text-5xl font-semibold tracking-wide '><span className='text-green-600'>Home</span> Very Easily</h1>
                    </div>
                    <div className=' bg-green-600 h-[2px] w-[300px] '></div>
                    <div>
                        <p className=' text-lg md:text-xl text-gray-300 tracking-widest '>Simple Furniture and High-end Quality.</p>
                    </div>
                    <div className=' bg-green-600 px-4 py-2 w-[180px] text-center rounded-lg inline-block font-semibold border border-green-600 hover:bg-transparent hover:text-green-600 transition duration-300 '>
                        <Button link="#" text="Explore Products"/>
                    </div>
                </div>
            <div className=' hidden absolute right-20 top-32 z-10 flex flex-col gap-5 items-center '>
                <div className=' bg-green-600 w-[1.5px] h-[250px] '></div>
                <Link  href="https://www.facebook.com" target="_blank"><BsFacebook size={25} className=' text-green-600 hover:-translate-x-1.5 duration-300 '/></Link>
                <Link  href="https://www.twitter.com" target="_blank"><BsTwitter size={25} className=' text-green-600 hover:-translate-x-1.5 duration-300 '/></Link>
                <Link  href="https://www.youtube.com" target="_blank"><BsYoutube size={25} className=' text-green-600 hover:-translate-x-1.5 duration-300 '/></Link>
                <Link  href="https://www.linkedin.com" target="_blank"><BsLinkedin size={25} className=' text-green-600 hover:-translate-x-1.5 duration-300 '/></Link>
            </div>
            </div>
        </div>
    )
}