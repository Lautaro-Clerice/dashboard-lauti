export interface dataLogin {
  email: string;
  password: string;
}
export interface Transaction {
  id: number;
  type: string;
  amount: number;
  date: string;
}

export interface Accounts {
  id: number;
  name: string;
  balance: number;
  accountNumber: string;
  currency: string;
  owner: string;
  createdAt: string;
  transactions: Transaction[];
}
