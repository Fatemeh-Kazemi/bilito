import frame1 from "../../assets/images/frame1.svg";
import frame2 from "../../assets/images/frame2.svg";
import frame3 from "../../assets/images/frame3.svg";
import frame4 from "../../assets/images/frame4.svg";

const Benefits = () => {
  return (
    <div>
      
      <div className="bg-blue-100 flex justify-center gap-32 p-6">
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
    </div>
  )
}

export default Benefits
