import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import Button from './Button';
import Attic from '../public/assets/Attic.jpg'
import Bedroom from '../public/assets/Bedroom.jpg'
import Bathroom from '../public/assets/Bathroom.jpg'
import Diningroom from '../public/assets/Diningroom.jpg'

export default function CategorieSlider() {

  const categories = [
    {
      name: "Banheiro",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam labore nesciunt excepturi, blanditiis, placeat quibusdam at debitis ut omnis animi veritatis totam unde laudantium quo ab assumenda beatae quae molestias." ,
      image: Bathroom,
      btnText: "Explorar",
    },
    {
      name: "Sótão",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam labore nesciunt excepturi, blanditiis, placeat quibusdam at debitis ut omnis animi veritatis totam unde laudantium quo ab assumenda beatae quae molestias." ,
      image: Attic,
      btnText: "Explorar",
    },
    {
      name: "Quarto",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam labore nesciunt excepturi, blanditiis, placeat quibusdam at debitis ut omnis animi veritatis totam unde laudantium quo ab assumenda beatae quae molestias." ,
      image: Bedroom,
      btnText: "Explorar",
    },
    {
      name: "Sala de Jantar",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam labore nesciunt excepturi, blanditiis, placeat quibusdam at debitis ut omnis animi veritatis totam unde laudantium quo ab assumenda beatae quae molestias." ,
      image: Diningroom,
      btnText: "Explorar",
    },
  ]

  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      navigation={true}
      modules={[Navigation]}
      breakpoints={{
        700: {
          sliderPerView: 1,
        }
      }}
      className=' categorieSlider min-h-[660px] '
    >
      {categories.map((categorie, index) => {
        return(
          <>
            <SwiperSlide className=' bg-slate-300 shadow-lg min-h-[480px] rounded-md py-16 px-8 mt-10 ' key={index}>
              <div className=' flex flex-col gap-y-5 md:flex-row md:gap-x-16 '>
                <Image src={categorie.image} height={300} width={700}/>
                <div className=' flex flex-col gap-y-7 '>
                  <div className=' grid text-4xl font-medium flex gap-x-2 items-center font-bold '>
                    {categorie.name}
                    <div className=' h-[3px] w-[350px] bg-green-600 rounded '></div>
                    </div>
                    <div className=' text-[20px] text-gray-600 '>{categorie.description}</div>
                    <div>
                      <Button link="#" text={categorie.btnText}/>
                    </div>
                </div>
              </div>
            </SwiperSlide>
          </>
        )
      })}
    </Swiper>
  );
};