import React, { useState } from 'react';
import { Plus, Filter, ChevronRight, TrendingUp, Calendar, Target, ChevronLeft, ArrowUpDown } from 'lucide-react';
import { MOCK_GOALS } from '../constants';
import { formatCurrency, cn } from '../lib/utils';

export function Goals() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [goalData, setGoalData] = useState({
    name: "",
    targetAmount: "",
    currentAmount: "",
    targetDate: ""
  });
  const handleChange = (e) => {
    setGoalData({
      ...goalData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(goalData);

    // later connect API
    // axios.post("/api/goals", goalData)

    setGoalData({
      name: "",
      targetAmount: "",
      currentAmount: "",
      targetDate: ""
    });

    setShowAddForm(false);
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
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Create New Goal</h1>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-8 max-w-3xl transition-colors">
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Goal Information</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">Set up your new financial goal.</p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 dark:text-gray-300">
                Goal Name
              </label>

              <input
                type="text"
                name="name"
                value={goalData.name}
                onChange={handleChange}
                placeholder="e.g New Car, Vacation Fund"
                className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 outline-none dark:text-gray-200"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 dark:text-gray-300">
                Target Amount
              </label>

              <input
                type="number"
                name="targetAmount"
                value={goalData.targetAmount}
                onChange={handleChange}
                placeholder="Enter target amount"
                className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 outline-none dark:text-gray-200"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 dark:text-gray-300">
                Current Amount
              </label>

              <input
                type="number"
                name="currentAmount"
                value={goalData.currentAmount}
                onChange={handleChange}
                placeholder="Enter saved amount"
                className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 outline-none dark:text-gray-200"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 dark:text-gray-300">
                Target Date
              </label>

              <input
                type="date"
                name="targetDate"
                value={goalData.targetDate}
                onChange={handleChange}
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
                Create Goal
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
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Financial Goals</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Track and manage your savings goals</p>
        </div>
        <button 
          onClick={() => setShowAddForm(true)}
          className="flex items-center gap-2 bg-emerald-500 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-emerald-600 transition-colors"
        >
          <Plus className="w-4 h-4" />
          New Goal
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm transition-colors">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Overall Progress</h2>
            <span className="text-sm font-bold text-gray-400 dark:text-gray-500">19.7%</span>
          </div>
          <div className="w-full bg-gray-100 dark:bg-gray-800 h-2 rounded-full overflow-hidden mb-8">
            <div className="bg-emerald-500 h-full" style={{ width: '19.7%' }}></div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase mb-1">Active</p>
              <p className="text-xl font-bold text-gray-900 dark:text-white">3</p>
            </div>
            <div className="text-center">
              <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase mb-1">Completed</p>
              <p className="text-xl font-bold text-gray-900 dark:text-white">1</p>
            </div>
            <div className="text-center">
              <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase mb-1">Upcoming</p>
              <p className="text-xl font-bold text-gray-900 dark:text-white">1</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm transition-colors">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Goal Insights</h2>
          <div className="space-y-6">
            {[
              { icon: Target, label: 'Highest Priority', sub: 'Home Down Payment', value: '$50,000', color: 'emerald' },
              { icon: Calendar, label: 'Next Deadline', sub: 'Vacation Fund', value: 'July 15', color: 'blue' },
              { icon: TrendingUp, label: 'Fastest Growing', sub: 'Emergency Fund', value: '+25% / month', color: 'violet', isGrowth: true },
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
          <button className="w-full mt-8 flex items-center justify-center gap-2 text-xs font-bold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
            View Detailed Insights
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 flex-1">
          
          <div className="flex items-center gap-2 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-1 rounded-xl transition-colors">
            <button className="px-4 py-1.5 bg-emerald-500 text-white rounded-lg text-xs font-bold">All Goals </button>
            <button className="px-4 py-1.5 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg text-xs font-bold">Active 3</button>
          </div>
        </div>
        
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_GOALS.map((goal) => {
          const progress = (goal.currentAmount / goal.targetAmount) * 100;
          return (
            <div key={goal.id} className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm group hover:shadow-md transition-all">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">{goal.name}</h3>
                  <p className="text-xs text-gray-400 dark:text-gray-500 font-medium">@ {goal.category}</p>
                </div>
                <span className={cn(
                  "text-[10px] font-bold px-2 py-0.5 rounded-md",
                  goal.status === 'Completed' ? "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-500" : "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-500"
                )}>
                  {goal.status}
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
                  <p className="text-sm font-bold text-emerald-600 dark:text-emerald-500">{formatCurrency(goal.currentAmount)}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase mb-1">Target</p>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">{formatCurrency(goal.targetAmount)}</p>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-gray-50 dark:border-gray-800">
                <div className="flex items-center gap-2 text-[10px] text-emerald-600 dark:text-emerald-500 font-bold">
                  <div className="w-4 h-4 rounded-full bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                  </div>
                  {goal.status === 'Completed' ? `Completed on ${goal.deadline}` : 'On Track'}
                </div>
                <div className="flex items-center gap-2 text-[10px] text-gray-400 dark:text-gray-500 font-bold">
                  <div className="w-4 h-4 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                  </div>
                  Linked to {goal.linkedWallet || 'Main Savings'}
                </div>
              </div>

              <button className="w-full mt-6 py-2 text-xs font-bold text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
                View Details →
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
