import {
    useQuery
} from "@tanstack/react-query";
import {
    axiosInstance
} from '../../utils/config';

export function useContact() {
    return useQuery({
        queryKey: ["contact"],
        queryFn: async () => {
            const response = await axiosInstance.get("contact");
            return response.data.results;
        },
    })
}