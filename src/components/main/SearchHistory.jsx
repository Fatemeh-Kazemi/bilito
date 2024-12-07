import React, { useState } from "react";
import { Virtual } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/virtual";

const SearchHistory = () => {
  const [buttons, setButtons] = useState([
    { id: 1, text: "مشهد به قم" },
    { id: 2, text: "تهران به شیراز" },
    { id: 3, text: "شیراز به تهران" },
    { id: 4, text: "شیراز به اصفهان" },
    { id: 5, text: "اصفهان به مشهد" },
    { id: 6, text: "گلستان به خراسان" },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextButton = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % buttons.length);
  };

  const prevButton = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + buttons.length) % buttons.length
    );
  };

  const removeButton = (id) => {
    setButtons(buttons.filter((button) => button.id !== id));
  };

  return (
    <>
      {buttons.length > 0 ? (
        <>
          <div className="flex justify-between text-xl">
            <p className="text-right">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.0001 22.7491C6.80008 22.7491 2.58008 18.5191 2.58008 13.3291C2.58008 11.4591 3.13008 9.64908 4.17008 8.08908C4.40008 7.74908 4.87008 7.64908 5.21008 7.87908C5.55008 8.10908 5.65008 8.57908 5.42008 8.91908C4.55008 10.2191 4.09008 11.7491 4.09008 13.3191C4.09008 17.6891 7.64008 21.2391 12.0101 21.2391C16.3801 21.2391 19.9301 17.6891 19.9301 13.3191C19.9301 8.94908 16.3701 5.39908 12.0001 5.39908C11.0801 5.39908 10.1801 5.52908 9.33008 5.78908C8.93008 5.90908 8.51008 5.68908 8.39008 5.28908C8.27008 4.88908 8.49008 4.46908 8.89008 4.34908C9.89008 4.04908 10.9301 3.88908 12.0001 3.88908C17.2001 3.88908 21.4201 8.11908 21.4201 13.3091C21.4201 18.4991 17.2001 22.7491 12.0001 22.7491Z"
                  fill="#404040"
                />
                <path
                  d="M7.87008 6.06908C7.70008 6.06908 7.52008 6.00908 7.38008 5.88908C7.06008 5.60908 7.03008 5.13908 7.30008 4.82908L10.1901 1.50908C10.4601 1.19908 10.9401 1.15908 11.2501 1.43908C11.5601 1.70908 11.5901 2.18908 11.3201 2.49908L8.43008 5.80908C8.28008 5.97908 8.07008 6.06908 7.87008 6.06908Z"
                  fill="#404040"
                />
                <path
                  d="M11.2401 8.52908C11.0901 8.52908 10.9301 8.47908 10.8001 8.38908L7.42008 5.91908C7.09008 5.67908 7.02008 5.20908 7.26008 4.87908C7.50008 4.53908 7.97008 4.46908 8.31008 4.70908L11.6801 7.16908C12.0101 7.40908 12.0901 7.87908 11.8401 8.21908C11.7001 8.42908 11.4701 8.52908 11.2401 8.52908Z"
                  fill="#404040"
                />
                <path
                  d="M14.4578 16.9991C14.3645 16.9991 14.2713 16.9762 14.1852 16.9151L11.9613 15.5029C11.409 15.1518 11.0001 14.3808 11.0001 13.7014V10.5716C11.0001 10.2586 11.244 9.99908 11.5381 9.99908C11.8322 9.99908 12.0761 10.2586 12.0761 10.5716V13.7014C12.0761 13.9762 12.2913 14.3808 12.5137 14.5182L14.7375 15.9304C14.9958 16.0907 15.0747 16.4418 14.9241 16.7166C14.8165 16.8998 14.6371 16.9991 14.4578 16.9991Z"
                  fill="#404040"
                />
              </svg>

              <span className="px-2">تاریخچه جستجو</span>
            </p>
            <p className="text-left text-primary">پاک کردن همه</p>
          </div>
          <div className="flex items-stretch justify-between gap-4 cursor-pointer">
            <button
              onClick={prevButton}
              className="hidden md:block p-2 border rounded-r"
            >
              &#9654;
            </button>
            <div className="w-[90%] flex justify-between px-2">
              <Swiper
                modules={[Virtual]}
                spaceBetween={5}
                slidesPerView={2} // Default for mobile
                breakpoints={{
                  640: {
                    slidesPerView: 6, // For desktop
                  },
                }}
                virtual
              >
                {buttons.map((button, index) => (
                  <SwiperSlide
                    key={button.id}
                    className={`p-2 border rounded ${
                      index === currentIndex
                        ? "bg-blue-500 text-white"
                        : "bg-white text-black"
                    }`}
                  >
                    <button
                      onClick={() => removeButton(button.id)}
                      className="px-2"
                    >
                      ✖
                    </button>
                    {button.text}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <button
              onClick={nextButton}
              className="hidden md:block p-2 border rounded-l"
            >
              &#9664;
            </button>
          </div>
        </>
      ) : null}
    </>
  );
};

export default SearchHistory;
