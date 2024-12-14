import {
    useQuery
} from "@tanstack/react-query";
import {
    axiosInstance
} from '../../utils/config';

export function useBenefits() {
    return useQuery({
        queryKey: ["benefits"],
        queryFn: async () => {
            const response = await axiosInstance.get("benefits");
            return response.data.results;
        },
    })
}