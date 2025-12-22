import React from 'react';
import { 
  FileText, 
  Zap, 
  Clock, 
  CheckCircle2, 
  ArrowUpRight,
  Plus
} from 'lucide-react';

export default function DashboardOverview() {
  const stats = [
    { name: 'Total Automations', value: '1,284', change: '+12%', icon: Zap, color: 'text-blue-600' },
    { name: 'Docs Analyzed', value: '452', change: '+5.4%', icon: FileText, color: 'text-purple-600' },
    { name: 'Hours Saved', value: '84h', change: '+18%', icon: Clock, color: 'text-green-600' },
    { name: 'Tasks Completed', value: '92%', change: '+2%', icon: CheckCircle2, color: 'text-orange-600' },
  ];

  return (
    <div className="space-y-8">
      {/* 1. Welcome Header */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-enterprise-900 tracking-tight">System Overview</h1>
          <p className="text-slate-500 mt-1 font-medium">Welcome back, Chief AI Architect.</p>
        </div>
        <button className="bg-primary text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:bg-primary-dark transition shadow-lg shadow-primary/20">
          <Plus size={18} /> New Automation
        </button>
      </div>

      {/* 2. Stats Grid (Classic SaaS Look) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-xl bg-slate-50 group-hover:bg-primary/5 transition-colors`}>
                <stat.icon size={24} className={stat.color} />
              </div>
              <span className="flex items-center gap-1 text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-lg">
                <ArrowUpRight size={14} /> {stat.change}
              </span>
            </div>
            <p className="text-sm font-semibold text-slate-500">{stat.name}</p>
            <p className="text-2xl font-bold text-enterprise-900 mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* 3. Bottom Layout: Activity + Module Quick Links */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity (Left 2/3) */}
        <div className="lg:col-span-2 bg-white rounded-[2rem] border border-slate-200 shadow-sm p-8">
          <h3 className="text-xl font-bold text-enterprise-900 mb-6">Recent Automations</h3>
          <div className="space-y-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center justify-between py-4 border-b border-slate-50 last:border-0">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-primary font-bold text-xs">AI</div>
                  <div>
                    <p className="text-sm font-bold text-enterprise-900">Weekly Sales Report Generated</p>
                    <p className="text-xs text-slate-400 font-medium">Completed via Report Generator • 12 mins ago</p>
                  </div>
                </div>
                <button className="text-xs font-bold text-primary hover:underline">View Details</button>
              </div>
            ))}
          </div>
        </div>

        {/* System Health (Right 1/3) */}
        <div className="bg-enterprise-900 rounded-[2rem] p-8 text-white shadow-xl">
          <h3 className="text-xl font-bold mb-4">AI Engine Status</h3>
          <p className="text-slate-400 text-sm mb-8 leading-relaxed">All neural models are running at peak efficiency. Latency is currently 140ms.</p>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-400">RAG Engine</span>
              <span className="text-green-400 font-bold">Active</span>
            </div>
            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-primary w-[90%] h-full"></div>
            </div>
            
            <div className="flex justify-between items-center text-sm mt-6">
              <span className="text-slate-400">Task Router</span>
              <span className="text-green-400 font-bold">Active</span>
            </div>
            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-primary w-[75%] h-full"></div>
            </div>
          </div>

          <div className="mt-10 p-4 bg-white/5 border border-white/10 rounded-2xl">
             <p className="text-[10px] uppercase font-black tracking-widest text-primary mb-1">Upcoming Task</p>
             <p className="text-sm font-bold">Scheduled Email Sweep</p>
             <p className="text-xs text-slate-400 mt-1">Happening in 45 minutes</p>
          </div>
        </div>
      </div>
    </div>
  );
                }

