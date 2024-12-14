import {
  useQuery
} from "@tanstack/react-query";
import {
  axiosInstance
} from '../../utils/config';

export function useFooter() {
  return useQuery({
    queryKey: ["footer"],
    queryFn: async () => {
      const response = await axiosInstance.get("footer");
      return response.data.result;
    },
  })
}