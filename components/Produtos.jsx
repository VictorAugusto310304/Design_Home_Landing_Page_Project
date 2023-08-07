import Headline from './Headline'
import Card from './Card'
import Mesa from '../public/assets/Furniture1.jpg'
import Sofa from '../public/assets/Furniture2.jpg'
import Rack from '../public/assets/Furniture3.jpg'
import Poltrona from '../public/assets/Furniture4.jpg'

export default function Produtos(){
    return(
        <div>
            <section id='product' className=' max-w-[1640px] mx-auto p-4 py-12 '>
                <Headline title='Produtos'/>
            </section>
            <div className=' grid md:grid-cols-2 lg:grid-cols3 gap-6 px-20 py-12 '>
                <Card image={Mesa} title=' Mesas '/>
                <Card image={Sofa} title=' Sofás '/>
                <Card image={Rack} title=' Racks '/>
                <Card image={Poltrona} title=' Poltronas '/>
            </div>
        </div>
        
    )
}