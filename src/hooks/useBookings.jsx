import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useBookings = () => {

    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const { data: booking = [], isPending : isBooking } = useQuery({
        queryKey: ["bookings", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/bookings/${user?.email}`);
            return res?.data;
        }
    })

    return [booking, isBooking]
};

export default useBookings;