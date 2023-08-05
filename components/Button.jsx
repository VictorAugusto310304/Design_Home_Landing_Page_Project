
export default function Button({link, text}) {
    return (
        <div className=' bg-green-600 px-4 py-2 w-[180px] text-center rounded-lg inline-block font-semibold border border-green-600 hover:bg-transparent hover:text-green-600 transition duration-300 '>
           <a href={link}>{text}</a> 
        </div>
    )
}