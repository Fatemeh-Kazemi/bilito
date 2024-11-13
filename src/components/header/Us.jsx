import React, { useState } from "react";

const Us = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="container mx-auto p-4">
      <div className="flex mb-4">
        <button
          className={`border-b-2 border-gray-4 p-2 font-bold ${
            activeTab === "about"
              ? "text-blue-700 border-blue-500"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("about")}
        >
          درباره ما
        </button>
        <button
          className={`border-b-2 border-gray-4 p-2 font-bold ${
            activeTab === "contact"
              ? "text-blue-700 border-blue-500"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("contact")}
        >
          تماس با ما
        </button>
      </div>

      {activeTab === "about" && (
        <div className="flex flex-col gap-2 text-right">
          <p>
            ما در بیلیتو مفتخریم که یکی از پیشروان در صنعت هواپیمایی هستیم و
            خدماتی بی‌نظیر را به مسافران عزیز ارائه می‌دهیم. با تیمی از
            کارشناسان حرفه‌ای در زمینه‌ی هواپیمایی، ما بهترین شرایط و تجربه را
            برای سفرهای شما فراهم می‌کنیم
          </p>
          <p className="text-2xl font-bold">اهداف ما</p>
          <p>
            هدف اصلی ما در بیلیتو، ارائه‌ی خدماتی با کیفیت و استاندارد در سطح
            بین‌المللی است. با تمرکز بر رضایت مشتریان، ما سعی می‌کنیم تجربه‌ی
            سفر شما را به یک تجربه‌ی لاکچری و ناشناخته تبدیل کنیم. از لحظه‌ی
            رزرو تا رسیدن به مقصد، ما همراه شما خواهیم بود و اطمینان می‌دهیم که
            هر جزئیات سفر شما به بهترین شکل ممکن انجام شود.
          </p>
          <p>
            خدمات ما شامل طراحی وب، توسعه نرم‌افزار و مشاوره فناوری اطلاعات است.
          </p>
          <p>
            ما در بیلیتو مفتخریم که یکی از پیشروان در صنعت هواپیمایی هستیم و
            خدماتی بی‌نظیر را به مسافران عزیز ارائه می‌دهیم. با تیمی از
            کارشناسان حرفه‌ای در زمینه‌ی هواپیمایی، ما بهترین شرایط و تجربه را
            برای سفرهای شما فراهم می‌کنیم
          </p>
          <p className="text-2xl font-bold">خدمات ما</p>
          <p>
            در بیلیتو، ما مجموعه‌ای از خدمات شگفت‌انگیز را برای شما آماده
            کرده‌ایم. از رزرو آنلاین سریع و آسان، تا پروازهای راحت و امکانات
            لوکس در هواپیما، همه‌ی جزئیات سفر شما تحت نظر ماست. همچنین، با تیم
            پشتیبانی ما در دسترس شما هستیم تا در صورت بروز هرگونه مشکل یا سوال،
            به شما کمک کنیم.
          </p>
          <p>
            {" "}
            خدمات ما شامل طراحی وب، توسعه نرم‌افزار و مشاوره فناوری اطلاعات است.
          </p>
          <p>
            با تشکر از انتخاب شما برای سفر با بیلیتو. ما در انتظار خدمت‌رسانی به
            شما هستیم و امیدواریم که تجربه‌ی سفری فوق‌العاده را برای شما فراهم
            کنیم
          </p>
        </div>
      )}

      {activeTab === "contact" && (
        <div className="container mx-auto text-right flex flex-col gap-8">
          <p>
            ما در مجموعه بیلیتو همواره به نظرات، پیشنهادات و سوالات شما عزیزان
            ارزش قائلیم و مشتاقانه منتظر کمک به شما هستیم.
          </p>
          <div className="flex flex-col md:flex-row p-4 border rounded-md">
            <div className="w-100 md:w-3/4 flex flex-col justify-between items-start gap-4">
              <p className="text-2xl font-bold border-b-2 text-gray-500">
                اطلاعات تماس
              </p>
              <p>
                آدرس: تهران، میدان آزادی، خیابان آزادی، خیابان جیحون، طوس غربی.{" "}
              </p>
              <p>شماره تماس: 32 54 7691 -021</p>
              <p>ایمیل: shiva.arghvni1996@gmail.com</p>
            </div>
            <div className="w-100 md:w-1/4 border-2 rounded-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509123!2d51.39913431531857!3d35.68919728019257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f7e4e4c4c4c4c4c%3A0x4c4c4c4c4c4c4c4c!2sTehran%2C%20Azadi%20Square%2C%20Azadi%20Street%2C%20Jahoon%20Street%2C%20Tos%20Gharbi!5e0!3m2!1sen!2s!4v1631234567890!5m2!1sen!2s"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <p>
            درصورتی که سوالی دارید یا نیاز به راهنمایی دارید، لطفا از فرم زیر
            برای تماس با ما استفاده کنید. تیم پشتیبانی ما در اسرع وقت پاسخگوی
            شما خواهد بود.{" "}
          </p>
          <div className="p-4 border rounded-md">
            <span className="text-2xl font-bold border-b-2 text-gray-500">
              فرم تماس با ما
            </span>
            <form className="flex flex-col md:flex-row justify-between md:gap-36 mt-8">
              <div className="w-100 md:w-1/2 flex flex-col md:gap-4">
                <input
                  type="text"
                  placeholder="نام"
                  className="rounded-md border p-2 mb-2"
                />
                <input
                  type="email"
                  placeholder="ایمیل"
                  className="rounded-md border p-2 mb-2"
                />
                <select className="rounded-md border p-2 mb-2">
                  <option>موضوع</option>
                  <option>سوال</option>
                  <option>پیشنهاد</option>
                </select>
              </div>
              <div className="w-100 md:w-1/2 flex flex-col md:gap-4">
                <textarea
                  rows={8}
                  placeholder="پیام شما"
                  className="rounded-md border p-2 mb-2 w-full"
                />
                <button
                  type="submit"
                  className="rounded-md bg-blue-500 text-white p-2"
                >
                  ارسال
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Us;
