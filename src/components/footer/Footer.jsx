import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import Logo from "../../assets/images/LOGO.svg";

const Footer = () => {
  const { isLoading: isPendingMenu, error: errorMenu, data: headerMenu } = useQuery({
    queryKey: ["footerMenu"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:3001/api/footerMenu");
      return response.data.results;
    },
  });

  const { isLoading: isPendingSocial, error: errorSocial, data: socialLinks } = useQuery({
    queryKey: ["socialLinks"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:3001/api/socialLinks");
      return response.data.results;
    },
  });

  const { isLoading: isPendingTrust, error: errorTrust, data: trustLinks } = useQuery({
    queryKey: ["trustLinks"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:3001/api/trustLinks");
      return response.data.results;
    },
  });

  // Handle loading and error states
  if (isPendingMenu || isPendingSocial || isPendingTrust) return "Loading...";
  if (errorMenu) return "An error has occurred: " + errorMenu.message;
  if (errorSocial) return "An error has occurred: " + errorSocial.message;
  if (errorTrust) return "An error has occurred: " + errorTrust.message;

  function goToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      <div className="container mx-auto p-5 flex flex-col gap-4">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 text-right">
          <div className="hidden md:block md:col-span-4 md:order-1">
            {" "}
            <h2 className="text-lg font-bold leading-10">اپلیکیشن بیلیتو</h2>
            <p className="text-md">
              با نصب اپلیکیشن بیلیتو راحتی و سرعت در رزرو بلیط هواپیما را داشته
              باشید
            </p>
          </div>

          <div className="col-span-1 md:col-span-4 md:order-3">
            <img
              src={Logo}
              alt="Website Logo"
              className="h-8 hidden md:block"
            />
            <p className="text-md leading-10">تلفن پشتیبانی: 98 76 54 32_021</p>
            <p className="text-md">
              آدرس دفتر مرکزی: تهران، میدان آزادی، خیابان آزادی، خیابان جیحون،
              طوس غربی.
            </p>
          </div>

          <div className="col-span-1 md:hidden">
            <img src={Logo} alt="Website Logo" className="h-8" />
          </div>

          <div className="col-span-1 md:col-span-2 md:order-4">
            <h3 className="text-lg font-bold">لینک های مفید</h3>
            <ul className="list-none space-y-2">
              {headerMenu.map((item,index) => (
                <li key={index} className="hover:text-primary">
                  <a href={item.link}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2 md:order-2 flex flex-col md:flex-row gap-2">
            {" "}
            <img
              src={require("../../assets/images/playstore.png")}
              alt="Play Store"
              className="w-[182px] h-[66px] w-full*"
            />
            <img
              src={require("../../assets/images/appstore.png")}
              alt="App Store"
              className="w-[182px] h-[66px] w-full*"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-2 mt-4">
          <div className="md:order-2 flex justify-center md:justify-end items-center gap-4">
            {trustLinks.map((eachItem) => (
              <img
                src={`http://localhost:3001/${eachItem.img}`}
                alt={eachItem.alt}
                className="bg-white shadow-md w-full*"
              />
            ))}
          </div>
          <div className="md:order-1 flex items-center flex-col text-right pr-10 gap-2">
            <ul className="flex list-none gap-4">
              {socialLinks.map((eachItem) => (
                <li>
                  <a href="#">
                    <img
                      src={`http://localhost:3001/${eachItem.img}`}
                      className="w-full"
                      alt={eachItem.alt}
                    />
                  </a>
                </li>
              ))}
            </ul>
            <a href="" className="text-primary font-bold">
              kazemifk484@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className="w-100 text-center py-8 border-t-2">
        <p onClick={goToTop}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
              fill="#353535"
            />
            <path
              d="M15.5302 14.0099C15.3402 14.0099 15.1502 13.9399 15.0002 13.7899L12.0002 10.7899L9.00016 13.7899C8.71016 14.0799 8.23016 14.0799 7.94016 13.7899C7.65016 13.4999 7.65016 13.0199 7.94016 12.7299L11.4702 9.19992C11.7602 8.90992 12.2402 8.90992 12.5302 9.19992L16.0602 12.7299C16.3502 13.0199 16.3502 13.4999 16.0602 13.7899C15.9102 13.9399 15.7202 14.0099 15.5302 14.0099Z"
              fill="#353535"
            />
          </svg>
          <span className="block text-center">بازگشت به بالا</span>
        </p>
      </div>
    </>
  );
};

export default Footer;
