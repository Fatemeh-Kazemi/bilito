import frame1 from "../../assets/images/frame1.svg";
import frame2 from "../../assets/images/frame2.svg";
import frame3 from "../../assets/images/frame3.svg";
import frame4 from "../../assets/images/frame4.svg";

const benefits = [
  {
    img: frame1,
    reason: "دسترسی آسان و راحت",
  },
  {
    img: frame2,
    reason: "پاسخگویی 24 ساعته",
  },
  {
    img: frame3,
    reason: "خدمات آنلاین",
  },
  {
    img: frame4,
    reason: "کمترین نرخ خرید بلیط",
  },
];

const Benefits = () => {
  return (
    <div className="bg-blue-100">
      <div className="container mx-auto flex justify-center md:gap-32 p-6">
        {benefits.map((reason) => (
          <div className="flex flex-col items-center">
            <div className="size-[40px] md:size-[80px] p-2 flex justify-center items-center bg-white border border-primary rounded-lg md:rounded-2xl">
              <img src={reason.img} className="w-full" alt="" />
            </div>
            <p className="font-bold mt-4">{reason.reason}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
