import React from 'react';
import { MOCK_NOTIFICATIONS } from '../constants';
import { cn } from '../lib/utils';
import { Bell, CheckCircle2, AlertTriangle, ArrowDownCircle } from 'lucide-react';

export function Notifications() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
        <p className="text-sm text-gray-500">Stay updated with your account activity.</p>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-50 flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-900">Your Notifications</h2>
          <button className="text-xs font-bold text-gray-500 hover:text-gray-900">Mark All as Read</button>
        </div>

        <div className="bg-emerald-50/50 p-2 flex items-center justify-center gap-4">
          {['All', 'Unread', 'Transactions', 'Alerts'].map((f) => (
            <button 
              key={f}
              className={cn(
                "px-4 py-1.5 rounded-lg text-xs font-bold transition-all",
                f === 'All' ? "bg-emerald-500 text-white shadow-sm" : "text-gray-500 hover:bg-emerald-100"
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="divide-y divide-gray-50">
          {MOCK_NOTIFICATIONS.map((n) => (
            <div key={n.id} className={cn(
              "p-6 flex gap-4 transition-colors hover:bg-gray-50/50",
              !n.read && "bg-blue-50/30"
            )}>
              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0",
                n.type === 'success' && "bg-emerald-50 text-emerald-600",
                n.type === 'alert' && "bg-amber-50 text-amber-600",
                n.type === 'transaction' && "bg-blue-50 text-blue-600",
              )}>
                {n.type === 'success' && <CheckCircle2 className="w-5 h-5" />}
                {n.type === 'alert' && <AlertTriangle className="w-5 h-5" />}
                {n.type === 'transaction' && <ArrowDownCircle className="w-5 h-5" />}
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="text-sm font-bold text-gray-900">{n.title}</h3>
                  <span className="text-[10px] font-bold text-gray-400">{n.timestamp}</span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">{n.message}</p>
              </div>
              {!n.read && (
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
