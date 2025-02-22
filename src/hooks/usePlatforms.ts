import APIClient, { FetchResponse } from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";

const apiClient = new APIClient<Platform>('/platforms/list/parents');

 export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: 1000 * 60 * 60 * 24, // 24hrs
    initialData: { count: platforms.length, results: platforms },
})

export default usePlatforms;