import banner1 from "../../assets/images/1.png";
import banner2 from "../../assets/images/2.png";
import banner3 from "../../assets/images/3.png";
import banner4 from "../../assets/images/4.png";

const Banners = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="relative">
        <img src={banner1} alt="" className="w-full h-auto rounded brightness-x50" />
        <div className="text-right absolute bottom-0 right-0 p-4">
          <p className="text-xl font-bold text-white mb-1">بهترین فصل شنا</p>
          <button className="border border-white text-white hover:bg-gray-1 hover:text-[#000] px-4 py-2 rounded">
            خرید بلیط پروازهای کیش
          </button>
        </div>
      </div>
      <div className="relative">
        <img src={banner2} alt="" className="w-full h-auto rounded brightness-50" />
        <div className="text-right absolute bottom-0 right-0 p-4">
          <p className="text-xl font-bold text-white mb-1">سفر به ترکیه</p>
          <button className="border border-white text-white hover:bg-gray-1 hover:text-[#000] px-4 py-2 rounded">
            خرید بلیط پروازهای ترکیه
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <div className="relative">
          <img src={banner4} alt="" className="w-full h-auto rounded brightness-50" />
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
          <img src={banner3} alt="" className="w-full h-auto rounded brightness-50" />
          <div className="text-right absolute bottom-0 right-0 p-4">
            <p className="text-xl font-bold text-white mb-1"> شگفتی در صحرا</p>
            <button className="border border-white text-white hover:bg-gray-1 hover:text-[#000] px-4 py-2 rounded">
              خرید بلیط پروازهای دبی
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banners;
