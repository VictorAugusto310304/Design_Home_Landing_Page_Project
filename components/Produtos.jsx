import Headline from './Headline'
import Card from './Card'

export default function Produtos(){
    return(
        <div>
            <section id='product' className=' max-w-[1640px] mx-auto p-4 py-12 '>
                <Headline title='Produtos'/>
            </section>
            <div className=' grid md:grid-cols-2 lg:grid-cols3 gap-6 px-20 py-12 '>
                <Card image=' /assets/Furniture1.jpg ' title=' Mesas '/>
                <Card image=' /assets/Furniture2.jpg ' title=' Sofás '/>
                <Card image=' /assets/Furniture3.jpg ' title=' Racks '/>
                <Card image=' /assets/Furniture4.jpg ' title=' Poltronas '/>
            </div>
        </div>
        
    )
}