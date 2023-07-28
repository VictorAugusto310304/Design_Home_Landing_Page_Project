import Link from 'next/link'
import React from 'react';
import {FaHome} from 'react-icons/fa';

const Navbar = () =>{
    return(
        <div className='fixed bg-white top-0 w-[100%] z-20'>
            <div className='container nx-auto flex justify-between items-center px-4 py-4'>
                <div className='flex gap-1 items-center text-2xl font-bold'>
                    <span className='italic'>Art</span>
                    <FaHome/>
                    <span className='italic text-green-700'>Design</span>
                </div>
                <div className='flex gap-6'>
                    <Link href="/"><a className='hover: text-green-780'>Home</a></Link>
                    <Link href="/"><a className='hover: text-green-780'>Products</a></Link>
                    <Link href="/"><a className='hover: text-green-780'>Categories</a></Link>
                    <Link href="/"><a className='hover: text-green-780'>Services</a></Link>
                </div>
                <div>Button</div>
            </div>
        </div>
    )
}

export default Navbar