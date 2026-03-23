import React, { useState } from 'react';
import { Plus, Filter, ChevronRight, TrendingUp, Calendar, Search, ChevronLeft, ArrowUpDown, DollarSign, BarChart3 } from 'lucide-react';
import { MOCK_INVESTMENTS } from '../constants';
import { formatCurrency, cn } from '../lib/utils';

export function Investments() {
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
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Add New Investment</h1>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-8 max-w-3xl transition-colors">
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Investment Details</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">Track a new investment in your portfolio.</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
  
            {/* Investment Name */}
            <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300">
                Investment Name
                </label>
                <input 
                type="text"
                name="name"
                placeholder="e.g. Fixed Deposit, Mutual Fund"
                className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 outline-none dark:text-gray-200"
                />
            </div>

            {/* Amount */}
            <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300">
                Amount Invested
                </label>
                <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">$</span>
                <input 
                    type="number"
                    name="amount"
                    placeholder="0.00"
                    className="w-full pl-8 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 outline-none dark:text-gray-200"
                />
                </div>
            </div>

            {/* Purchase Date */}
            <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300">
                Purchase Date
                </label>
                <input 
                type="date"
                name="date"
                className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 outline-none dark:text-gray-200"
                />
            </div>

            {/* Date of Maturity */}
            <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300">
                Date of Maturity
                </label>
                <input 
                type="date"
                name="DateOfMaturity"
                className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 outline-none dark:text-gray-200"
                />
            </div>

            {/* Buttons */}
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
                Add Investment
                </button>
            </div>

            </form>
        </div>
      </div>
    );
  }

  const totalInvested = MOCK_INVESTMENTS.reduce((sum, inv) => sum + inv.amount, 0);
  const totalValue = MOCK_INVESTMENTS.reduce((sum, inv) => sum + inv.currentValue, 0);
  const totalChange = totalValue - totalInvested;
  const totalChangePercentage = (totalChange / totalInvested) * 100;

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Portfolio</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Track and manage your investments</p>
        </div>
        <button 
          onClick={() => setShowAddForm(true)}
          className="flex items-center gap-2 bg-emerald-500 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-emerald-600 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Investment
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm transition-colors">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Total Portfolio Value</h2>
            <span className={cn(
              "text-sm font-bold",
              totalChange >= 0 ? "text-emerald-500" : "text-rose-500"
            )}>
              {totalChange >= 0 ? '+' : ''}{totalChangePercentage.toFixed(2)}%
            </span>
          </div>
          <p className="text-3xl font-bold text-gray-900 dark:text-white mb-8">{formatCurrency(totalValue)}</p>
          <div className="grid grid-cols-3 gap-4 border-t border-gray-50 dark:border-gray-800 pt-6">
            <div className="text-center">
              <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase mb-1">Total Invested</p>
              <p className="text-lg font-bold text-gray-900 dark:text-white">{formatCurrency(totalInvested)}</p>
            </div>
            <div className="text-center">
              <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase mb-1">Total Profit</p>
              <p className={cn("text-lg font-bold", totalChange >= 0 ? "text-emerald-500" : "text-rose-500")}>
                {formatCurrency(totalChange)}
              </p>
            </div>
            <div className="text-center">
              <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase mb-1">Assets</p>
              <p className="text-lg font-bold text-gray-900 dark:text-white">{MOCK_INVESTMENTS.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm transition-colors">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Portfolio Insights</h2>
          <div className="space-y-6">
            {[
              { icon: DollarSign, label: 'Best Performer', sub: 'Apple Inc.', value: '+9.0%', color: 'emerald' },
              { icon: Calendar, label: 'Last Update', sub: 'Portfolio Sync', value: 'Today', color: 'blue' },
              { icon: BarChart3, label: 'Risk Level', sub: 'Moderate', value: 'Medium', color: 'violet' },
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
                <p className="text-xs font-bold text-gray-900 dark:text-white">{insight.value}</p>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 flex items-center justify-center gap-2 text-xs font-bold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:white transition-colors">
            View Analysis
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 flex-1">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search investments..." 
              className="w-full pl-10 pr-4 py-2 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 dark:text-gray-200 transition-colors"
            />
          </div>
        </div>
        
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_INVESTMENTS.map((inv) => (
          <div key={inv.id} className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm group hover:shadow-md transition-all">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{inv.name}</h3>
                <p className="text-xs text-gray-400 dark:text-gray-500 font-medium">{inv.type}</p>
              </div>
              <span className={cn(
                "text-[10px] font-bold px-2 py-0.5 rounded-md",
                inv.change >= 0 ? "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-500" : "bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-500"
              )}>
                {inv.change >= 0 ? '+' : ''}{inv.changePercentage}%
              </span>
            </div>
            
            <div className="space-y-4">
              <div>
                <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase mb-1">Current Value</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{formatCurrency(inv.currentValue)}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-50 dark:border-gray-800">
                <div>
                  <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase mb-1">Invested</p>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">{formatCurrency(inv.amount)}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase mb-1">Profit/Loss</p>
                  <p className={cn("text-sm font-bold", inv.change >= 0 ? "text-emerald-500" : "text-rose-500")}>
                    {formatCurrency(inv.change)}
                  </p>
                </div>
              </div>
            </div>

            <button className="w-full mt-6 py-2 text-xs font-bold text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:white transition-colors">
              View Performance →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
