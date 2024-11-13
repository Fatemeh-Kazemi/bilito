import { useState } from "react";

const Register = ({ logo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const isButtonDisabled = phoneNumber === "" || !isChecked;

  return (
    <div className="relative">
      <button
        onClick={toggleModal}
        type="button"
        className="text-white bg-blue-100 md:bg-primary rounded-lg text-sm px-4 py-2 flex gap-2"
      >
        <span className="hidden md:block">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.99984 8.5C5.8865 8.5 4.1665 6.78 4.1665 4.66667C4.1665 2.55334 5.8865 0.833336 7.99984 0.833336C10.1132 0.833336 11.8332 2.55334 11.8332 4.66667C11.8332 6.78 10.1132 8.5 7.99984 8.5ZM7.99984 1.83334C6.43984 1.83334 5.1665 3.10667 5.1665 4.66667C5.1665 6.22667 6.43984 7.5 7.99984 7.5C9.55984 7.5 10.8332 6.22667 10.8332 4.66667C10.8332 3.10667 9.55984 1.83334 7.99984 1.83334Z"
              fill="white"
            />
            <path
              d="M13.7268 15.1667C13.4534 15.1667 13.2268 14.94 13.2268 14.6667C13.2268 12.3667 10.8801 10.5 8.0001 10.5C5.1201 10.5 2.77344 12.3667 2.77344 14.6667C2.77344 14.94 2.54677 15.1667 2.27344 15.1667C2.0001 15.1667 1.77344 14.94 1.77344 14.6667C1.77344 11.82 4.56677 9.5 8.0001 9.5C11.4334 9.5 14.2268 11.82 14.2268 14.6667C14.2268 14.94 14.0001 15.1667 13.7268 15.1667Z"
              fill="white"
            />
          </svg>
          ورود/ ثبت نام
        </span>
        <span className="md:hidden">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.00008 8.49999C5.88675 8.49999 4.16675 6.77999 4.16675 4.66666C4.16675 2.55333 5.88675 0.833328 8.00008 0.833328C10.1134 0.833328 11.8334 2.55333 11.8334 4.66666C11.8334 6.77999 10.1134 8.49999 8.00008 8.49999ZM8.00008 1.83333C6.44008 1.83333 5.16675 3.10666 5.16675 4.66666C5.16675 6.22666 6.44008 7.49999 8.00008 7.49999C9.56008 7.49999 10.8334 6.22666 10.8334 4.66666C10.8334 3.10666 9.56008 1.83333 8.00008 1.83333Z"
              fill="#353535"
            />
            <path
              d="M13.7268 15.1667C13.4534 15.1667 13.2268 14.94 13.2268 14.6667C13.2268 12.3667 10.8801 10.5 8.0001 10.5C5.1201 10.5 2.77344 12.3667 2.77344 14.6667C2.77344 14.94 2.54677 15.1667 2.27344 15.1667C2.0001 15.1667 1.77344 14.94 1.77344 14.6667C1.77344 11.82 4.56677 9.5 8.0001 9.5C11.4334 9.5 14.2268 11.82 14.2268 14.6667C14.2268 14.94 14.0001 15.1667 13.7268 15.1667Z"
              fill="#353535"
            />
          </svg>
        </span>
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center">
          <div className="flex flex-col justify-between relative bg-white rounded-lg shadow-lg w-11/12 md:w-[600px] md:h-[422px] p-6">
            <button onClick={toggleModal} className="absolute top-2 right-2">
              ✖
            </button>
            <img src={logo} alt="لوگو" className="mx-auto" />
            <h2 className="text-center text-xl font-semibold">
              ورود یا ثبت نام
            </h2>
            <p className="text-right">
              کد تائید به شماره موبایلی که وارد می کنید، ارسال خواهد شد.
            </p>
            <input
              type="number"
              placeholder="شماره موبایل"
              className="border border-gray-300 rounded w-full p-2 mb-4"
              value={phoneNumber}
              onChange={handlePhoneChange}
            />
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="accept-terms"
                className="m-2"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="accept-terms">
                با ورود و ثبت نام در سایت، با
                <a href="">قوانین بلیتو</a>
                موافقت می کنم.
              </label>
            </div>
            <button
              className={`bg-primary text-white px-4 py-2 rounded w-full ${
                isButtonDisabled ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isButtonDisabled}
            >
              تائید و ادامه
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
