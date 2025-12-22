"use client";
import React, { useState } from 'react';
import { 
  CheckSquare, 
  Filter, 
  Calendar, 
  AlertCircle, 
  MoreVertical,
  Zap,
  Play,
  CheckCircle2,
  Clock
} from 'lucide-react';

export default function TaskManager() {
  const [activeTab, setActiveTab] = useState('pending');

  const tasks = [
    { id: 1, title: 'Extract Action Items from Q4 PDF', source: 'Document Analyzer', priority: 'High', status: 'Pending' },
    { id: 2, title: 'Draft Response to Client Inquiry', source: 'Email Assistant', priority: 'Medium', status: 'Completed' },
    { id: 3, title: 'Summarize Project Alpha Meeting', source: 'Voice Notes', priority: 'Low', status: 'Processing' },
  ];

  return (
    <div className="space-y-6">
      {/* Header with Automation Status */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-enterprise-900 tracking-tight flex items-center gap-3">
            <CheckSquare className="text-primary" size={32} />
            Task Automation Engine
          </h1>
          <p className="text-slate-500 mt-2 font-medium">
            AI-generated actions tracked and synchronized across your workflow.
          </p>
        </div>
        <div className="flex gap-2 bg-white p-1.5 rounded-2xl border border-slate-200">
           <button 
             onClick={() => setActiveTab('pending')}
             className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${activeTab === 'pending' ? 'bg-primary text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'}`}
           >
             Pending
           </button>
           <button 
             onClick={() => setActiveTab('completed')}
             className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${activeTab === 'completed' ? 'bg-primary text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'}`}
           >
             History
           </button>
        </div>
      </div>

      {/* Automation Trigger Card */}
      <div className="bg-gradient-to-r from-enterprise-900 to-slate-800 rounded-[2rem] p-8 text-white relative overflow-hidden shadow-2xl">
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-[10px] font-black uppercase tracking-widest border border-primary/30">
               <Zap size={12} fill="currentColor" /> Active Sync
            </div>
            <h2 className="text-2xl font-bold">Automatic Task Extraction</h2>
            <p className="text-slate-400 text-sm max-w-md">
              Nexus AI is currently monitoring your Document and Email modules to automatically suggest new tasks.
            </p>
          </div>
          <button className="bg-white text-enterprise-900 px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-primary hover:text-white transition-all group shrink-0">
             <Play size={18} className="fill-current" /> Run Manual Sweep
          </button>
        </div>
        {/* Visual background element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
      </div>

      {/* Task Table/List */}
      <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center text-xs font-black uppercase tracking-widest text-slate-400">
          <div className="flex gap-12 ml-4">
             <span className="w-64 text-left">Task Description</span>
             <span className="w-40 text-left">Origin Module</span>
             <span className="w-24 text-left">Priority</span>
          </div>
          <span className="mr-4">Status</span>
        </div>

        <div className="divide-y divide-slate-50">
          {tasks.map((task) => (
            <div key={task.id} className="p-6 hover:bg-slate-50/80 transition-colors flex justify-between items-center group">
              <div className="flex gap-12 ml-4 items-center">
                <div className="w-64 text-sm font-bold text-enterprise-900 truncate">{task.title}</div>
                <div className="w-40 flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-primary/40" />
                   <span className="text-xs font-medium text-slate-500">{task.source}</span>
                </div>
                <div className="w-24">
                   <span className={`text-[10px] px-2 py-1 rounded-md font-black uppercase ${
                     task.priority === 'High' ? 'bg-red-50 text-red-600' : 'bg-slate-100 text-slate-500'
                   }`}>
                     {task.priority}
                   </span>
                </div>
              </div>

              <div className="flex items-center gap-6 mr-4">
                <div className="flex items-center gap-2">
                   {task.status === 'Completed' ? (
                     <CheckCircle2 size={18} className="text-green-500" />
                   ) : task.status === 'Processing' ? (
                     <Clock size={18} className="text-primary animate-spin" />
                   ) : (
                     <div className="w-[18px] h-[18px] border-2 border-slate-200 rounded-md" />
                   )}
                   <span className="text-xs font-bold text-enterprise-800">{task.status}</span>
                </div>
                <button className="p-2 text-slate-300 hover:text-enterprise-900 transition-colors">
                   <MoreVertical size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
            }
                
