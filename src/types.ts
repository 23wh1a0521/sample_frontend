export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar?: string;
}

export interface Wallet {
  id: string;
  name: string;
  type: string;
  balance: number;
  lastUpdated: string;
  color: string;
}

export interface BudgetCategory {
  id: string;
  name: string;
  budgeted: number;
  spent: number;
  status: 'Track' | 'Warning' | 'Exceeded';
  color: string;
}

export interface Goal {
  id: string;
  name: string;
  category: string;
  targetAmount: number;
  currentAmount: number;
  deadline?: string;
  status: 'On Track' | 'Completed' | 'Behind';
  linkedWallet?: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  type: 'transaction' | 'alert' | 'success';
  read: boolean;
}

export interface Transaction {
  id: string;
  date: string;
  amount: number;
  category: string;
  type: 'income' | 'expense';
  description: string;
}
