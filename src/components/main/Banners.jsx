import axios from "axios";
import { useState, useEffect } from "react";

import { Virtual } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/virtual";

const Banners = () => {
  const [banners, setBanners] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/banners");
        setBanners(response.data.results);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching data", error);
      }
    };

    fetchBanners();
  }, []);

  if (error) return <div>خطا در بارگذاری داده‌ها: {error}</div>;
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
          {banners.slice(0, 2).map((banner) => (
            <SwiperSlide className="relative">
              <img
                src={`http://localhost:3001/${banner.img}`}
                alt=""
                className="w-full h-auto rounded brightness-x50"
              />
              <div className="text-right absolute bottom-0 right-0 p-4">
                <p className="text-xl font-bold text-white mb-1">
                  {banner.title}
                </p>
                <button className="border border-white text-white hover:bg-gray-1 hover:text-[#000] px-4 py-2 rounded">
                  {banner.btnText}
                </button>
              </div>
            </SwiperSlide>
          ))}
          <SwiperSlide className="flex flex-col !justify-between">
            {banners.slice(2, 4).map((banner) => (
              <div className="flex flex-col relative">
                <img
                  src={`http://localhost:3001/${banner.img}`}
                  alt=""
                  className="w-full h-auto rounded brightness-x50"
                />
                <div className="text-right absolute bottom-0 right-0 p-4">
                  <p className="text-xl font-bold text-white mb-1">
                    {banner.title}
                  </p>
                  <button className="border border-white text-white hover:bg-gray-1 hover:text-[#000] px-4 py-2 rounded">
                    {banner.btnText}
                  </button>
                </div>
              </div>
            ))}
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Banners;
