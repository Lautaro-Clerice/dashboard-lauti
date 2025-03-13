"use client";

import { Accounts } from "@/utils/types";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@heroui/react";
import { CreditCard, DollarSign, BarChart } from "lucide-react";

export default function AccountSummary({ account }: { account: Accounts }) {
  const getAccountBalance = (
    transactions: { type: string; amount: number }[]
  ) => {
    return transactions.reduce((total, transaction) => {
      return transaction.type === "deposito"
        ? total + transaction.amount
        : total - transaction.amount;
    }, 0);
  };

  const formattedBalance = getAccountBalance(account.transactions);
  return (
    <Card>
      <CardHeader className="flex justify-between items-center">
        <div>
          <p className="text-xl font-bold">Cuenta Bancaria</p>
          <p className="text-small text-default-500">{account.accountNumber}</p>
        </div>
        <CreditCard className="h-6 w-6 text-primary" />
      </CardHeader>
      <Divider />
      <CardBody className="py-5">
        <div className="space-y-4">
          <div>
            <p className="text-small text-default-500">Titular</p>
            <p className="text-lg font-semibold">{account.owner}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <p className="text-small text-default-500">Saldo Total</p>
              <div className="flex items-center gap-1">
                <DollarSign className="h-4 w-4 text-success" />
                <p className="text-2xl font-bold text-success">
                  {formattedBalance}
                </p>
              </div>
            </div>

            <div className="space-y-1">
              <p className="text-small text-default-500">Transacciones</p>
              <div className="flex items-center gap-1">
                <BarChart className="h-4 w-4 text-primary" />
                <p className="text-2xl font-bold">
                  {account.transactions.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
      <Divider />
      <CardFooter className="flex justify-between">
        <Button variant="bordered">Ver Detalles</Button>
        <Button color="warning">Transferir</Button>
      </CardFooter>
    </Card>
  );
}
