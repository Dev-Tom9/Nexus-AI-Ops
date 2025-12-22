"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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

// Helper for tailwind class merging
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const menuItems = [
  { name: 'Overview', icon: LayoutDashboard, href: '/dashboard' },
  { name: 'Doc Intelligence', icon: FileSearch, href: '/dashboard/modules/document-analyzer' },
  { name: 'Report Gen', icon: FileEdit, href: '/dashboard/modules/report-generator' },
  { name: 'Email Assist', icon: Mail, href: '/dashboard/modules/email-assistant' },
  { name: 'Task Manager', icon: CheckSquare, href: '/dashboard/modules/task-manager' },
  { name: 'Voice Notes', icon: Mic, href: '/dashboard/modules/voice-notes' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-enterprise-900 text-white flex flex-col h-full border-r border-slate-800 shadow-2xl">
      {/* Brand Logo */}
      <div className="p-6 flex items-center gap-3">
        <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg shadow-lg shadow-primary/40">
          <Cpu size={18} className="text-white" />
        </div>
        <span className="font-bold text-lg tracking-tight">Nexus AI</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-2 mt-4">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group",
                isActive 
                  ? "bg-primary text-white shadow-lg shadow-primary/20" 
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              )}
            >
              <item.icon size={20} className={cn(isActive ? "text-white" : "group-hover:text-primary transition-colors")} />
              <span className="font-medium text-sm">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom Actions */}
      <div className="p-4 border-t border-slate-800 space-y-2">
        <Link href="/dashboard/settings" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white transition-colors">
          <Settings size={20} />
          <span className="text-sm font-medium">Settings</span>
        </Link>
        <button className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-xl transition-colors">
          <LogOut size={20} />
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
                      }

