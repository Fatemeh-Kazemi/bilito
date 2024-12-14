import { useState, useRef } from "react";
import { useSendSms } from "../../hooks/RQ";

const Register = ({ logo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [verify, setVerify] = useState(false);
  const [inputs, setInputs] = useState(["", "", "", "", ""]);
  const inputRefs = useRef([]);
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 11) {
      setPhoneNumber(value);
      if (value.length === 11 && !value.startsWith("09")) {
        setError("شماره موبایل باید با 09 شروع شود.");
      } else {
        setError("");
      }
    }
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    if (/^\d*$/.test(value) && value.length <= 1) {
      newInputs[index] = value;
      setInputs(newInputs);
      if (value) {
        const nextInput = inputRefs.current[index + 1];
        if (nextInput) {
          nextInput.focus();
        }
      }
    }
  };

  const isButtonDisabled =
    !phoneNumber.startsWith("09") || !isChecked || phoneNumber.length < 11;

  const { mutate } = useSendSms({
    onSuccess: () => {
      setMsg("کد تائید با موفقیت ارسال شد");
    },
    onError: (error) => {
      setMsg(`خطایی در ارسال کد به وقوع پیوست ${error}`);
    },
  });

  const cliced = async () => {
    setVerify(true);
    mutate();
  };

  return (
    <div className="relative">
      <button
        onClick={toggleModal}
        type="button"
        className="text-white bg-blue-100 md:bg-primary rounded-lg text-sm px-4 py-2 flex gap-2"
      >
        <span className="hidden md:block">ورود/ ثبت نام</span>
        <span className="md:hidden">ورود/ ثبت نام</span>
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
              type="text"
              placeholder="شماره موبایل"
              className="border border-gray-300 rounded w-full p-2"
              value={phoneNumber}
              onChange={handlePhoneChange}
            />
            {error && <p className="text-red-500 text-right">{error}</p>}
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="accept-terms"
                className="m-2"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="accept-terms">
                با ورود و ثبت نام در سایت، با<a href="">قوانین بلیتو</a>موافقت
                می کنم.
              </label>
            </div>
            {verify ? (
              <>
                <p className="tetx-xl font-bold">کد تائید را وارد کنید</p>
                <div className="flex mb-4 gap-3" dir="ltr">
                  {inputs.map((input, index) => (
                    <input
                      key={index}
                      type="text"
                      className="border border-gray-300 rounded w-1/5 p-2"
                      value={input}
                      onChange={(e) => handleInputChange(index, e.target.value)}
                      maxLength={1}
                      ref={(el) => (inputRefs.current[index] = el)}
                    />
                  ))}
                </div>
              </>
            ) : null}
            <p className="text-right font-bold">{msg}</p>

            {verify ? (
              <button
                className={`bg-primary text-white px-4 py-2 rounded w-full `}
              >
                بررسی کد
              </button>
            ) : (
              <button
                onClick={cliced}
                className={`bg-primary text-white px-4 py-2 rounded w-full ${
                  isButtonDisabled ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={isButtonDisabled}
              >
                تائید و ادامه
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
