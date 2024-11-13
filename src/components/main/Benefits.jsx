import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import Loading from "./Loading";

const Benefits = () => {
  const {
    isPending,
    error,
    data: benefits,
  } = useQuery({
    queryKey: ["benefits"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:3001/api/benefits");
      return response.data.results;
    },
  });

  if (isPending) return <Loading />;
  if (error) return "خطایی در بارگذاری داده ها رخ داد ..." + error.message;

  return (
    <div className="bg-blue-100">
      <div className="container mx-auto flex justify-center md:gap-32 p-6">
        {benefits.map((reason) => (
          <div className="flex flex-col items-center" key={reason.id}>
            <div className="size-[40px] md:size-[80px] p-2 flex justify-center items-center bg-white border border-primary rounded-lg md:rounded-2xl">
              <img
                src={`http://localhost:3001/${reason.img}`}
                className="w-full"
                alt=""
              />
            </div>
            <p className="font-bold mt-4">{reason.reason}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
