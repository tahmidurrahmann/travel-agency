import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useBookings = () => {

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: allBookings, isPending: isBookings, refetch } = useQuery({
        queryKey: ["userBookings", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/booking?query=${user?.email}`);
            return res?.data;
        }
    })

    return [allBookings, isBookings, refetch]
};

export default useBookings;