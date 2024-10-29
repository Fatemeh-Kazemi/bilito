import React, { useState } from "react";

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
        className="text-white bg-primary rounded-lg text-sm px-4 py-2 flex gap-2"
      >
        ورود/ ثبت نام
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center">
          <div className="flex flex-col justify-between relative bg-white rounded-lg shadow-lg w-11/12 md:w-[600px] md:h-[422px] p-6">
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2"
            >
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
              className={`bg-primary text-white px-4 py-2 rounded w-full ${isButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`} 
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