import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useBookings() {
  const [searchParams] = useSearchParams();

  const filterValue = searchParams.get("status");

  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };

  const sortByRow = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByRow.split("-");
  const sortBy = { field, direction };

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  const { isLoading, data, isError } = useQuery({
    queryKey: ["bookings", filter, sortBy, page], //dependency array same as dependency array in useEffect
    queryFn: () => getBookings({ filter, sortBy, page }),
  });
  const bookings = data?.data || []; // Ensure bookings is an array
  const count = data?.count || 0; // Ensure count has a default value

  return { isLoading, isError, bookings, count };
}
