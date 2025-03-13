import { loginUser } from "@/services/login";
import { dataLogin } from "@/utils/types";
import { useMutation } from "@tanstack/react-query";

export const useLogin = () => {
  const {
    mutateAsync: login,
    isPending,
    error,
  } = useMutation({
    mutationFn: (data: dataLogin) => loginUser(data),
  });

  return { login, isPending, error };
};
