import { apiResponse } from "@/utils/config";
import { dataLogin } from "@/utils/types";

export const loginUser = async (dataLogin: dataLogin) => {
  try {
    const res = await apiResponse.post("/auth", dataLogin);
    return res.data;
  } catch (error) {
    throw error;
  }
};
