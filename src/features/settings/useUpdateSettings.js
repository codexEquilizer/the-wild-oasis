import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { updateSetting as updateSettingAPI } from "../../services/apiSettings";

export function useUpdateSettings() {
  const queryClient = useQueryClient();
  const { isLoading: isUpdating, mutate: updateSettings } = useMutation({
    mutationFn: updateSettingAPI,
    onSuccess: () =>
      queryClient.invalidateQueries(
        {
          queryKey: ["settings"],
        },
        toast.success("Setting updated successfully!")
      ),
    onError: (err) => toast.error("Settings not updated"),
  });

  return { isUpdating, updateSettings };
}
