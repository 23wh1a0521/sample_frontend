import React, { useState } from 'react';
import { Plus, Filter, ArrowUpDown, MoreHorizontal, ChevronLeft } from 'lucide-react';
import { MOCK_WALLETS } from '../constants';
import { formatCurrency } from '../lib/utils';

export function Wallets() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [walletData, setWalletData] = useState({
      incomeType: "",
      amount: ""
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(walletData);

    // later connect API
    // axios.post("/api/wallet", walletData)

    setShowAddForm(false);
  };
  const handleChange = (e) => {
    setWalletData({
      ...walletData,
      [e.target.name]: e.target.value
    });
  };
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
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Add New Wallet</h1>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-8 max-w-3xl transition-colors">
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Create Wallet</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">Add a new wallet to your account.</p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 dark:text-gray-300">
                Income Type
              </label>

              <input
                type="text"
                name="incomeType"
                value={walletData.incomeType}
                onChange={handleChange}
                placeholder="e.g Salary, Business, Freelance"
                className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 outline-none dark:text-gray-200"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 dark:text-gray-300">
                Amount
              </label>

              <input
                type="number"
                name="amount"
                value={walletData.amount}
                onChange={handleChange}
                placeholder="Enter amount"
                className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 outline-none dark:text-gray-200"
              />
            </div>

            <div className="flex items-center justify-between pt-4">
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="px-6 py-2.5 border border-gray-200 dark:border-gray-700 rounded-xl text-sm font-bold text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="px-8 py-2.5 bg-emerald-500 text-white rounded-xl text-sm font-bold hover:bg-emerald-600 shadow-lg shadow-emerald-500/20 transition-all"
              >
                Add Income
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
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">My Wallets</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Manage and track all your financial accounts</p>
        </div>
        <button 
          onClick={() => setShowAddForm(true)}
          className="flex items-center gap-2 bg-emerald-500 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-emerald-600 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add New Wallet
        </button>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_WALLETS.map((wallet) => (
          <div key={wallet.id} className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden group transition-colors">
            <div className={`h-32 bg-gradient-to-br ${wallet.color} p-6 flex flex-col justify-between relative`}>
              <div className="flex items-start justify-between">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <div className="w-5 h-5 border-2 border-white/60 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <button className="text-white/80 hover:text-white">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>
              <div>
                <h3 className="text-white font-bold">{wallet.name}</h3>
                <p className="text-white/60 text-xs">{wallet.type}</p>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-end justify-between mb-4">
                <div>
                  <p className="text-xs text-gray-400 font-medium mb-1">Balance</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{formatCurrency(wallet.balance)}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-end gap-0.5 h-8">
                    {[40, 60, 45, 70, 55, 80].map((h, i) => (
                      <div key={i} className="w-1 bg-emerald-100 dark:bg-emerald-500/20 rounded-full" style={{ height: `${h}%` }}></div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-50 dark:border-gray-800 flex items-center justify-between">
                <p className="text-[10px] text-gray-400 dark:text-gray-500">Last updated: {wallet.lastUpdated}</p>
                <button className="text-xs font-bold text-emerald-600 dark:text-emerald-500 hover:underline">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
