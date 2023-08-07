import Button from './Button'
import Link from 'next/link'
import {BsFacebook, BsTwitter, BsYoutube, BsLinkedin} from 'react-icons/bs'

export default function Hero() {
    return(
        <div className=' bg-[url("../public/assets/Living.jpg")] h-screen object-scale-down bg-cover bg-no-repeat bg-center
        bg-fixed flex items-center relative '>
            <div className=' absolute inset-0 bg-black/60 '></div>
            <div className=' container mx-auto px-4 z-10 '>
                <div className=' max-w-[650px] text-white flex flex-col gap-[40px] '>
                    <div>
                        <h1 className=' text-3xl md:text-4xl font-semibold tracking-wide lg:text-5xl '>Torne sua casa dos sonhos</h1>
                    </div>
                    <div>
                        <h1 className=' text-3xl md:text-4xl font-semibold tracking-wide lg:text-5xl '>uma <span className='text-green-600'>realidade</span>.</h1>
                    </div>
                    <div className=' bg-green-600 h-[2px] w-[400px] '></div>
                    <div>
                        <p className=' text-base md:text-xl text-gray-300 tracking-widest '>Móveis de alta qualidade.</p>
                    </div>
                    <Button link="#" text='Explorar Produtos'/>
                </div>
            <div className=' hidden absolute right-20 top-32 z-10 md:flex flex-col gap-5 items-center '>
                <Link  href="https://www.facebook.com" target='_blank '><BsFacebook size={25} className=' text-green-600 hover:-translate-x-1.5 duration-300 '/></Link>
                <Link  href="https://www.twitter.com" target='_blank '><BsTwitter size={25} className=' text-green-600 hover:-translate-x-1.5 duration-300 '/></Link>
                <Link  href="https://www.youtube.com" target='_blank '><BsYoutube size={25} className=' text-green-600 hover:-translate-x-1.5 duration-300 '/></Link>
                <Link  href="https://www.linkedin.com" target='_blank '><BsLinkedin size={25} className=' text-green-600 hover:-translate-x-1.5 duration-300 '/></Link>
            </div>
            </div>
        </div>
    )
}