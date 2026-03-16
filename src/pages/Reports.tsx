import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { formatCurrency, cn } from '../lib/utils';

const trendData = [
  { name: 'Jan', income: 4000, spending: 2400, savings: 1600 },
  { name: 'Feb', income: 3000, spending: 1398, savings: 1602 },
  { name: 'Mar', income: 2000, spending: 9800, savings: -7800 },
  { name: 'Apr', income: 2780, spending: 3908, savings: -1128 },
  { name: 'May', income: 1890, spending: 4800, savings: -2910 },
  { name: 'Jun', income: 2390, spending: 3800, savings: -1410 },
  { name: 'Jul', income: 3490, spending: 4300, savings: -810 },
];

const growthData = [
  { name: 'Jan', value: 1000 },
  { name: 'Feb', value: 1500 },
  { name: 'Mar', value: 1200 },
  { name: 'Apr', value: 1800 },
  { name: 'May', value: 2200 },
  { name: 'Jun', value: 2500 },
  { name: 'Jul', value: 3000 },
];

const categoryData = [
  { name: 'Housing', value: 45, color: '#8b5cf6' },
  { name: 'Food', value: 15, color: '#a78bfa' },
  { name: 'Transportation', value: 12, color: '#c4b5fd' },
  { name: 'Entertainment', value: 10, color: '#ddd6fe' },
  { name: 'Utilities', value: 8, color: '#ede9fe' },
  { name: 'Other', value: 10, color: '#f5f3ff' },
];

export function Reports() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Reports</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="mb-8">
            <h2 className="text-lg font-bold text-gray-900">Financial Trends</h2>
            <p className="text-sm text-gray-500">Analyze your financial patterns over time</p>
          </div>
          <div className="flex items-center gap-2 mb-8 bg-gray-50 p-1 rounded-xl w-fit">
            {['All Metrics', 'Income', 'Spending', 'Savings'].map((m) => (
              <button 
                key={m}
                className={cn(
                  "px-4 py-1.5 rounded-lg text-xs font-bold transition-all",
                  m === 'All Metrics' ? "bg-emerald-500 text-white shadow-sm" : "text-gray-500 hover:bg-gray-100"
                )}
              >
                {m}
              </button>
            ))}
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fill: '#94a3b8' }} 
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fill: '#94a3b8' }}
                  tickFormatter={(v) => `$${v}`}
                />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}
                />
                <Line type="monotone" dataKey="income" stroke="#10b981" strokeWidth={2} dot={{ r: 4, fill: '#10b981', strokeWidth: 2, stroke: '#fff' }} />
                <Line type="monotone" dataKey="spending" stroke="#f43f5e" strokeWidth={2} dot={{ r: 4, fill: '#f43f5e', strokeWidth: 2, stroke: '#fff' }} />
                <Line type="monotone" dataKey="savings" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4, fill: '#3b82f6', strokeWidth: 2, stroke: '#fff' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 flex items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              <span className="text-[10px] font-bold text-gray-400 uppercase">Income</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-rose-500"></div>
              <span className="text-[10px] font-bold text-gray-400 uppercase">Spending</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <span className="text-[10px] font-bold text-gray-400 uppercase">Savings</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex items-start justify-between mb-8">
            <div>
              <h2 className="text-lg font-bold text-gray-900">Savings Growth</h2>
              <p className="text-sm text-gray-500">Track your savings progress over time</p>
            </div>
            <span className="text-xs font-bold text-emerald-500 bg-emerald-50 px-2 py-1 rounded-md">+20.0%</span>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={growthData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fill: '#94a3b8' }} 
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fill: '#94a3b8' }}
                  tickFormatter={(v) => `$${v}`}
                />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorValue)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm max-w-2xl">
        <div className="mb-8">
          <h2 className="text-lg font-bold text-gray-900">Expense Categories</h2>
          <p className="text-sm text-gray-500">Breakdown of your expenses by category</p>
        </div>
        <div className="flex items-center gap-12">
          <div className="w-64 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-y-4 gap-x-8">
            {categoryData.map((item) => (
              <div key={item.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-xs font-bold text-gray-500">{item.name}</span>
                </div>
                <span className="text-xs font-bold text-gray-900">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
