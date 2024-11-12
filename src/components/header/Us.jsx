import React, { useState } from 'react';

const Us = () => {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="container mx-auto p-4">
      <div className="flex">
        <button 
          className={`p-2 font-bold ${activeTab === 'about' ? 'text-blue-700' : 'text-gray-500'}`} 
          onClick={() => setActiveTab('about')}
        >
          درباره ما
        </button>
        <button 
          className={`p-2 font-bold ${activeTab === 'contact' ? 'text-blue-700' : 'text-gray-500'}`} 
          onClick={() => setActiveTab('contact')}
        >
          تماس با ما
        </button>
      </div>

      {activeTab === 'about' && (
        <div className="mt-4">
            <p>ما در بیلیتو مفتخریم که یکی از پیشروان در صنعت هواپیمایی هستیم و خدماتی بی‌نظیر را به مسافران عزیز ارائه می‌دهیم. با تیمی از کارشناسان حرفه‌ای در زمینه‌ی هواپیمایی، ما بهترین شرایط و تجربه را برای سفرهای شما فراهم می‌کنیم</p>

          <h2 className="text-xl font-bold">اهداف ما</h2>
          <p>هدف اصلی ما در بیلیتو، ارائه‌ی خدماتی با کیفیت و استاندارد در سطح بین‌المللی است. با تمرکز بر رضایت مشتریان، ما سعی می‌کنیم تجربه‌ی سفر شما را به یک تجربه‌ی لاکچری و ناشناخته تبدیل کنیم. از لحظه‌ی رزرو تا رسیدن به مقصد، ما همراه شما خواهیم بود و اطمینان می‌دهیم که هر جزئیات سفر شما به بهترین شکل ممکن انجام شود.</p>
          <p>خدمات ما شامل طراحی وب، توسعه نرم‌افزار و مشاوره فناوری اطلاعات است.</p>
        </div>
      )}

      {activeTab === 'contact' && (
        <div className="mt-4 flex flex-col md:flex-row">
          <div className="md:w-1/2 p-4">
            <h2 className="text-xl font-bold">تماس با ما</h2>
            <p>لطفا با ما تماس بگیرید.</p>
            <div className="border p-4 mt-2">
              <h3 className="font-bold">اطلاعات تماس</h3>
              <p>آدرس: خیابان 123</p>
              <p>شماره تماس: 123456789</p>
              <p>ایمیل: example@example.com</p>
            </div>
          </div>
          <div className="md:w-1/2 p-4">
            <h2 className="text-xl font-bold">فرم تماس</h2>
            <form>
              <div className="flex flex-col mb-4">
                <input type="text" placeholder="نام" className="border p-2 mb-2" />
                <input type="email" placeholder="ایمیل" className="border p-2 mb-2" />
                <select className="border p-2 mb-2">
                  <option>موضوع</option>
                  <option>سوال</option>
                  <option>پیشنهاد</option>
                </select>
              </div>
              <textarea placeholder="پیام شما" className="border p-2 mb-2 w-full" />
              <button type="submit" className="bg-blue-500 text-white p-2">ارسال</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Us;
