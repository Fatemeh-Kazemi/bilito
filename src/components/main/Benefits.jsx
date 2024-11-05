import axios from 'axios';
import { useState, useEffect } from "react";

const Benefits = () => {
  const [benefits, setBenefits] = useState([]);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchBenefits = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/benefits');
        setBenefits(response.data.results);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching data", error);
      }
    };

    fetchBenefits();
  }, []);

  if (error) return <div>خطا در بارگذاری داده‌ها: {error}</div>;

  return (
    <div className="bg-blue-100">
      <div className="container mx-auto flex justify-center md:gap-32 p-6">
        {benefits.map((reason) => (
          <div className="flex flex-col items-center">
            <div className="size-[40px] md:size-[80px] p-2 flex justify-center items-center bg-white border border-primary rounded-lg md:rounded-2xl">
              <img src={`http://localhost:3001/${reason.img}`} className="w-full" alt="" />
            </div>
            <p className="font-bold mt-4">{reason.reason}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
