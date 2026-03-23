import React, { useState } from 'react';
import { Plus, Filter, ChevronRight, TrendingUp, Calendar, Target, Search, ChevronLeft, ArrowUpDown } from 'lucide-react';
import { MOCK_SAVINGS } from '../constants';
import { formatCurrency, cn } from '../lib/utils';

export function Savings() {
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
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Add New Saving</h1>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-8 max-w-3xl transition-colors">
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Saving Information</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">Set up your new savings plan.</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>

            {/* Amount */}
            <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300">
                Amount
                </label>
                <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">
                    $
                </span>
                <input
                    type="number"
                    name="amount"
                    placeholder="0.00"
                    className="w-full pl-8 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 outline-none dark:text-gray-200"
                />
                </div>
            </div>

            {/* Date */}
            <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300">
                Date
                </label>
                <input
                type="date"
                name="date"
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
                Add Saving
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
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Savings</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Track and manage your savings</p>
        </div>
        <button 
          onClick={() => setShowAddForm(true)}
          className="flex items-center gap-2 bg-emerald-500 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-emerald-600 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Saving
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm transition-colors">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Total Savings</h2>
            <span className="text-sm font-bold text-gray-400 dark:text-gray-500">
              {formatCurrency(MOCK_SAVINGS.reduce((sum, s) => sum + s.currentAmount, 0))}
            </span>
          </div>
          <div className="w-full bg-gray-100 dark:bg-gray-800 h-2 rounded-full overflow-hidden mb-8">
            <div className="bg-emerald-500 h-full" style={{ width: '45%' }}></div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase mb-1">Active</p>
              <p className="text-xl font-bold text-gray-900 dark:text-white">{MOCK_SAVINGS.length}</p>
            </div>
            <div className="text-center">
              <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase mb-1">Target</p>
              <p className="text-xl font-bold text-gray-900 dark:text-white">{formatCurrency(MOCK_SAVINGS.reduce((sum, s) => sum + s.targetAmount, 0))}</p>
            </div>
            <div className="text-center">
              <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase mb-1">Monthly Avg</p>
              <p className="text-xl font-bold text-gray-900 dark:text-white">$1,200</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm transition-colors">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Savings Insights</h2>
          <div className="space-y-6">
            {[
              { icon: Target, label: 'Top Priority', sub: 'House Down Payment', value: '$50,000', color: 'emerald' },
              { icon: Calendar, label: 'Next Milestone', sub: 'Emergency Fund', value: 'Aug 2023', color: 'blue' },
              { icon: TrendingUp, label: 'Growth Rate', sub: 'Last 3 months', value: '+12%', color: 'violet', isGrowth: true },
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
              placeholder="Search savings..." 
              className="w-full pl-10 pr-4 py-2 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 dark:text-gray-200 transition-colors"
            />
          </div>
        </div>
       
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_SAVINGS.map((saving) => {
          const progress = (saving.currentAmount / saving.targetAmount) * 100;
          return (
            <div key={saving.id} className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm group hover:shadow-md transition-all">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">{saving.name}</h3>
                  <p className="text-xs text-gray-400 dark:text-gray-500 font-medium">@ {saving.category}</p>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-500">
                  {saving.status}
                </span>
              </div>
              
              <div className="flex items-center justify-between mb-2">
                <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Progress</p>
                <span className="text-xs font-bold text-gray-900 dark:text-white">{Math.round(progress)}%</span>
              </div>
              <div className="w-full bg-gray-100 dark:bg-gray-800 h-2 rounded-full overflow-hidden mb-6">
                <div className="bg-emerald-500 h-full" style={{ width: `${progress}%` }}></div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase mb-1">Saved</p>
                  <p className="text-sm font-bold text-emerald-600 dark:text-emerald-500">{formatCurrency(saving.currentAmount)}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase mb-1">Target</p>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">{formatCurrency(saving.targetAmount)}</p>
                </div>
              </div>

              <button className="w-full mt-6 py-2 text-xs font-bold text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:white transition-colors">
                View Details →
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
