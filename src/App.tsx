import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Landing } from './pages/Landing';
import { About } from './pages/About';
import { Dashboard } from './pages/Dashboard';
import { Wallets } from './pages/Wallets';
import { Budget } from './pages/Budget';
import { Goals } from './pages/Goals';
import { Investments } from './pages/Investments';
import { Savings } from './pages/Savings';
import { Debts } from './pages/Debts';
import { FinanceGuru } from './pages/FinanceGuru';
import { Reports } from './pages/Reports';
import { AskAgent } from './pages/AskAgent';
import { Profile } from './pages/Profile';
import { Notifications } from './pages/Notifications';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Landing />} />
        <Route path="/about" element={<About />} />
        
        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Main App Routes */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/wallets" element={<Wallets />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/investments" element={<Investments />} />
          <Route path="/savings" element={<Savings />} />
          <Route path="/debts" element={<Debts />} />
          <Route path="/finance-guru" element={<FinanceGuru />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/ask-agent" element={<AskAgent />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notifications" element={<Notifications />} />
          
          {/* Fallback for other sidebar items */}
          <Route path="/bills" element={<div className="p-8 text-center text-gray-500">Bills feature coming soon</div>} />
          <Route path="/docs" element={<div className="p-8 text-center text-gray-500">Documents feature coming soon</div>} />
          <Route path="/settings" element={<div className="p-8 text-center text-gray-500">Settings feature coming soon</div>} />
        </Route>

        {/* Catch all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
