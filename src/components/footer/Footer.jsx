import frame1 from "../../assets/images/frame1.svg";
import frame2 from "../../assets/images/frame2.svg";
import frame3 from "../../assets/images/frame3.svg";
import frame4 from "../../assets/images/frame4.svg";

import playStore from "../../assets/images/playstore.png"
import appStore from "../../assets/images/appstore.png"

import Logo from "../../assets/images/LOGO.svg"

import link1 from "../../assets/images/link1.png"
import link2 from "../../assets/images/link1.png"
import link3 from "../../assets/images/link1.png"
import link4 from "../../assets/images/link1.png"
import link5 from "../../assets/images/link1.png"

const Footer = () => {
  return (
    <>
      <div className="bg-blue-100 flex justify-around p-4">
        <div className="flex flex-col items-center">
          <div className="size-[80px] p-2 flex justify-center items-center bg-white border border-primary rounded-3xl">
            <img src={frame1} className="w-full" alt="" />
          </div>
          <p className="font-bold mt-4">دسترسی آسان و راحت</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="size-[80px] p-2 flex justify-center items-center bg-white border border-primary rounded-3xl">
            <img src={frame2} className="w-full" alt="" />
          </div>
          <p className="font-bold mt-4">پاسخگویی 24 ساعته</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="size-[80px] p-2 flex justify-center items-center bg-white border border-primary rounded-3xl">
            <img src={frame3} className="w-full" alt="" />
          </div>
          <p className="font-bold mt-4">خدمات آنلاین</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="size-[80px] p-2 flex justify-center items-center bg-white border border-primary rounded-3xl">
            <img src={frame4} className="w-full" alt="" />
          </div>
          <p className="font-bold mt-4">کمترین نرخ خرید بلیط</p>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-right">
          <div className="flex flex-col">
            <h2 className="text-lg font-bold">اپلیکیشن بیلیتو</h2>
            <p className="text-sm">با نصب اپلیکیشن بیلیتو راحتی و سرعت در رزرو بلیط هواپیما را داشته باشید</p>
          </div>
          <div className="flex justify-around items-center">
            <img src={appStore} alt="App Store" className="w-full*" />
            <img src={playStore} alt="Play Store" className="w-full*" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4  text-right">
          <div className="flex flex-col">
            <img src={Logo} alt="Website Logo" className="h-8" />
            <p className="text-sm">تلفن پشتیبانی: 021_32 54 76 98</p>
            <p className="text-sm">آدرس دفتر مرکزی: تهران، میدان آزادی، خیابان آزادی، خیابان جیحون، طوس غربی.</p>
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg font-bold">لینک های مفید</h3>
            <ul className="list-disc list-inside">
              <li>
                <a href="#" >
                  درباره ما
                </a>
              </li>
              <li>
                <a href="#" >
                  تماس با ما
                </a>
              </li>
              <li>
                <a href="#" >
                  استرداد بلیط
                </a>
              </li>
              <li>
                <a href="#" >
                  راهنمای خرید بلیط
                </a>
              </li>
              <li>
                <a href="#" >
                  قوانین و مقررات
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="flex flex-col">
            <h3 className="text-lg font-bold">شبکه های اجتماعی</h3>
            <ul className="flex list-disc list-inside">
              <li>
                <a href="#" >
                   / 1
                </a>
              </li>
              <li>
                <a href="#" >
                   / 2
                </a>
              </li>
              <li>
                <a href="#" >
                   / 3
                </a>
              </li>
              <li>
                <a href="#" >
                   / 4
                </a>
              </li>
              <li>
                <a href="#" >
                   / 5
                </a>
              </li>
            </ul>
          </div>
          <div className="flex justify-around items-center">
            <img src={link1} alt="اینماد" className="h-8" />
            <img src={link2} alt="اینماد" className="h-8" />
            <img src={link3} alt="اینماد" className="h-8" />
            <img src={link4} alt="اینماد" className="h-8" />
            <img src={link5} alt="اینماد" className="h-8" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
