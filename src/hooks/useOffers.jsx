import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useOffers = () => {

    const axiosPublic = useAxiosPublic();

    const {data : allOffers = [], isPending : isOffers} = useQuery({
        queryKey : ["offers"],
        queryFn : async () => {
            const res = axiosPublic.get("/offers");
            return res;
        }
    })

    return [allOffers, isOffers]
};

export default useOffers;