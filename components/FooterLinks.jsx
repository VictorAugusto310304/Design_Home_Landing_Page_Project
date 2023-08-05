
export default function FooterLinks({links, tittle}){
    return(
        <ul>
            <h1 className=' text-2xl mb-1 font-semibold '>{tittle}</h1>
            {
                links.map((link) => (
                    <li key={link.name}>
                        <a className=' text-white-200 hover:text-green-400 duration-300 cursor-pointer ' href={link.link}>{link.name}</a>
                    </li>
                ))
            }
        </ul>
    )
}