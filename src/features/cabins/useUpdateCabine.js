import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEditCabine } from "../../services/apiCabins";

export function useUpdateCabine() {
  const queryClient = useQueryClient();

  const { mutate: editCabine, isLoading: isEditing } = useMutation({
    mutationFn: ({ newCabineData, id }) => createEditCabine(newCabineData, id),
    onSuccess: () => {
      toast.success("Edit Cabine is done");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { editCabine, isEditing };
}
