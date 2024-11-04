import { Virtual } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/virtual";

const Banners = () => {
  return (
    <>
    <style>{` .swiper-slide {justify-content: center;}`}</style>
    <div className="w-[100%] flex">
      <Swiper
            modules={[Virtual]}
            spaceBetween={20}
            slidesPerView={2} // Default for mobile
            breakpoints={{
              640: {
                slidesPerView: 3, // For desktop
              },
            }}
            virtual
          >
      <SwiperSlide className="relative">
        <img src={require("../../assets/images/1.png")} alt="" className="w-full h-auto rounded brightness-x50" />
        <div className="text-right absolute bottom-0 right-0 p-4">
          <p className="text-xl font-bold text-white mb-1">بهترین فصل شنا</p>
          <button className="border border-white text-white hover:bg-gray-1 hover:text-[#000] px-4 py-2 rounded">
            خرید بلیط پروازهای کیش
          </button>
        </div>
      </SwiperSlide>
      <SwiperSlide className="relative">
        <img src={require("../../assets/images/2.png")} alt="" className="w-full h-auto rounded brightness-50" />
        <div className="text-right absolute bottom-0 right-0 p-4">
          <p className="text-xl font-bold text-white mb-1">سفر به ترکیه</p>
          <button className="border border-white text-white hover:bg-gray-1 hover:text-[#000] px-4 py-2 rounded">
            خرید بلیط پروازهای ترکیه
          </button>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex flex-col justify-between">
        <div className="relative">
          <img src={require("../../assets/images/4.png")} alt="" className="w-full h-auto rounded brightness-50" />
          <div className="text-right absolute bottom-0 right-0 p-4">
            <p className="text-xl font-bold text-white mb-1">
              {" "}
              دنیایی از تاریخ و هنر
            </p>
            <button className="border border-white text-white hover:bg-gray-1 hover:text-[#000] px-4 py-2 rounded">
              خرید بلیط پروازهای شیراز
            </button>
          </div>
        </div>
        <div className="relative">
          <img src={require("../../assets/images/3.png")} alt="" className="w-full h-auto rounded brightness-50" />
          <div className="text-right absolute bottom-0 right-0 p-4">
            <p className="text-xl font-bold text-white mb-1"> شگفتی در صحرا</p>
            <button className="border border-white text-white hover:bg-gray-1 hover:text-[#000] px-4 py-2 rounded">
              خرید بلیط پروازهای دبی
            </button>
          </div>
        </div>
      </SwiperSlide>
      </Swiper>
    </div>
    </>
  );
};

export default Banners;
