import {
    useQuery
} from "@tanstack/react-query";
import {
    axiosInstance
} from '../../utils/config';

export function useHighFly(activeCity) {
    return useQuery({
        queryKey: ["highFly", activeCity],
        queryFn: async () => {
            const response = await axiosInstance.get(
                'fly', {
                    params: {
                        from: activeCity
                    }
                }
            );
            return response.data;
        },
        enabled: !!activeCity,
    })
}