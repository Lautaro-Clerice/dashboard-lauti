"use client";
import { Transaction } from "@/utils/types";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
  Button,
} from "@heroui/react";
import { EyeIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function TransactionTable({
  transactions,
}: {
  transactions: Transaction[];
}) {
  const router = useRouter();
  const handleViewDetails = (id: number) => {
    router.push(`transaction/${id}`);
  };
  return (
    <Table
      aria-label="Lista de transacciones"
      className=" max-h-[300px] overflow-hidden "
    >
      <TableHeader>
        <TableColumn>ID</TableColumn>
        <TableColumn>MONTO</TableColumn>
        <TableColumn>TIPO</TableColumn>
        <TableColumn>FECHA</TableColumn>
        <TableColumn>ACCIONES</TableColumn>
      </TableHeader>
      <TableBody>
        {transactions.map((transaction) => (
          <TableRow key={transaction.id}>
            <TableCell>{transaction.id}</TableCell>
            <TableCell>${transaction.amount}</TableCell>
            <TableCell>{transaction.type}</TableCell>
            <TableCell>{transaction.date}</TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Tooltip content="Ver detalles">
                  <Button
                    onPress={() => handleViewDetails(transaction.id)}
                    isIconOnly
                    size="sm"
                    variant="light"
                  >
                    <EyeIcon className="h-4 w-4 " />
                  </Button>
                </Tooltip>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
