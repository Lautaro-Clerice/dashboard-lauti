import { apiResponse } from "@/utils/config";
import { Accounts, Transaction } from "@/utils/types";

export default async function getTransaction(id: number) {
  try {
    const res = await apiResponse.get(`/accounts`);
    const accounts: Accounts[] = res.data;

    for (const account of accounts) {
      const transaction = account.transactions.find(
        (t: Transaction) => t.id === Number(id)
      );
      if (transaction) {
        return transaction;
      }
    }

    return null;
  } catch (error) {
    throw error;
  }
}
