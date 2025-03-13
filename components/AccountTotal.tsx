"use client";

import { useEffect, useState } from "react";
import { Chip } from "@heroui/react";
import AccountRepository from "@/services/AccountRepository";
import Cookies from "cookies-js";
const AccountTotal = () => {
  const [total, setTotal] = useState<number | null>(null);

  useEffect(() => {
    const fetchTotal = async () => {
      const userId = Cookies.get("userId");
      if (userId) {
        const totalAmount = await AccountRepository.getAccountTotal(
          Number(userId)
        );
        setTotal(totalAmount);
      }
    };

    fetchTotal();
  }, []);

  return (
    <div>
      <Chip color="warning">
        {total !== null ? `$${total}` : "Cargando..."}
      </Chip>
    </div>
  );
};

export default AccountTotal;
