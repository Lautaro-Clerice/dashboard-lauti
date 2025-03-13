// pages/api/bank-accounts.js
export default function handler(req, res) {
  const bankAccounts = [
    {
      id: 1,
      name: "Cuenta Corriente",
      balance: 5000.75,
      accountNumber: "123-456-789",
      currency: "USD",
      owner: "Juan Pérez",
      createdAt: "2023-01-15",
      transactions: [
        { id: 101, type: "deposito", amount: 2000, date: "2024-02-01" },
        { id: 102, type: "retiro", amount: 500, date: "2024-02-05" },
        { id: 103, type: "deposito", amount: 1500, date: "2024-02-10" },
        { id: 104, type: "deposito", amount: 2000, date: "2024-02-01" },
        { id: 105, type: "retiro", amount: 500, date: "2024-02-05" },
        { id: 106, type: "deposito", amount: 1500, date: "2024-02-10" },
      ],
    },
    {
      id: 2,
      name: "Cuenta de Ahorro",
      balance: 12000.5,
      accountNumber: "987-654-321",
      currency: "EUR",
      owner: "María Gómez",
      createdAt: "2022-06-10",
      transactions: [
        { id: 201, type: "deposito", amount: 5000, date: "2024-01-10" },
        { id: 202, type: "retiro", amount: 1200, date: "2024-01-15" },
        { id: 203, type: "deposito", amount: 700, date: "2024-02-01" },
      ],
    },
    {
      id: 3,
      name: "Cuenta Nómina",
      balance: 3500.25,
      accountNumber: "456-789-123",
      currency: "MXN",
      owner: "Carlos López",
      createdAt: "2021-11-20",
      transactions: [
        { id: 301, type: "deposito", amount: 2500, date: "2024-02-03" },
        { id: 302, type: "retiro", amount: 800, date: "2024-02-07" },
      ],
    },
    {
      id: 3,
      name: "Cuenta Nómina",
      balance: 3500.25,
      accountNumber: "456-789-123",
      currency: "MXN",
      owner: "Carlos López",
      createdAt: "2021-11-20",
      transactions: [
        { id: 301, type: "deposit", amount: 2500, date: "2024-02-03" },
        { id: 302, type: "withdrawal", amount: 800, date: "2024-02-07" },
      ],
    },
  ];

  res.status(200).json(bankAccounts);
}
