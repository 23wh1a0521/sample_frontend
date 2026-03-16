import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Percent, 
  Plus, 
  Send, 
  CreditCard, 
  ArrowRightLeft, 
  Wallet as WalletIcon, 
  BarChart3,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { formatCurrency, cn } from '../lib/utils';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

const stats = [
  { 
    label: 'Total Balance', 
    value: 14278.45, 
    change: '+2.5%', 
    trend: 'up', 
    icon: DollarSign, 
    color: 'emerald',
    chartData: [4000, 4500, 4200, 4800, 4500]
  },
  { 
    label: 'Monthly Income', 
    value: 3100.00, 
    change: '+5.1%', 
    trend: 'up', 
    icon: TrendingUp, 
    color: 'blue',
    chartData: [2000, 2500, 2800, 3000, 3100]
  },
  { 
    label: 'Monthly Expenses', 
    value: 1823.75, 
    change: '+13.3%', 
    trend: 'down', 
    icon: TrendingDown, 
    color: 'rose',
    chartData: [1500, 1600, 1700, 1800, 1823]
  },
  { 
    label: 'Savings Rate', 
    value: '41.2%', 
    change: '+2.1%', 
    trend: 'up', 
    icon: Percent, 
    color: 'violet',
    chartData: [35, 38, 40, 39, 41.2]
  },
];

const quickActions = [
  { icon: Plus, label: 'Add Budget', route: '/budget' },
  { icon: Send, label: 'Add Money', route: '/wallets' },
  { icon: CreditCard, label: 'Add Goal', route: '/goals' },
  { icon: ArrowRightLeft, label: 'Ask Agent', route: '/ask-agent' },
  { icon: WalletIcon, label: 'View Profile', route: '/profile' },
  { icon: BarChart3, label: 'Reports', route: '/reports' },
];


export function Dashboard() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const navigate = useNavigate();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const months = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  const years = Array.from({ length: 10 }, (_, i) => year - 5 + i);

  const handleMonthChange = (e) => {
    const newMonth = parseInt(e.target.value);
    setCurrentDate(new Date(year, newMonth, 1));
  };

  const handleYearChange = (e) => {
    const newYear = parseInt(e.target.value);
    setCurrentDate(new Date(newYear, month, 1));
  };

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };


  const monthLabel = currentDate.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const calendarDays = useMemo(() => {
    const blanks = Array(firstDay).fill(null);
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    return [...blanks, ...days];
  }, [firstDay, daysInMonth]);

  /* Example spending data */
  const spendingData = {
    "2024-03-02": [
      { amount: 75, type: "normal" },
      { amount: 120, type: "high" }
    ],
    "2024-03-11": [
      { amount: 2150, type: "low" }
    ]
  };

  const getSpending = (day) => {
    if (!day) return [];
    const dateKey = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    return spendingData[dateKey] || [];
  };
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm transition-colors">
            <div className="flex items-start justify-between mb-4">
              <div className={cn(
                "p-2 rounded-xl",
                stat.color === 'emerald' && "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-500",
                stat.color === 'blue' && "bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-500",
                stat.color === 'rose' && "bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-500",
                stat.color === 'violet' && "bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-500",
              )}>
                <stat.icon className="w-5 h-5" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {typeof stat.value === 'number' ? formatCurrency(stat.value) : stat.value}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.label}</p>
                <span className={cn(
                  "text-xs font-bold flex items-center gap-0.5",
                  stat.trend === 'up' ? "text-emerald-500" : "text-rose-500"
                )}>
                  {stat.change} from last month
                </span>
              </div>
            </div>
            <div className="h-12 mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={stat.chartData.map((v, i) => ({ v, i }))}>
                  <defs>
                    <linearGradient id={`gradient-${stat.color}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={stat.color === 'emerald' ? '#10b981' : stat.color === 'blue' ? '#3b82f6' : stat.color === 'rose' ? '#f43f5e' : '#8b5cf6'} stopOpacity={0.3}/>
                      <stop offset="95%" stopColor={stat.color === 'emerald' ? '#10b981' : stat.color === 'blue' ? '#3b82f6' : stat.color === 'rose' ? '#f43f5e' : '#8b5cf6'} stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <Area 
                    type="monotone" 
                    dataKey="v" 
                    stroke={stat.color === 'emerald' ? '#10b981' : stat.color === 'blue' ? '#3b82f6' : stat.color === 'rose' ? '#f43f5e' : '#8b5cf6'} 
                    fillOpacity={1} 
                    fill={`url(#gradient-${stat.color})`} 
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm transition-colors">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">Spending Calendar</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">View your daily spending patterns.</p>
            </div>
            <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 p-1 rounded-lg">

              <button
                onClick={prevMonth}
                className="p-1.5 hover:bg-white dark:hover:bg-gray-700 rounded-md"
              >
                <ChevronLeft className="w-4 h-4 dark:text-gray-200" />
              </button>

              <select
                value={month}
                onChange={handleMonthChange}
                className="bg-gray-50 dark:bg-gray-800 text-sm px-2 py-1 rounded-md dark:text-white"
              >
                {months.map((m, index) => (
                  <option key={index} value={index}>
                    {m}
                  </option>
                ))}
              </select>

              <select
                value={year}
                onChange={handleYearChange}
                className="bg-gray-50 dark:bg-gray-800 text-sm px-2 py-1 rounded-md dark:text-white"
              >
                {years.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>

              <button
                onClick={nextMonth}
                className="p-1.5 hover:bg-white dark:hover:bg-gray-700 rounded-md"
              >
                <ChevronRight className="w-4 h-4 dark:text-gray-200" />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-7 gap-px bg-gray-100 dark:bg-gray-800 border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="bg-gray-50 dark:bg-gray-800/50 py-2 text-center text-xs font-bold text-gray-400 uppercase tracking-wider">
                {day}
              </div>
            ))}
            {calendarDays.map((day, i) => {
                const spending = getSpending(day);

                return (
                  <div
                    key={i}
                    className="bg-white dark:bg-gray-900 min-h-[80px] p-2 relative group cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    {day && (
                      <>
                        <span className="text-xs font-medium text-gray-400 dark:text-gray-500">
                          {day}
                        </span>

                        <div className="mt-1 space-y-1">
                          {spending.map((item, idx) => (
                            <div
                              key={idx}
                              className={cn(
                                "text-[10px] px-1.5 py-0.5 rounded-md font-bold",
                                item.type === "high" &&
                                  "bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400",
                                item.type === "normal" &&
                                  "bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400",
                                item.type === "low" &&
                                  "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                              )}
                            >
                              ${item.amount}
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
          </div>
          <div className="mt-6 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-rose-500"></div>
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">High</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Normal</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Low</span>
            </div>
    
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm transition-colors">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Quick Actions</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Common tasks and operations for your finances</p>
          
          <div className="grid grid-cols-2 gap-4">
            {quickActions.map((action) => (
              <button
                key={action.label}
                onClick={() => navigate(action.route)}
                className="flex flex-col items-center text-center p-4 rounded-xl border border-gray-50 dark:border-gray-800 hover:border-emerald-100 dark:hover:border-emerald-500/30 hover:bg-emerald-50/30 dark:hover:bg-emerald-500/5 transition-all group"
              >
                <div className="w-10 h-10 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-500 rounded-full flex items-center justify-center mb-3 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-500/20 transition-colors">
                  <action.icon className="w-5 h-5" />
                </div>

                <h3 className="text-xs font-bold text-gray-900 dark:text-white mb-1">
                  {action.label}
                </h3>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
