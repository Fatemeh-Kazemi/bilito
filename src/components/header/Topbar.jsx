import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import logo from "../../assets/images/LOGO.svg";

import Register from "./Register";
import { Link } from "react-router-dom";

const Topbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const {
    isPending,
    error,
    data: headerMenu,
  } = useQuery({
    queryKey: ["headerMenu"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:3001/api/headerMenu");
      return response.data.results;
    },
  });

  if (isPending) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <header>
        <div className="hidden md:block">
          <nav className="sticky bg-white w-full z-20 top-0 start-0">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <img src={logo} className="w-full*" alt="Bilito Logo" />
              <div
                className="items-center justify-between hidden w-full md:flex md:w-auto"
                id="navbar-sticky"
              >
                <ul className="flex items-center flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 gap-6 md:flex-row md:mt-0 md:border-0 md:bg-white">
                  {headerMenu.map((item) =>
                    item.children.length < 1 ? (
                      <li>
                        <Link
                          to={item.to}
                          className="block py-2 px-3 rounded md:bg-transparent md:p-0 md:hover:text-primary"
                          aria-current="page"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ) : (
                      <li>
                        <div className="relative">
                          <ul className="list-none">
                            <li
                              className="cursor-pointer"
                              onMouseEnter={() => setIsOpen(true)}
                              onMouseLeave={() => setIsOpen(false)}
                            >
                              <a href="" className="md:hover:text-primary">
                                {item.title}
                              </a>
                              <svg
                                className="inline w-5 h-5 transform transition-transform duration-200"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 15l-3-3h6l-3 3z"
                                />
                              </svg>
                              {isOpen && (
                                <ul className="absolute right-0 w-48 bg-white shadow-lg">
                                  {item.children.map((inItem) => (
                                    <li className="p-2 hover:bg-blue-100">
                                      <a href={inItem.link}>{inItem.title}</a>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          </ul>
                        </div>
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div className="flex items-center gap-2 ">
                <span>پشتیبانی </span>
                <span>
                  <a href="">4045_021</a>
                </span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.45 22.75C16.32 22.75 15.13 22.48 13.9 21.96C12.7 21.45 11.49 20.75 10.31 19.9C9.14 19.04 8.01 18.08 6.94 17.03C5.88 15.96 4.92 14.83 4.07 13.67C3.21 12.47 2.52 11.27 2.03 10.11C1.51 8.87 1.25 7.67 1.25 6.54C1.25 5.76 1.39 5.02 1.66 4.33C1.94 3.62 2.39 2.96 3 2.39C3.77 1.63 4.65 1.25 5.59 1.25C5.98 1.25 6.38 1.34 6.72 1.5C7.11 1.68 7.44 1.95 7.68 2.31L10 5.58C10.21 5.87 10.37 6.15 10.48 6.43C10.61 6.73 10.68 7.03 10.68 7.32C10.68 7.7 10.57 8.07 10.36 8.42C10.21 8.69 9.98 8.98 9.69 9.27L9.01 9.98C9.02 10.01 9.03 10.03 9.04 10.05C9.16 10.26 9.4 10.62 9.86 11.16C10.35 11.72 10.81 12.23 11.27 12.7C11.86 13.28 12.35 13.74 12.81 14.12C13.38 14.6 13.75 14.84 13.97 14.95L13.95 15L14.68 14.28C14.99 13.97 15.29 13.74 15.58 13.59C16.13 13.25 16.83 13.19 17.53 13.48C17.79 13.59 18.07 13.74 18.37 13.95L21.69 16.31C22.06 16.56 22.33 16.88 22.49 17.26C22.64 17.64 22.71 17.99 22.71 18.34C22.71 18.82 22.6 19.3 22.39 19.75C22.18 20.2 21.92 20.59 21.59 20.95C21.02 21.58 20.4 22.03 19.68 22.32C18.99 22.6 18.24 22.75 17.45 22.75ZM5.59 2.75C5.04 2.75 4.53 2.99 4.04 3.47C3.58 3.9 3.26 4.37 3.06 4.88C2.85 5.4 2.75 5.95 2.75 6.54C2.75 7.47 2.97 8.48 3.41 9.52C3.86 10.58 4.49 11.68 5.29 12.78C6.09 13.88 7 14.95 8 15.96C9 16.95 10.08 17.87 11.19 18.68C12.27 19.47 13.38 20.11 14.48 20.57C16.19 21.3 17.79 21.47 19.11 20.92C19.62 20.71 20.07 20.39 20.48 19.93C20.71 19.68 20.89 19.41 21.04 19.09C21.16 18.84 21.22 18.58 21.22 18.32C21.22 18.16 21.19 18 21.11 17.82C21.08 17.76 21.02 17.65 20.83 17.52L17.51 15.16C17.31 15.02 17.13 14.92 16.96 14.85C16.74 14.76 16.65 14.67 16.31 14.88C16.11 14.98 15.93 15.13 15.73 15.33L14.97 16.08C14.58 16.46 13.98 16.55 13.52 16.38L13.25 16.26C12.84 16.04 12.36 15.7 11.83 15.25C11.35 14.84 10.83 14.36 10.2 13.74C9.71 13.24 9.22 12.71 8.71 12.12C8.24 11.57 7.9 11.1 7.69 10.71L7.57 10.41C7.51 10.18 7.49 10.05 7.49 9.91C7.49 9.55 7.62 9.23 7.87 8.98L8.62 8.2C8.82 8 8.97 7.81 9.07 7.64C9.15 7.51 9.18 7.4 9.18 7.3C9.18 7.22 9.15 7.1 9.1 6.98C9.03 6.82 8.92 6.64 8.78 6.45L6.46 3.17C6.36 3.03 6.24 2.93 6.09 2.86C5.93 2.79 5.76 2.75 5.59 2.75ZM13.95 15.01L13.79 15.69L14.06 14.99C14.01 14.98 13.97 14.99 13.95 15.01Z"
                    fill="#606060"
                  />
                </svg>

                <Register logo={logo} />

                <button
                  data-collapse-toggle="navbar-sticky"
                  type="button"
                  className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                  aria-controls="navbar-sticky"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main headerMenu</span>
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 1h15M1 7h15M1 13h15"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </nav>
        </div>
        <div className="md:hidden">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 7.75H3C2.59 7.75 2.25 7.41 2.25 7C2.25 6.59 2.59 6.25 3 6.25H21C21.41 6.25 21.75 6.59 21.75 7C21.75 7.41 21.41 7.75 21 7.75Z"
                fill="#404040"
              />
              <path
                d="M21 12.75H3C2.59 12.75 2.25 12.41 2.25 12C2.25 11.59 2.59 11.25 3 11.25H21C21.41 11.25 21.75 11.59 21.75 12C21.75 12.41 21.41 12.75 21 12.75Z"
                fill="#404040"
              />
              <path
                d="M21 17.75H3C2.59 17.75 2.25 17.41 2.25 17C2.25 16.59 2.59 16.25 3 16.25H21C21.41 16.25 21.75 16.59 21.75 17C21.75 17.41 21.41 17.75 21 17.75Z"
                fill="#404040"
              />
            </svg>

            <img src={logo} className="w-full*" alt="Bilito Logo" />
            <Register logo={logo} />
          </div>
        </div>
        <div className="text-right w-100">
          <p className="text-white md:text-3xl font-bold md:tracking-wider md:leading-[4rem] absolute top-36 right-12 md:top-32 md:right-24">
            راحتی و سرعت در
            <br />
            رزرو بلیط هواپیما با بیلتو
          </p>
          <img src={require("../../assets/images/mainBanner.png")} className="w-full" alt="" />
        </div>
      </header>
    </>
  );
};

export default Topbar;
