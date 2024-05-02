import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEditCabine } from "../../services/apiCabins";

export function useCreateCabine() {
  const queryClient = useQueryClient();
  const { mutate: createCabine, isLoading: isCreating } = useMutation({
    mutationFn: createEditCabine,
    onSuccess: () => {
      toast.success("New Cabine is created");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { isCreating, createCabine };
}
