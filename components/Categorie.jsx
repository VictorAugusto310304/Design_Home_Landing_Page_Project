import Headline from './Headline'
import CategorieSlider from './CategorieSlider'

export default function Categorie(){

    return(
        <section id='categorie' className=' bg-slate-200 min-h-[680px] py-16 '>
            <div className=' container mx-auto h-[1300px] md:h-[790px] lg:h-[650px] '>
                <Headline title='Categorias'/>
                <CategorieSlider/>
            </div>
        </section>
    )
}