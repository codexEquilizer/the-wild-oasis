import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";

export function useBooking() {
  const { bookingId } = useParams();

  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    queryKey: ["bookings", bookingId],
    queryFn: () => getBooking(bookingId),
    retry: false, // Usually by default, React Query tries to fetch data 3 times at the beginning if it doesn't finds the data. So we can set property -> retry to false.
  });

  return { isLoading, booking, error };
}
