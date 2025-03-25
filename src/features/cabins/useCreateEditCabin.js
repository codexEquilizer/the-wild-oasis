import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { createCabin, editCabin } from "../../services/apiCabins";

export function useCreateEditCabin(isEditSession, reset) {
  const queryClient = useQueryClient();

  const { mutate, isLoading: isWorking } = useMutation({
    mutationFn: isEditSession ? editCabin : createCabin,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      toast.success(
        isEditSession
          ? "Cabin edited successfully!"
          : "New cabin created successfully!"
      );
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  return { mutate, isWorking };
}
