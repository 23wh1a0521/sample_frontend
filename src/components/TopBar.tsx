import React from 'react';
import {  Bell,  Sun, PanelLeft, LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { MOCK_USER } from '../constants';
import { useTheme } from '../context/ThemeContext';
import { useSidebar } from '../context/SidebarContext';

export function TopBar() {
  const { theme, toggleTheme } = useTheme();
  const { toggleSidebar } = useSidebar();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <header className="h-16 border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 flex items-center justify-between px-8 sticky top-0 z-10 transition-colors">
      <div className="flex items-center gap-4">
        <button 
          onClick={toggleSidebar}
          className="p-2 text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
          title="Toggle Sidebar"
        >
          <PanelLeft className="w-5 h-5" />
        </button>

        
      </div>

      <div className="flex items-center gap-3">
        
        <Link to="/notifications" className="p-2 text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg relative transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white dark:border-gray-900"></span>
        </Link>
        <div className="h-6 w-px bg-gray-100 dark:bg-gray-800 mx-1"></div>
        <Link to="/profile" className="flex items-center gap-2 ml-2 group">
          <img 
            src={MOCK_USER.avatar} 
            alt="Profile" 
            className="w-8 h-8 rounded-full border border-gray-100 dark:border-gray-800 group-hover:border-emerald-500 transition-colors"
            referrerPolicy="no-referrer"
          />
        </Link>
        <button 
          onClick={handleLogout}
          className="p-2 text-gray-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-900/20 rounded-lg transition-colors"
          title="Logout"
        >
          <LogOut className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}
