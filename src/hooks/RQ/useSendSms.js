import {
    useMutation
} from "@tanstack/react-query";
import {
    axiosInstance
} from '../../utils/config';

export function useSendSms({
    onSuccess,
    onError
}) {
    return useMutation({
        mutationFn: async () => axiosInstance.get("send-email"),
        onSuccess,
        onError
    })
}