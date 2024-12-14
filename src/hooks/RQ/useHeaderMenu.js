import {
    useQuery
} from "@tanstack/react-query";
import {
    axiosInstance
} from '../../utils/config';

export function useHeaderMenu() {
    return useQuery({
        queryKey: ["headerMenu"],
        queryFn: async () => {
            const response = await axiosInstance.get("headerMenu");
            return response.data.results;
        },
    })
}