import React, { useState } from 'react';
import { Plus, Filter, Download, Share2, Calendar, DollarSign, TrendingUp, BarChart3, ChevronLeft, ArrowUpDown } from 'lucide-react';
import { MOCK_BUDGETS } from '../constants';
import { formatCurrency, cn } from '../lib/utils';

export function Budget() {
  const [showAddForm, setShowAddForm] = useState(false);
  const totalBudget = MOCK_BUDGETS.reduce((acc, b) => acc + b.budgeted, 0);
  const totalSpent = MOCK_BUDGETS.reduce((acc, b) => acc + b.spent, 0);
  const remaining = totalBudget - totalSpent;
  const spentPercent = (totalSpent / totalBudget) * 100;

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
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Create New Budget</h1>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-8 max-w-3xl transition-colors">
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Budget Information</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">Set up the basic details for your new budget.</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Budget Name</label>
              <input 
                type="text" 
                placeholder="e.g. April 2023 Budget"
                className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 outline-none dark:text-gray-200"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Budget Period</label>
                <select className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 outline-none appearance-none cursor-pointer dark:text-gray-200">
                  <option value="monthly">Monthly</option>
                  <option value="weekly">Weekly</option>
                  <option value="yearly">Yearly</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Month</label>
                <select className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 outline-none appearance-none cursor-pointer dark:text-gray-200">
                  <option value="april-2023">April 2023</option>
                  <option value="may-2023">May 2023</option>
                  <option value="june-2023">June 2023</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Total Budget Amount</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">$</span>
                <input 
                  type="number" 
                  placeholder="3500"
                  className="w-full pl-8 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 outline-none dark:text-gray-200"
                />
              </div>
              <p className="text-[10px] text-gray-400 dark:text-gray-500">This is the total amount you plan to budget for this period.</p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Primary Wallet</label>
              <select className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 outline-none appearance-none cursor-pointer dark:text-gray-200">
                <option value="main-savings">Main Savings</option>
                <option value="checking">Checking Account</option>
              </select>
              <p className="text-[10px] text-gray-400 dark:text-gray-500">The wallet from which this budget will be funded.</p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Notes (Optional)</label>
              <textarea 
                placeholder="Add any notes about this budget"
                rows={3}
                className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 outline-none resize-none dark:text-gray-200"
              ></textarea>
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
                Continue to Categories
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
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Budget Management</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Track and manage your monthly spending.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 px-3 py-2 rounded-xl text-sm font-medium text-gray-600 dark:text-gray-300 transition-colors">
            <Calendar className="w-4 h-4" />
            April 2023
          </div>
          <button className="p-2 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <Download className="w-4 h-4" />
          </button>
          <button className="p-2 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <Share2 className="w-4 h-4" />
          </button>
          <button 
            onClick={() => setShowAddForm(true)}
            className="flex items-center gap-2 bg-emerald-500 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-emerald-600 transition-colors"
          >
            <Plus className="w-4 h-4" />
            New Budget
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { icon: Download, label: 'Total Budget', value: totalBudget, color: 'emerald', sub: 'Monthly allocation', rotate: true },
          { icon: DollarSign, label: 'Spent So Far', value: totalSpent, color: 'blue', sub: `${spentPercent.toFixed(1)}% of total budget` },
          { icon: TrendingUp, label: 'Remaining', value: remaining, color: 'emerald', sub: '12 days left in month' },
          { icon: BarChart3, label: 'Budget Health', value: 'Good', color: 'emerald', sub: 'Based on spending rate', isStatus: true },
        ].map((stat, i) => (
          <div key={i} className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className={cn(
                "p-2 rounded-lg",
                stat.color === 'emerald' ? "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-500" : "bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-500"
              )}>
                <stat.icon className={cn("w-5 h-5", stat.rotate && "rotate-180")} />
              </div>
              <p className="text-xs font-bold text-gray-500 dark:text-gray-400">{stat.label}</p>
            </div>
            <h3 className={cn(
              "text-2xl font-bold",
              stat.isStatus ? "text-emerald-600 dark:text-emerald-500" : "text-gray-900 dark:text-white"
            )}>
              {typeof stat.value === 'number' ? formatCurrency(stat.value) : stat.value}
            </h3>
            <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-1">{stat.sub} ⓘ</p>
            <div className="w-full bg-gray-100 dark:bg-gray-800 h-1.5 rounded-full mt-4 overflow-hidden">
              <div 
                className={cn("h-full", stat.color === 'emerald' ? "bg-emerald-500" : "bg-blue-500")} 
                style={{ width: stat.isStatus ? '85%' : `${Math.min((stat.label === 'Total Budget' ? 1 : (stat.value as number) / totalBudget) * 100, 100)}%` }}
              ></div>
            </div>
            <div className="flex justify-between mt-1 text-[10px] font-bold text-gray-400 dark:text-gray-500">
              <span>0%</span>
              <span>50%</span>
              <span>100%</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden transition-colors">
        <div className="p-6 border-b border-gray-50 dark:border-gray-800 flex items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              <Filter className="w-4 h-4" />
              Filter
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              <ArrowUpDown className="w-4 h-4" />
              Sort
            </button>
            <button className="flex items-center gap-2 bg-emerald-500 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-emerald-600 transition-colors">
              <Plus className="w-4 h-4" />
              Add Category
            </button>
          </div>
        </div>

        <table className="w-full text-left">
          <thead>
            <tr className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider border-b border-gray-50 dark:border-gray-800">
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4">Budgeted</th>
              <th className="px-6 py-4">Spent</th>
              <th className="px-6 py-4">Remaining</th>
              <th className="px-6 py-4">Progress</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50 dark:divide-gray-800">
            {MOCK_BUDGETS.map((budget) => {
              const progress = (budget.spent / budget.budgeted) * 100;
              const remaining = budget.budgeted - budget.spent;
              return (
                <tr key={budget.id} className="group hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={cn("w-2 h-2 rounded-full", budget.color)}></div>
                      <span className="text-sm font-bold text-gray-900 dark:text-white">{budget.name}</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-md">Track</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-gray-900 dark:text-white">{formatCurrency(budget.budgeted)}</td>
                  <td className="px-6 py-4 text-sm font-bold text-gray-900 dark:text-white">{formatCurrency(budget.spent)}</td>
                  <td className={cn(
                    "px-6 py-4 text-sm font-bold",
                    remaining < 0 ? "text-rose-500" : "text-gray-900 dark:text-white"
                  )}>
                    {formatCurrency(remaining)}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 bg-gray-100 dark:bg-gray-800 h-1.5 rounded-full overflow-hidden min-w-[100px]">
                        <div 
                          className={cn(
                            "h-full",
                            progress > 100 ? "bg-rose-500" : progress > 80 ? "bg-amber-500" : "bg-emerald-500"
                          )} 
                          style={{ width: `${Math.min(progress, 100)}%` }}
                        ></div>
                      </div>
                      <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 w-8">{Math.round(progress)}%</span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
