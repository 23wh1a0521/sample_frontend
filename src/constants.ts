import type { Wallet, BudgetCategory, Goal, Notification, Investment, Saving, Debt } from './types';

export const MOCK_USER = {
  id: '1',
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  avatar: 'https://picsum.photos/seed/john/100/100',
};

export const MOCK_WALLETS: Wallet[] = [
  {
    id: '1',
    name: 'Main Savings',
    type: 'Savings',
    balance: 2543.89,
    lastUpdated: 'Apr 15',
    color: 'from-blue-600 to-indigo-700',
  },
  {
    id: '2',
    name: 'Emergency Fund',
    type: 'Savings',
    balance: 10234.56,
    lastUpdated: 'Apr 14',
    color: 'from-blue-500 to-blue-600',
  },
];

export const MOCK_BUDGETS: BudgetCategory[] = [
  { id: '1', name: 'Housing', budgeted: 1200, spent: 1200, status: 'Track', color: 'bg-emerald-500' },
  { id: '2', name: 'Groceries', budgeted: 500, spent: 385, status: 'Track', color: 'bg-emerald-500' },
  { id: '3', name: 'Dining Out', budgeted: 300, spent: 276, status: 'Warning', color: 'bg-amber-500' },
  { id: '4', name: 'Transportation', budgeted: 200, spent: 110, status: 'Track', color: 'bg-emerald-500' },
  { id: '5', name: 'Entertainment', budgeted: 150, spent: 180, status: 'Exceeded', color: 'bg-rose-500' },
  { id: '6', name: 'Utilities', budgeted: 250, spent: 0, status: 'Track', color: 'bg-emerald-500' },
  { id: '7', name: 'Shopping', budgeted: 400, spent: 0, status: 'Track', color: 'bg-emerald-500' },
];

export const MOCK_GOALS: Goal[] = [
  {
    id: '1',
    name: 'Emergency Fund',
    category: 'Savings',
    targetAmount: 10000,
    currentAmount: 10000,
    status: 'Completed',
    deadline: 'April 10, 2023',
  },
  {
    id: '2',
    name: 'Vacation Fund',
    category: 'Travel',
    targetAmount: 3000,
    currentAmount: 1500,
    status: 'On Track',
  },
  {
    id: '3',
    name: 'New Car',
    category: 'Major Purchase',
    targetAmount: 20000,
    currentAmount: 2778.45,
    status: 'On Track',
  },
];

export const MOCK_INVESTMENTS: Investment[] = [
  {
    id: '1',
    name: 'Apple Inc.',
    type: 'Stock',
    amount: 5000,
    currentValue: 5450.25,
    change: 450.25,
    changePercentage: 9.0,
    lastUpdated: 'Apr 15',
  },
  {
    id: '2',
    name: 'S&P 500 Index Fund',
    type: 'ETF',
    amount: 10000,
    currentValue: 10234.56,
    change: 234.56,
    changePercentage: 2.34,
    lastUpdated: 'Apr 14',
  },
];

export const MOCK_SAVINGS: Saving[] = [
  {
    id: '1',
    name: 'House Down Payment',
    category: 'Real Estate',
    targetAmount: 50000,
    currentAmount: 12500,
    status: 'On Track',
    deadline: 'Dec 2025',
  },
  {
    id: '2',
    name: 'Retirement Fund',
    category: 'Long Term',
    targetAmount: 1000000,
    currentAmount: 45000,
    status: 'On Track',
  },
];

export const MOCK_DEBTS: Debt[] = [
  {
    id: '1',
    name: 'Student Loan',
    type: 'Education',
    totalAmount: 35000,
    paidAmount: 12000,
    interestRate: 4.5,
    minimumPayment: 350,
    dueDate: 'May 01',
    status: 'On Track',
  },
  {
    id: '2',
    name: 'Credit Card',
    type: 'Personal',
    totalAmount: 5000,
    paidAmount: 1500,
    interestRate: 18.9,
    minimumPayment: 150,
    dueDate: 'Apr 25',
    status: 'Behind',
  },
];

export const MOCK_NOTIFICATIONS: Notification[] = [
  {
    id: '1',
    title: 'Large Deposit Received',
    message: 'You received a deposit of $2,750.00 to your Main Savings wallet.',
    timestamp: 'Today, 10:30 AM',
    type: 'success',
    read: false,
  },
  {
    id: '2',
    title: 'Monthly Budget Alert',
    message: 'Your "Dining Out" budget is at 85% of its limit for this month.',
    timestamp: 'Yesterday, 3:45 PM',
    type: 'alert',
    read: false,
  },
  {
    id: '3',
    title: 'Bill Payment Reminder',
    message: 'Your electric bill payment is due in 3 days. Set up automatic payment to avoid late fees.',
    timestamp: 'Apr 15, 2023',
    type: 'transaction',
    read: true,
  },
  {
    id: '4',
    title: 'Savings Goal Achieved',
    message: 'Congratulations! You\'ve reached your "Emergency Fund" savings goal of $10,000.',
    timestamp: 'Apr 10, 2023',
    type: 'success',
    read: true,
  },
];
