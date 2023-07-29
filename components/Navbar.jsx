import Link from 'next/link'
import React, {useState} from 'react';
import {FaHome} from 'react-icons/fa';
import {FiMenu} from 'react-icons/fi';
import {AiOutlineClose} from 'react-icons/ai'

const Navbar = () =>{

    const [toggle, setToggle] = useState(false);
    
    return (
        <div className='fixed bg-white top-0 w-[100%] z-20'>
            <div className='container nx-auto flex justify-between items-center px-4 py-4'>
                <div className='flex gap-1 items-center text-xl md:text-2xl font-bold'>
                    <span className='italic'>Art</span>
                    <FaHome/>
                    <span className='italic text-green-700'>Design</span>
                </div>
                <div className='hidden md:flex gap-6 tracking-wider text-gray-600 font-bold'>
                    <Link href="/" className='hover:text-green-700'>Home</Link>
                    <Link href="/" className='hover:text-green-700'>Products</Link>
                    <Link href="/" className='hover:text-green-700'>Categories</Link>
                    <Link href="/" className='hover:text-green-700'>Services</Link>
                </div>
                <div>
                    <button className='hidden md:block border border-green-700 px-4 py-1 rounded-md text-green-700 hover:bg-green-700 hover:text-white'>Contact</button>
                </div>
                {toggle ? (
                    <AiOutlineClose onClick={()=>setToggle(!toggle)} size={30} className='md:hidden block'/>
                ):(
                    <FiMenu onClick={()=>setToggle(!toggle)} size={30} className='md:hidden block'/>
                )}
            </div>
            {/* Menu Responsivo*/}
            <div className={` duration-300 md:hidden flex flex-col w-[70%] h-screen fixed bg-black/70 text-white top-[60px] ${toggle ? `left-[0]` : `left-[-100%]`}`}>
                    <Link href="/" className='hover:text-green-700 p-5'>Home</Link>
                    <Link href="/" className='hover:text-green-700 p-5'>Products</Link>
                    <Link href="/" className='hover:text-green-700 p-5'>Categories</Link>
                    <Link href="/" className='hover:text-green-700 p-5'>Services</Link>
                </div>
        </div>
    );
}

export default Navbar