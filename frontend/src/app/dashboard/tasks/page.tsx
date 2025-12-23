"use client";

import React, { useState } from 'react';
import { 
  CheckSquare, 
  Filter, 
  Calendar, 
  MoreVertical,
  Zap,
  Play,
  CheckCircle2,
  Clock,
  ArrowLeft,
  Plus,
  RefreshCw,
  Search
} from 'lucide-react';
import Link from 'next/link';

export default function TaskManager() {
  const [activeTab, setActiveTab] = useState('pending');
  const [isSyncing, setIsSyncing] = useState(false);

  const tasks = [
    { id: 1, title: 'Extract Action Items from Q4 PDF', source: 'Doc Intelligence', priority: 'High', status: 'Pending', time: '2h ago' },
    { id: 2, title: 'Draft Response to Client Inquiry', source: 'Email Assist', priority: 'Medium', status: 'Completed', time: '5h ago' },
    { id: 3, title: 'Summarize Project Alpha Meeting', source: 'Voice Notes', priority: 'Low', status: 'Processing', time: 'Just now' },
  ];

  const handleManualSweep = () => {
    setIsSyncing(true);
    setTimeout(() => setIsSyncing(false), 2500);
  };

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Navigation & Header */}
      <div className="flex flex-col gap-4">
        <Link href="/dashboard" className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors group w-fit">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to Overview</span>
        </Link>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight flex items-center gap-3">
              <CheckSquare className="text-blue-600" size={36} />
              Automation Engine
            </h1>
            <p className="text-slate-500 mt-2 font-medium max-w-xl">
              Centralized neural hub for tasks extracted from Doc Intelligence, Email, and Voice processing.
            </p>
          </div>
          
          <div className="flex gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
             <button 
               onClick={() => setActiveTab('pending')}
               className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${activeTab === 'pending' ? 'bg-white text-blue-600 shadow-sm border border-slate-200' : 'text-slate-500 hover:bg-slate-200/50'}`}
             >
               Live Queue
             </button>
             <button 
               onClick={() => setActiveTab('completed')}
               className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${activeTab === 'completed' ? 'bg-white text-blue-600 shadow-sm border border-slate-200' : 'text-slate-500 hover:bg-slate-200/50'}`}
             >
               Archive
             </button>
          </div>
        </div>
      </div>

      {/* FIXED: Hero Automation Card */}
      <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl border border-slate-800">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] border border-blue-500/20 mb-4">
             <Zap size={12} className="fill-current" /> Auto-Extraction Enabled
          </div>
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight text-white">AI Cross-Module Sync</h2>
              <p className="text-slate-400 text-sm max-w-lg leading-relaxed">
                Nexus AI is monitoring your workspace. Tasks found in documents or transcripts are automatically triaged here.
              </p>
            </div>
            
            {/* Buttons properly aligned within the box content flow */}
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={handleManualSweep}
                className="bg-white text-slate-900 px-6 py-3.5 rounded-xl font-black text-xs flex items-center gap-2 hover:bg-blue-500 hover:text-white transition-all group shadow-xl active:scale-95"
              >
                 <RefreshCw size={16} className={isSyncing ? "animate-spin" : "group-hover:rotate-180 duration-500"} /> 
                 {isSyncing ? "SCANNING..." : "RUN SWEEP"}
              </button>
              
              <button className="bg-blue-600 text-white px-6 py-3.5 rounded-xl font-black text-xs flex items-center gap-2 hover:bg-blue-700 transition-all shadow-xl active:scale-95 border border-blue-400/20">
                 <Plus size={16} /> CREATE TASK
              </button>
            </div>
          </div>
        </div>
        
        {/* Background Decoration */}
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      {/* Modern Task Table */}
      <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden">
        {/* Table Toolbar */}
        <div className="p-6 border-b border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="Filter tasks..." 
              className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs focus:ring-4 focus:ring-blue-500/10 outline-none"
            />
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors">
              <Filter size={14} /> Sort By Priority
            </button>
            <button className="flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors">
              <Calendar size={14} /> Date
            </button>
          </div>
        </div>

        {/* Task Entries */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 border-b border-slate-50">
                <th className="px-8 py-5">Task Logic & Description</th>
                <th className="px-8 py-5">Source Node</th>
                <th className="px-8 py-5">Urgency</th>
                <th className="px-8 py-5 text-right">Operational Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {tasks.map((task) => (
                <tr key={task.id} className="group hover:bg-blue-50/30 transition-all cursor-pointer">
                  <td className="px-8 py-6 text-slate-900">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold group-hover:text-blue-600 transition-colors">{task.title}</span>
                      <span className="text-[10px] text-slate-400 font-medium mt-1 uppercase tracking-wider">{task.time}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2">
                       <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                       <span className="text-xs font-bold text-slate-600">{task.source}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className={`text-[10px] px-3 py-1 rounded-full font-black uppercase tracking-tighter ${
                      task.priority === 'High' ? 'bg-red-100 text-red-600' : 
                      task.priority === 'Medium' ? 'bg-amber-100 text-amber-600' : 
                      'bg-slate-100 text-slate-500'
                    }`}>
                      {task.priority}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center justify-end gap-6">
                      <div className="flex items-center gap-2">
                        {task.status === 'Completed' ? (
                          <div className="flex items-center gap-1.5 bg-green-50 text-green-600 px-3 py-1 rounded-lg border border-green-100">
                             <CheckCircle2 size={14} />
                             <span className="text-[11px] font-black uppercase">Resolved</span>
                          </div>
                        ) : task.status === 'Processing' ? (
                          <div className="flex items-center gap-1.5 bg-blue-50 text-blue-600 px-3 py-1 rounded-lg border border-blue-100">
                             <Clock size={14} className="animate-spin" />
                             <span className="text-[11px] font-black uppercase">Analyzing</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-1.5 bg-slate-50 text-slate-400 px-3 py-1 rounded-lg border border-slate-100">
                             <div className="w-2.5 h-2.5 border-2 border-slate-300 rounded-sm" />
                             <span className="text-[11px] font-black uppercase tracking-tighter">Queueing</span>
                          </div>
                        )}
                      </div>
                      <button className="p-2 text-slate-300 hover:text-slate-900 transition-colors bg-slate-50 rounded-lg group-hover:bg-white border border-transparent group-hover:border-slate-200">
                        <MoreVertical size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}