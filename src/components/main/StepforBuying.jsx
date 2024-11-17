const StepforBuying = () => {
  return (
    <div className="container mx-auto py-8 flex flex-col gap-6">
      <p className="text-2xl font-bold">مراحل خرید آنلاین بلیط هواپیما</p>
      <div className="flex gap-4 pt-8">
        <div>
          <svg
            width="24"
            height="704"
            viewBox="0 0 24 704"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 23L12 698"
              stroke="#CBCBCB"
              stroke-linecap="round"
              stroke-dasharray="8 8"
            />
            <circle cx="12" cy="12" r="12" fill="#1D91CC" />
            <circle cx="12" cy="149" r="12" fill="#1D91CC" />
            <circle cx="12" cy="282" r="12" fill="#1D91CC" />
            <circle cx="12" cy="420" r="12" fill="#1D91CC" />
            <circle cx="12" cy="554" r="12" fill="#1D91CC" />
            <circle cx="12" cy="692" r="12" fill="#1D91CC" />
          </svg>
        </div>
        <ul className="flex flex-col justify-between text-right">
          <li>
            <p className="title font-bold text-xl">
              <i></i>
              جستجوی بلیط
            </p>
            <p className="text-lg">
              در بخش جستجو، نوع سفر ‏(یکطرفه یا رفت و برگشت)‏ و مبدأ و مقصد خود
              را وارد کنید، تاریخ سفر را انتخاب کنید و تعداد مسافران را مشخص
              کنید.
            </p>
          </li>
          <li>
            <p className="title font-bold text-xl">
              <i></i>
              انتخاب پرواز
            </p>
            <p className="text-lg">
              بر اساس اطلاعاتی که وارد کرده‌اید، نتایجی شامل لیست پروازها و
              قیمت‌ها نمایش داده می‌شود. می‌توانید پروازهای مختلف را بررسی کنید
              و براساس ترجیحات خود،یک پرواز را انتخاب کنید
            </p>
          </li>
          <li>
            <p className="title font-bold text-xl">
              <i></i>
              انتخاب صندلی
            </p>
            <p className="text-lg">
              پس از انتخاب پرواز،شما باید صندلی یا صندلی های مورد نظرخود
              راانتخاب کنید .
            </p>
          </li>
          <li>
            <p className="title font-bold text-xl">
              <i></i>
              اطلاعات مسافران
            </p>
            <p className="text-lg">
              دراین مرحله باید اطلاعات مسافران را وارد کنید.این اطلاعات شامل نام
              ونام خانوادگی ،جنسیت ،تاریخ تولد واطلاعات تماس می باشد.
            </p>
          </li>
          <li>
            <p className="title font-bold text-xl">
              <i></i>
              تایید وپرداخت
            </p>
            <p className="text-lg">
              دراین مرحله باید هزینه بلیط را پرداخت کنید. شما میتوانیدبا کارت
              بانکی،که رمز پویا دارد وارد درگاه پرداخت شده وپس از پرداخت
              موفق،بلیط شما تایید می شود ویک بلیط الکترونیکی به شما ارائه می
              شود.
            </p>
          </li>
          <li>
            <p className="title font-bold text-xl">
              <i></i>
              دریافت بلیط
            </p>
            <p className="text-lg">
              پس از تایید خرید،بلیط را از وب سایت زرروشده دریافت کنید ویا آن را
              چاپ کنید.{" "}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StepforBuying;
