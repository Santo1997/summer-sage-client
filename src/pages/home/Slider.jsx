import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

const Slider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co/drZ4QRC/fotor-2023-5-20-13-13-2.jpg')] w-full h-auto bg-center bg-cover bg-no-repeat">
            <div className="px-20 py-56 w-3/5 bg-gray-300">
              <h1 className="text-3xl">The First Slider</h1>
              <p className="mt-5  text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                inventore quis, eos quas consequuntur esse non ipsam corrupti et
                sunt magni cupiditate ea quo excepturi repudiandae adipisci
                repellat error eum aperiam voluptas delectus? Quam in iusto
                repellendus rerum, cum molestias officiis ratione optio odio
                perspiciatis. Voluptatibus, sapiente officiis ipsam ab accusamus
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co/drZ4QRC/fotor-2023-5-20-13-13-2.jpg')] w-full h-auto bg-center bg-cover bg-no-repeat">
            <div className="px-20 py-56 w-3/5 bg-gray-300">
              <h1 className="text-3xl">The First Slider</h1>
              <p className="mt-5  text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                inventore quis, eos quas consequuntur esse non ipsam corrupti et
                sunt magni cupiditate ea quo excepturi repudiandae adipisci
                repellat error eum aperiam voluptas delectus? Quam in iusto
                repellendus rerum, cum molestias officiis ratione optio odio
                perspiciatis. Voluptatibus, sapiente officiis ipsam ab accusamus
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co/drZ4QRC/fotor-2023-5-20-13-13-2.jpg')] w-full h-auto bg-center bg-cover bg-no-repeat">
            <div className="px-20 py-56 w-3/5 bg-gray-300">
              <h1 className="text-3xl">The First Slider</h1>
              <p className="mt-5  text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                inventore quis, eos quas consequuntur esse non ipsam corrupti et
                sunt magni cupiditate ea quo excepturi repudiandae adipisci
                repellat error eum aperiam voluptas delectus? Quam in iusto
                repellendus rerum, cum molestias officiis ratione optio odio
                perspiciatis. Voluptatibus, sapiente officiis ipsam ab accusamus
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co/drZ4QRC/fotor-2023-5-20-13-13-2.jpg')] w-full h-auto bg-center bg-cover bg-no-repeat">
            <div className="px-20 py-56 w-3/5 bg-gray-300">
              <h1 className="text-3xl">The First Slider</h1>
              <p className="mt-5  text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                inventore quis, eos quas consequuntur esse non ipsam corrupti et
                sunt magni cupiditate ea quo excepturi repudiandae adipisci
                repellat error eum aperiam voluptas delectus? Quam in iusto
                repellendus rerum, cum molestias officiis ratione optio odio
                perspiciatis. Voluptatibus, sapiente officiis ipsam ab accusamus
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
