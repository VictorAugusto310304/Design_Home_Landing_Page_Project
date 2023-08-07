import Link from 'next/link'
import {useState} from 'react';
import {FaHome} from 'react-icons/fa';
import {FiMenu} from 'react-icons/fi';
import {AiOutlineClose} from 'react-icons/ai'
import {BsFacebook, BsTwitter, BsYoutube, BsLinkedin} from 'react-icons/bs'

export default function Navbar() {

    const [toggle, setToggle] = useState(false);
    
    return (
        <div className=' fixed bg-white top-0 w-[100%] z-20 shadow-md '>
            <div className=' container nx-auto flex justify-between items-center px-4 py-4 gap-5'>
                <div className=' flex gap-1 items-center text-2xl md:text-3xl font-bold lg:text-4xl'>
                    <span className=' italic '>Home</span>
                    <FaHome/>
                    <span className=' italic text-green-600 '>Design</span>
                </div>
                <div className=' hidden md:flex gap-9 tracking-wider text-gray-600 font-bold text-sm lg:text-base '>
                    <Link href="#" className=' hover:text-green-700 '>Home</Link>
                    <Link href="#product" className=' hover:text-green-700 '>Produtos</Link>
                    <Link href="#categorie" className=' hover:text-green-700 '>Categorias</Link>
                    <Link href="#" className=' hover:text-green-700 '>Trabalhe Conosco</Link>
                </div>
                <div className='flex gap-4'>
                    <button className=' hidden md:block border border-green-600 px-4 py-1 rounded-md text-green-700 hover:bg-green-600 hover:text-white '>
                        <a href="#">Cadastro</a>
                    </button>
                    <button className=' hidden md:block border border-green-600 px-4 py-1 rounded-md text-green-700 hover:bg-green-600 hover:text-white '>
                        <a href="#">Login</a>
                    </button>
                </div>
                {toggle ? (
                    <AiOutlineClose onClick={()=>setToggle(!toggle)} size={40} className=' md:hidden block '/>
                ):(
                    <FiMenu onClick={()=>setToggle(!toggle)} size={40} className=' md:hidden block '/>
                )}
            </div>
            {/* Menu Responsivo*/}
            <div className={` duration-300 md:hidden flex flex-col w-[85%] h-screen fixed bg-black/90 text-white text-2xl top-[72px] ${toggle ? `left-[0]` : `left-[-100%]`} `}>
                    <Link href="#" className=' hover:text-green-700 p-5 '>Home</Link>
                    <Link href="#product" className=' hover:text-green-700 p-5 '>Produtos</Link>
                    <Link href="#categorie" className=' hover:text-green-700 p-5 '>Categorias</Link>
                    <Link href="#" className=' hover:text-green-700 p-5 '>Trabalhe Conosco</Link>
                    <div className=' flex flex-col gap-8 items-center mt-10 '>
                        <div className=' bg-white w-[350px] h-[1.5px] '></div>
                        <div className='flex gap-10 '>
                            <Link  href="https://www.facebook.com" target="_blank"><BsFacebook size={35} className=' text-white-600 hover:-translate-y-1.5 duration-300 '/></Link>
                            <Link  href="https://www.twitter.com" target="_blank"><BsTwitter size={35} className=' text-white-600 hover:-translate-y-1.5 duration-300 '/></Link>
                            <Link  href="https://www.youtube.com" target="_blank"><BsYoutube size={35} className=' text-white-600 hover:-translate-y-1.5 duration-300 '/></Link>
                            <Link  href="https://www.linkedin.com" target="_blank"><BsLinkedin size={35} className=' text-white-600 hover:-translate-y-1.5 duration-300 '/></Link>
                        </div>
                    </div>
            </div>
        </div>
    );
}