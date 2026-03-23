import React from 'react';
import { MOCK_USER } from '../constants';
import { Camera, Mail, Phone, LogOut, ChevronRight, Save } from 'lucide-react';
import { useNavigate } from "react-router-dom";

export function Profile() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // 1. clear auth data
    localStorage.removeItem("token"); // or whatever you stored
    localStorage.removeItem("user");

    // 2. redirect to login page
    navigate('/');
  };
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
        <p className="text-sm text-gray-500">Manage your personal information and preferences.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center">
          <div className="relative w-32 h-32 mx-auto mb-6">
            <img 
              src={MOCK_USER.avatar} 
              alt="Profile" 
              className="w-full h-full rounded-full object-cover border-4 border-gray-50"
              referrerPolicy="no-referrer"
            />
            <button className="absolute bottom-0 right-0 p-2 bg-white border border-gray-100 rounded-full shadow-sm hover:bg-gray-50">
              <Camera className="w-4 h-4 text-gray-600" />
            </button>
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-1">{MOCK_USER.firstName} {MOCK_USER.lastName}</h2>
          <p className="text-xs text-gray-400 font-medium mb-6">john.doe@example.com</p>
          
          <div className="space-y-3 mb-8">
            <div className="flex items-center justify-between text-[10px] font-bold text-gray-400 uppercase tracking-wider">
              <span>Member since</span>
              <span className="text-gray-900">Jan 15, 2023</span>
            </div>
            <div className="flex items-center justify-between text-[10px] font-bold text-gray-400 uppercase tracking-wider">
              <span>Last login</span>
              <span className="text-gray-900">Today, 10:30 AM</span>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="w-full py-2 flex items-center justify-center gap-2 border border-gray-100 rounded-xl text-xs font-bold text-gray-600 hover:bg-gray-50 transition-all"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>

        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-1">Personal Information</h2>
            <p className="text-sm text-gray-500 mb-8">Update your personal details.</p>

            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">First Name</label>
                  <input 
                    type="text" 
                    defaultValue={MOCK_USER.firstName}
                    className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Last Name</label>
                  <input 
                    type="text" 
                    defaultValue={MOCK_USER.lastName}
                    className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Email</label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input 
                    type="email" 
                    defaultValue={MOCK_USER.email}
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Phone Number</label>
                <div className="relative">
                  <Phone className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input 
                    type="tel" 
                    defaultValue="+1 (555) 123-4567"
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-4 pt-4">
                <button type="button" className="px-6 py-2 text-xs font-bold text-gray-500 hover:text-gray-900">Cancel</button>
                <button type="submit" className="flex items-center gap-2 bg-emerald-500 text-white px-6 py-2 rounded-xl text-xs font-bold hover:bg-emerald-600 transition-all">
                  <Save className="w-4 h-4" />
                  Save Changes
                </button>
              </div>
            </form>
          </div>

          
        </div>
      </div>
    </div>
  );
}
