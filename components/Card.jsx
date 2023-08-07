import Button from './Button'
import Image from 'next/image'

export default function Card({image, title}){
    return(
        <div className=' rounded-xl relative overflow-hidden group hover:scale-105 hover:shadow-md duration-300 '>
            <div className='max-h-[160px] md:max-h-[280px] w-full object-cover rounded-xl'>
                <Image src={image} width={600} height={500}/>
            </div>
            
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white z-10 flex flex-col items-center justify-center gap-5
            -bottom-20 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300'>
                <h3 className=' font-bold text-2xl mt-4 '>{title}</h3>
                <Button link="#" text='Explorar'/>
            </div>
        </div>
    )
}