"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation'; // Added useRouter
import { 
  Cpu, 
  LayoutDashboard, 
  FileSearch, 
  FileEdit, 
  Mail, 
  CheckSquare, 
  Mic, 
  Settings,
  LogOut 
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const menuItems = [
  { name: 'Overview', icon: LayoutDashboard, href: '/dashboard' },
  { name: 'Doc Intelligence', icon: FileSearch, href: '/dashboard/documents' },
  { name: 'Report Gen', icon: FileEdit, href: '/dashboard/reports' },
  { name: 'Email Assist', icon: Mail, href: '/dashboard/email' },
  { name: 'Task Manager', icon: CheckSquare, href: '/dashboard/tasks' },
  { name: 'Voice Notes', icon: Mic, href: '/dashboard/voice' },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter(); // Initialize router

  const handleLogout = () => {
    // Logic for logging out (clearing cookies/storage) goes here
    router.push('/'); // Redirect to landing page
  };

  return (
    <aside className="w-64 bg-slate-900 text-white flex flex-col h-full border-r border-slate-800 shadow-2xl z-50">
      <div className="p-6 flex items-center gap-3">
        <div className="relative flex items-center justify-center w-8 h-8 bg-blue-600 rounded-lg shadow-lg">
          <Cpu size={18} className="text-white z-10" />
          <div className="absolute inset-0 bg-blue-500 animate-pulse rounded-lg opacity-40"></div>
        </div>
        <span className="font-bold text-lg tracking-tight text-white">
          Nexus <span className="text-blue-500">AI</span>
        </span>
      </div>

      <nav className="flex-1 px-4 space-y-1.5 mt-4 overflow-y-auto">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group",
                isActive 
                  ? "bg-blue-600 text-white shadow-lg" 
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
              )}
            >
              <item.icon 
                size={20} 
                className={cn(
                  isActive ? "text-white" : "group-hover:text-blue-400 transition-colors"
                )} 
              />
              <span className="font-medium text-sm">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-800 space-y-1">
        <Link 
          href="/dashboard/settings" 
          className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white transition-colors rounded-xl hover:bg-white/5"
        >
          <Settings size={20} />
          <span className="text-sm font-medium">System Settings</span>
        </Link>
        {/* UPDATED: Logout button with logic */}
        <button 
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-xl transition-colors group"
        >
          <LogOut size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
}