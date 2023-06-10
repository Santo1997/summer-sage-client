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
          delay: 6000,
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
          <div className="bg-[url('https://i.ibb.co/7WBVCpk/happy-high-school-students-raising-their-hands-on-a-class.jpg')] w-full h-auto bg-center bg-cover bg-no-repeat">
            <div className=" bg-[rgba(0,0,0,0.7)]">
              <div className="px-20 py-56 w-6/12 text-white">
                <h1 className="text-32xl">Welcome to</h1>
                <h1 className="text-4xl font-bold">Summer Cump</h1>
                <p className="mt-5  text-base">
                  Explore diverse languages, connect with cultures, and embark
                  on a linguistic journey like no other. Learn, engage, and
                  celebrate the power of language with our vibrant community.
                  Join us today!
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co/drZ4QRC/fotor-2023-5-20-13-13-2.jpg')] w-full h-auto bg-center bg-cover bg-no-repeat">
            <div className="bg-[rgba(0,0,0,0.7)]">
              <div className="px-20 py-56 w-6/12 text-white">
                <h1 className="text-4xl font-bold">
                  Achieve The Best Results With Us
                </h1>
                <p className="mt-5  text-base">
                  With over few years of experience, We are internationally
                  recognized as an leader in effective and optimal language
                  training for beginners.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
