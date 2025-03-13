import AccountSummary from "@/components/AccountSummary";
import TransactionTable from "@/components/dashboard/TransactionTable";
import AccountRepository from "@/services/AccountRepository";
import { cookies } from "next/headers";

export default async function DashboardPage() {
  const userId = cookies().get("userId")?.value;
  const user = await AccountRepository.getAccountById(
    userId ? Number(userId) : 0
  );
  const transactions = user.transactions;
  return (
    <div className="flex flex-col p-4 gap-4 md:flex-row">
      <div className="flex flex-col gap-4 md:w-[30%]">
        <h2 className="text-[20px]">Tu balance</h2>
        <AccountSummary account={user} />
      </div>
      <div className="flex flex-col gap-4 md:w-[70%]">
        <h2 className="text-[20px]">Tus transacciones</h2>
        <TransactionTable transactions={transactions} />
      </div>
    </div>
  );
}
