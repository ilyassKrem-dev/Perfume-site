import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
export default function HomeSlider() {
  const numOfPerfumes = 7;
  const indexes = Array.from({ length: numOfPerfumes }, (_, index) => index);
  return (
    <Swiper
    slidesPerView={1}
    spaceBetween={30}
    loop={true}
    pagination={{
    clickable: true,
    }}
    navigation={true}
    modules={[Pagination, Navigation]}
    className="h-[300px] w-[300px] max-[300px]:w-[200px] max-[300px]:h-[200px] sm:h-[400px] sm:w-[350px]">  
        {indexes.map((index) => {
            return (
                <SwiperSlide key={index}>
                    <div className="w-full h-full relative">
                        <Image 
                        src={`/perfume/perfume${index+1}.png`} 
                        alt={`perfume${index+1}`} fill
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 1200px"
                        className=" object-cover rounded-lg"
                       />

                    </div>
                </SwiperSlide>
            )
        })}
    </Swiper>
  );
}
