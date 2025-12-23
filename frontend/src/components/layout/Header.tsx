"use client";

import React from 'react';
import { Bell, Search, UserCircle } from 'lucide-react';

export default function Header() {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shadow-sm w-full">
      {/* Search Bar */}
      <div className="relative w-96">
        <span className="absolute inset-y-0 left-3 flex items-center text-slate-400">
          <Search size={18} />
        </span>
        <input 
          type="text" 
          placeholder="Search for documents or tasks..."
          className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-900"
        />
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center gap-6">
        <button className="relative text-slate-500 hover:text-blue-600 transition-colors">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        
        <div className="flex items-center gap-3 border-l pl-6 border-slate-200">
          <div className="text-right">
            <p className="text-xs font-bold text-slate-900">Senior Engineer</p>
            <p className="text-[10px] text-slate-500 font-medium italic">Admin Access</p>
          </div>
          <UserCircle size={32} className="text-slate-300" />
        </div>
      </div>
    </header>
  );
}