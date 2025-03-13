// services/AccountRepository.ts
import { apiResponse } from "@/utils/config";
import { Accounts, Transaction } from "@/utils/types";

class AccountRepository {
  static async getAccountById(userId: number): Promise<Accounts> {
    const res = await apiResponse.get(`/accounts?id=${userId}`);
    const userAccount = res.data.find(
      (acc: Accounts) => Number(acc.id) === Number(userId)
    );
    return userAccount || null;
  }

  static async getAccountTotal(userId: number): Promise<number> {
    const account = await this.getAccountById(userId);
    if (!account) return 0;

    return account.transactions.reduce((total, transaction) => {
      return transaction.type === "deposito"
        ? total + transaction.amount
        : total - transaction.amount;
    }, 0);
  }

  static async getAccountTransaction(
    userId: number,
    transactionId: number
  ): Promise<Transaction | null> {
    try {
      const account = await this.getAccountById(userId);
      if (!account) return null;

      return (
        account.transactions.find(
          (t: Transaction) => t.id === Number(transactionId)
        ) || null
      );
    } catch (error) {
      console.error("Error en getAccountTransaction:", error);
      return null;
    }
  }

  static async getRecentTransactions(
    userId: number,
    limit: number = 5
  ): Promise<Transaction[]> {
    try {
      const account = await this.getAccountById(userId);
      if (!account) return [];

      return account.transactions
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, limit);
    } catch (error) {
      console.error("Error en getRecentTransactions:", error);
      return [];
    }
  }
}

export default AccountRepository;
