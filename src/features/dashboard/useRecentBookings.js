import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { getBookingsAfterDate } from "../../services/apiBookings";

export function useRecentBookings() {
  const [searcParams] = useSearchParams();
  const numDeys = !searcParams.get("last")
    ? 7
    : Number(searcParams.get("last"));
  const queryDate = subDays(new Date(), numDeys).toISOString();
  const { isLoading, data: bookings } = useQuery({
    queryFn: () => getBookingsAfterDate(queryDate),
    queryKey: ["bookings", `last-${numDeys}`],
  });
  return { isLoading, bookings };
}
