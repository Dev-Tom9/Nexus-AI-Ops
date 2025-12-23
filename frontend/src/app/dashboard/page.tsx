"use client";

import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Mail, 
  Mic, 
  FileEdit, 
  CheckSquare, 
  ArrowUpRight, 
  Clock, 
  Database,
  ShieldCheck,
  Zap
} from 'lucide-react';
import Link from 'next/link';

// --- Senior AI Component: Animated Counter ---
function CountUp({ end, duration = 2000, suffix = "" }: { end: number, duration?: number, suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Use "easeOutExpo" for a smooth, high-end feel
      const easeOutValue = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeOutValue * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return <span>{count.toLocaleString()}{suffix}</span>;
}

export default function DashboardOverview() {
  const stats = [
    { label: 'Docs Processed', value: 1248, icon: FileText, color: 'text-blue-600', trend: '+12%' },
    { label: 'AI Responses', value: 8432, icon: Mail, color: 'text-purple-600', trend: '+24%' },
    { label: 'Voice Minutes', value: 450, icon: Mic, color: 'text-green-600', trend: '+8%', suffix: "m" },
    { label: 'Tasks Automated', value: 312, icon: CheckSquare, color: 'text-amber-600', trend: '+15%' },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-10">
      {/* Header */}
      <div className="flex justify-between items-end">
        <div>
          <div className="flex items-center gap-2 mb-2 text-blue-600 font-bold text-xs uppercase tracking-widest">
            <Zap size={14} fill="currentColor" /> System Live
          </div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">Intelligence Hub</h1>
          <p className="text-slate-500 mt-2 font-medium">Monitoring cross-module neural activity and data ingestion.</p>
        </div>
        <div className="hidden md:flex items-center gap-4 text-xs font-bold text-slate-400 bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
          <Clock size={14} /> Last update: Just now
        </div>
      </div>

      {/* Stats Grid with Animated Counters */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-xl shadow-slate-200/40 hover:border-blue-500/50 transition-all group">
            <div className="flex justify-between items-start mb-6">
              <div className={`p-4 rounded-2xl bg-slate-50 ${stat.color} group-hover:scale-110 transition-transform`}>
                <stat.icon size={24} />
              </div>
              <span className="text-xs font-black text-green-500 bg-green-50 px-2 py-1 rounded-lg">
                {stat.trend}
              </span>
            </div>
            <h3 className="text-3xl font-black text-slate-900 tracking-tighter">
              <CountUp end={stat.value} suffix={stat.suffix} />
            </h3>
            <p className="text-slate-500 text-sm font-bold uppercase tracking-wider mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Middle Section: System Health & RAG Status */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Database className="text-blue-400" /> Neural Context Storage
            </h3>
            <div className="space-y-6">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-400 font-bold uppercase tracking-widest">Vector Store Capacity</span>
                <span className="text-blue-400 font-black">78%</span>
              </div>
              <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 w-[78%] rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
              </div>
              <p className="text-slate-400 text-xs leading-relaxed max-w-md">
                Your AI instance is currently maintaining 1.2M embeddings across 4 isolated namespaces. All data is locally indexed and encrypted.
              </p>
            </div>
          </div>
          <div className="absolute top-0 right-0 p-10 opacity-5">
             <Zap size={200} />
          </div>
        </div>

        <div className="bg-white rounded-[2.5rem] border border-slate-200 p-8 shadow-xl shadow-slate-200/40">
           <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
             <ShieldCheck className="text-blue-600" size={20} />
             Security Audit
           </h3>
           <div className="space-y-4">
              {[
                { label: 'Data Encryption', status: 'Active' },
                { label: 'Model Isolation', status: 'Secure' },
                { label: 'Token Monitoring', status: 'Active' }
              ].map((item, idx) => (
                <div key={idx} className="flex justify-between items-center p-3 bg-slate-50 rounded-xl border border-slate-100">
                   <span className="text-xs font-bold text-slate-600">{item.label}</span>
                   <span className="text-[10px] font-black text-green-600 bg-green-100 px-2 py-1 rounded-md uppercase tracking-tighter">{item.status}</span>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
}