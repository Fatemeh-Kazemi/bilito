import {
    useQuery
} from "@tanstack/react-query";
import {
    axiosInstance
} from '../../utils/config';

export function useBanners() {
    return useQuery({
        queryKey: ["banners"],
        queryFn: async () => {
            const response = await axiosInstance.get("banners");
            return response.data.results;
        },
    })
}