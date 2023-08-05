import FooterLink from './FooterLink'
import {FaHome} from 'react-icons/fa';

export default function Footer(){

    const MENU = [
        {name: 'Home', link: '#'},
        {name: 'Produtos', link: '#'},
        {name: 'Categorias', link: '#'},
        {name: 'Trabalhe Conosco', link: '#'},
    ]

    const EMPRESA = [
        {name: 'Sobre nós', link:'#'},
        {name: 'Blog', link:'#'},
        {name: 'Parcerias', link:'#'},
        {name: 'Carreiras', link:'#'}
    ]

    const CONTATO = [
        {name: 'FAQs', link:'#'},
        {name: 'Ajuda', link:'#'},
        {name: 'Políticas', link:'#'},
        {name: 'Termos e Condições', link:'#'},
    ]

    const REDES_SOCIAIS = [
        {name: 'Twitter', link:'#'},
        {name: 'Facebook', link:'#'},
        {name: 'Instagram', link:'#'},
        {name: 'Linkedin', link:'#'},
    ]

    return (
        <footer className=' bg-green-600 h-[850px] md:h-[850px] lg:h-[300px] text-white '>
            <div className=' container mx-auto '>
                <ul className=' grid grid-cols-1 md:grid-cols-1 lg:grid-cols-5 gap-6 sm:px-8 px-5 py-16 '>
                    <div className=' grid text-black gap-1 items-center text-4xl md:text-3xl font-bold '>
                        <div className=' flex '>
                            <span className=' italic '>Home</span>
                            <FaHome/>
                            <span className=' italic text-white '>Design</span>
                        </div>
                        <div>
                            <p className=' grid text-base md:text-sm text-white tracking-widest '>Torne sua casa dos sonhos uma realidade.</p>
                        </div>
                    </div>
                    
                    <FooterLink links={MENU} tittle="MENU"/>
                    <FooterLink links={EMPRESA} tittle="EMPRESA"/>
                    <FooterLink links={CONTATO} tittle="CONTATO"/>
                    <FooterLink links={REDES_SOCIAIS} tittle="REDES SOCIAIS"/>
                </ul>
            </div>
        <div className=' text-center text-sm '>
            <span>© 2023 Victor Augusto. All rights reserved</span>

        </div>
        </footer>
    )
}