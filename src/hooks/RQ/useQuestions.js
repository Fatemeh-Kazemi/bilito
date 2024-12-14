import {
    useQuery
} from "@tanstack/react-query";
import {
    axiosInstance
} from '../../utils/config';

export function useQuestions() {
    return useQuery({
        queryKey: ["questions"],
        queryFn: async () => {
            const response = await axiosInstance.get("questions");
            return response.data.results;
        },
    })
}