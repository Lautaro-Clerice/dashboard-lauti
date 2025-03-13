import AccountRepository from "@/services/AccountRepository";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Divider,
} from "@heroui/react";
import {
  ArrowDownCircle,
  Calendar,
  CreditCard,
  Download,
  Repeat,
  Share2,
} from "lucide-react";
import { cookies } from "next/headers";

interface ViewTransactionProps {
  params: { id: number };
}

export default async function ViewTransaction({
  params,
}: ViewTransactionProps) {
  const userId = Number(cookies().get("userId")?.value);
  const transactionDetails = await AccountRepository.getAccountTransaction(
    userId,
    params.id
  );

  const getTransactionDetails = (type: string) => {
    switch (type.toLowerCase()) {
      case "deposito":
        return {
          icon: <ArrowDownCircle className="h-8 w-8" />,
          color: "primary",
          label: "Depósito",
          description: "Depósito a cuenta",
        };
      case "retiro":
        return {
          icon: <Repeat className="h-8 w-8" />,
          color: "warning",
          label: "Transferencia",
          description: "Transferencia entre cuentas",
        };
    }
  };
  const transaction = getTransactionDetails(transactionDetails?.type || "");
  return (
    <div className="w-full max-w-md mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Detalle de Transacción</h1>
        <Chip color="primary" variant="flat">
          #{transactionDetails?.id}
        </Chip>
      </div>

      <Card className="shadow-xl overflow-visible">
        <div
          className={`absolute -top-6 left-1/2 -translate-x-1/2 rounded-full p-3 shadow-lg bg-gradient-to-br from-${transaction?.color}-500 to-${transaction?.color}-600 text-white`}
        >
          {transaction?.icon}
        </div>

        <CardHeader className="pt-10 pb-0 flex-col items-center">
          <Chip color="warning" variant="flat" className="mb-2">
            {transaction?.label}
          </Chip>
          <h2 className={`text-3xl font-bold text-warning-50}`}>
            ${transactionDetails?.amount}
          </h2>
          <p className="text-default-500 text-sm">{transaction?.description}</p>
        </CardHeader>

        <CardBody className="py-5">
          <div className="bg-gradient-to-r from-default-50 to-default-100 rounded-xl p-4 mb-4">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-default-500" />
                <span className="text-sm text-default-600">Fecha</span>
              </div>
              <span className="text-sm font-medium">
                {transactionDetails?.date.split(",")[0]}
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-default-600">
                ID de Transacción
              </span>
              <span className="text-sm font-medium">
                {transactionDetails?.id}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-default-600">Estado</span>
              <Chip color="success" size="sm">
                Completada
              </Chip>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-default-600">Método</span>
              <div className="flex items-center gap-1">
                <CreditCard className="h-3 w-3" />
                <span className="text-sm font-medium">Tarjeta</span>
              </div>
            </div>
          </div>
        </CardBody>

        <Divider />

        <div className="p-3 flex justify-between">
          <Button
            variant="light"
            startContent={<Download size={16} />}
            size="sm"
          >
            Recibo
          </Button>

          <Button variant="light" startContent={<Share2 size={16} />} size="sm">
            Compartir
          </Button>
        </div>
      </Card>
    </div>
  );
}
