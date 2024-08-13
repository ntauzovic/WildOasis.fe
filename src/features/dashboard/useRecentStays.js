import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import {
  getBookingsAfterDate,
  getStaysAfterDate,
} from "../../services/apiBookings";

export function useRecentStays() {
  const [searcParams] = useSearchParams();
  const numDeys = !searcParams.get("last")
    ? 7
    : Number(searcParams.get("last"));
  const queryDate = subDays(new Date(), numDeys).toISOString();
  const { isLoading, data: stays } = useQuery({
    queryFn: () => getStaysAfterDate(queryDate),
    queryKey: ["stays", `last-${numDeys}`],
  });
  const confirmedStays = stays?.filter(
    (stay) => stay.status === "checked-in" || stay.status === "checked-out"
  );
  return { isLoading, confirmedStays, numDeys };
}
