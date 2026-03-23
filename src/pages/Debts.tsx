import React, { useState } from 'react';
import { Plus, Filter, ChevronRight, TrendingUp, Calendar, Target, Search, ChevronLeft, ArrowUpDown } from 'lucide-react';
import { MOCK_DEBTS } from '../constants';
import { formatCurrency, cn } from '../lib/utils';

export function Debts() {
  const [showAddForm, setShowAddForm] = useState(false);

  if (showAddForm) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setShowAddForm(false)}
            className="p-2 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </button>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Add New Debt</h1>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-8 max-w-3xl transition-colors">
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Debt Information</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">Set up your new debt repayment plan.</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>

            {/* Name */}
            <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300">
                Debt Name
                </label>
                <input
                type="text"
                name="name"
                placeholder="e.g. Credit Card, Student Loan"
                className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm"
                />
            </div>

            {/* Description */}
            <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300">
                Description
                </label>
                <textarea
                name="description"
                rows={2}
                placeholder="Optional details about the debt"
                className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm"
                />
            </div>

            {/* Amount + Remaining */}
            <div className="grid grid-cols-2 gap-4">

                <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300">
                    Total Amount
                </label>
                <input
                    type="number"
                    name="amount"
                    placeholder="0.00"
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border rounded-xl text-sm"
                />
                </div>

                <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300">
                    Remaining Amount
                </label>
                <input
                    type="number"
                    name="remainingAmount"
                    placeholder="0.00"
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border rounded-xl text-sm"
                />
                </div>

            </div>

            {/* Dates */}
            <div className="grid grid-cols-3 gap-4">

                <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300">
                    Start Date
                </label>
                <input type="date" name="startDate" className="w-full px-3 py-2 border rounded-xl" />
                </div>

                <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300">
                    End Date
                </label>
                <input type="date" name="endDate" className="w-full px-3 py-2 border rounded-xl" />
                </div>

                <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300">
                    Due Date
                </label>
                <input type="date" name="dueDate" className="w-full px-3 py-2 border rounded-xl" />
                </div>

            </div>

            {/* Interest + Type */}
            <div className="grid grid-cols-2 gap-4">

                <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300">
                    Interest Rate (%)
                </label>
                <input type="number" name="interestRate" className="w-full px-3 py-2 border rounded-xl" />
                </div>

                <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300">
                    Debt Type
                </label>
                <select name="typeOfDebt" className="w-full px-3 py-2 border rounded-xl">
                    <option value="">Select</option>
                    <option value="payable">Payable</option>
                    <option value="receivable">Receivable</option>
                </select>
                </div>

            </div>

            {/* Wallet */}
            <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300">
                Wallet of Payment
                </label>
                <input
                type="text"
                name="walletOfPayment"
                placeholder="Wallet ID"
                className="w-full px-4 py-3 bg-white dark:bg-gray-800 border rounded-xl text-sm"
                />
            </div>

            {/* Buttons */}
            <div className="flex justify-between pt-4">
                <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="px-6 py-2 border rounded-xl"
                >
                Cancel
                </button>

                <button
                type="submit"
                className="px-8 py-2 bg-emerald-500 text-white rounded-xl"
                >
                Add Debt
                </button>
            </div>

            </form>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Debts</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Track and manage your debts</p>
        </div>
        <button 
          onClick={() => setShowAddForm(true)}
          className="flex items-center gap-2 bg-emerald-500 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-emerald-600 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Debt
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm transition-colors">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Total Debt</h2>
            <span className="text-sm font-bold text-gray-400 dark:text-gray-500">
              {formatCurrency(MOCK_DEBTS.reduce((sum, d) => sum + (d.totalAmount - d.paidAmount), 0))}
            </span>
          </div>
          <div className="w-full bg-gray-100 dark:bg-gray-800 h-2 rounded-full overflow-hidden mb-8">
            <div className="bg-emerald-500 h-full" style={{ width: '35%' }}></div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase mb-1">Active</p>
              <p className="text-xl font-bold text-gray-900 dark:text-white">{MOCK_DEBTS.length}</p>
            </div>
            <div className="text-center">
              <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase mb-1">Total</p>
              <p className="text-xl font-bold text-gray-900 dark:text-white">{formatCurrency(MOCK_DEBTS.reduce((sum, d) => sum + d.totalAmount, 0))}</p>
            </div>
            <div className="text-center">
              <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase mb-1">Avg Rate</p>
              <p className="text-xl font-bold text-gray-900 dark:text-white">4.5%</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm transition-colors">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Debt Insights</h2>
          <div className="space-y-6">
            {[
              { icon: Target, label: 'Highest Interest', sub: 'Credit Card', value: '18%', color: 'emerald' },
              { icon: Calendar, label: 'Next Payment', sub: 'Student Loan', value: 'Aug 2023', color: 'blue' },
              { icon: TrendingUp, label: 'Reduction Rate', sub: 'Last 3 months', value: '-8%', color: 'violet', isGrowth: true },
            ].map((insight, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={cn(
                    "p-2 rounded-lg",
                    insight.color === 'emerald' && "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-500",
                    insight.color === 'blue' && "bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-500",
                    insight.color === 'violet' && "bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-500",
                  )}>
                    <insight.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-900 dark:text-white">{insight.label}</p>
                    <p className="text-[10px] text-gray-400 dark:text-gray-500">{insight.sub}</p>
                  </div>
                </div>
                <p className={cn("text-xs font-bold", insight.isGrowth ? "text-emerald-500" : "text-gray-900 dark:text-white")}>{insight.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 flex-1">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search debts..." 
              className="w-full pl-10 pr-4 py-2 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 dark:text-gray-200 transition-colors"
            />
          </div>
        </div>
        
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_DEBTS.map((debt) => {
          const balance = debt.totalAmount - debt.paidAmount;
          const progress = (debt.paidAmount / debt.totalAmount) * 100;
          return (
            <div key={debt.id} className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm group hover:shadow-md transition-all">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">{debt.name}</h3>
                  <p className="text-xs text-gray-400 dark:text-gray-500 font-medium">@ {debt.type}</p>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-500">
                  {debt.status}
                </span>
              </div>
              
              <div className="flex items-center justify-between mb-2">
                <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Paid Off</p>
                <span className="text-xs font-bold text-gray-900 dark:text-white">{Math.round(progress)}%</span>
              </div>
              <div className="w-full bg-gray-100 dark:bg-gray-800 h-2 rounded-full overflow-hidden mb-6">
                <div className="bg-emerald-500 h-full" style={{ width: `${progress}%` }}></div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase mb-1">Balance</p>
                  <p className="text-sm font-bold text-emerald-600 dark:text-emerald-500">{formatCurrency(balance)}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase mb-1">Total</p>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">{formatCurrency(debt.totalAmount)}</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-50 dark:border-gray-800">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-3 h-3 text-emerald-500" />
                  <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500">{debt.interestRate}% Interest</span>
                </div>
                <button className="text-xs font-bold text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:white transition-colors">
                  View Details →
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
