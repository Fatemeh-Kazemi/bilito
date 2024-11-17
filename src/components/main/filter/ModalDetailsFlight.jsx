import { useState } from "react";

const ModalDetailsFlight = ({ selectedFlight, closeModal }) => {
  const [activeTab, setActiveTab] = useState("info");

  return (
    <div className="modal-overlay fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center">
      <div className="modal-content flex flex-col relative bg-white rounded-lg shadow-lg w-11/12 md:w-[600px] md:h-[422px] p-6">
        <button onClick={closeModal} className="absolute top-2 right-2">
          ✖
        </button>
        <div className="flex mb-4">
          <button
            className={`border-b-2 border-gray-4 p-2 font-bold ${
              activeTab === "info"
                ? "text-blue-700 border-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("info")}
          >
            جزئیات بلیط
          </button>
          <button
            className={`border-b-2 border-gray-4 p-2 font-bold ${
              activeTab === "rules"
                ? "text-blue-700 border-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("rules")}
          >
            قوانین استرداد بلیط
          </button>
        </div>

        {activeTab === "info" && (
          <div className="flex flex-col gap-2 text-right">
            <h2>جزئیات پرواز</h2>
            <p>از: {selectedFlight.from}</p>
            <p>به: {selectedFlight.to}</p>
            <p>تاریخ: {selectedFlight.date}</p>
            <p>
              زمان پرواز: {selectedFlight.fromTime} تا {selectedFlight.toTime}
            </p>
            <p>شرکت هواپیمایی: {selectedFlight.airline.name}</p>
            <p>قیمت: {selectedFlight.price} تومان</p>
            {/* اطلاعات اضافی */}
          </div>
        )}

        {activeTab === "rules" && (
          <div className="container mx-auto text-right flex flex-col gap-8">
            <p>
              اگر از ساعت ۱۲ ظهر روز قبل از پرواز به بعد باشد، میزان جریمه ۴۰
              درصد از بهای بلیط خواهد بود. استرداد بلیط در کلاس نرخی Q: در این
              گروه، از زمان صدور تا پیش از ساعت ۱۲ ظهر روز قبل از پرواز، ۳۰ درصد
              از قیمت بلیط به‌عنوان جریمه کسر می‌شود. از ساعت ۱۲ ظهر روز قبل از
              پرواز به بعد هم ۶۰ درصد از هزینه کسر خواهد شد.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalDetailsFlight;
