"use client";

import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Cpu, 
  Key, 
  Shield, 
  User, 
  Palette, 
  Save, 
  RefreshCcw,
  ChevronRight,
  Globe,
  Lock,
  Zap,
  Trash2,
  Check
} from 'lucide-react';
import Link from 'next/link';

export default function SystemSettings() {
  const [activeTab, setActiveTab] = useState('engine');
  const [isSaving, setIsSaving] = useState(false);

  const tabs = [
    { id: 'engine', label: 'AI Engine', icon: Cpu, description: 'Model & Logic' },
    { id: 'keys', label: 'API Keys', icon: Key, description: 'External Connections' },
    { id: 'security', label: 'Security', icon: Shield, description: 'Privacy & Logs' },
    { id: 'identity', label: 'Identity', icon: User, description: 'Persona & Voice' },
    { id: 'appearance', label: 'Display', icon: Palette, description: 'UI Preferences' },
  ];

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => setIsSaving(false), 1500);
  };

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <Link href="/dashboard" className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors group w-fit">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to Overview</span>
        </Link>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight">System Settings</h1>
            <p className="text-slate-500 mt-2 font-medium">Configure the core neural architecture and workspace protocols.</p>
          </div>
          <button 
            onClick={handleSave}
            className="flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-2xl font-black text-xs hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 active:scale-95 whitespace-nowrap"
          >
            {isSaving ? <RefreshCcw size={16} className="animate-spin" /> : <Save size={16} />}
            {isSaving ? "SYNCING..." : "SAVE CONFIGURATION"}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Vertical Navigation (4 cols) */}
        <div className="lg:col-span-4 space-y-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-4 p-5 rounded-[1.5rem] transition-all border-2 text-left ${
                activeTab === tab.id 
                ? 'bg-slate-900 border-slate-900 shadow-xl' 
                : 'bg-white border-transparent hover:border-slate-200 text-slate-600'
              }`}
            >
              <div className={`p-3 rounded-xl ${activeTab === tab.id ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                <tab.icon size={22} />
              </div>
              <div className="flex-1">
                <p className={`text-sm font-black uppercase tracking-wider ${activeTab === tab.id ? 'text-white' : 'text-slate-900'}`}>
                  {tab.label}
                </p>
                <p className={`text-[11px] font-medium ${activeTab === tab.id ? 'text-slate-400' : 'text-slate-500'}`}>
                  {tab.description}
                </p>
              </div>
              <ChevronRight size={18} className={activeTab === tab.id ? 'text-blue-500' : 'text-slate-300'} />
            </button>
          ))}
        </div>

        {/* Right: Content Area (8 cols) */}
        <div className="lg:col-span-8 bg-white rounded-[2.5rem] border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden">
          <div className="p-10">
            
            {/* 1. AI ENGINE TAB */}
            {activeTab === 'engine' && (
              <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-6">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                    <Cpu size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">AI Engine Parameters</h3>
                </div>
                <div className="grid gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-1">Primary Neural Model</label>
                    <select className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl text-sm font-bold text-slate-700 outline-none focus:border-blue-500 transition-all">
                      <option>GPT-4o (High Intelligence)</option>
                      <option>GPT-4o-Mini (Performance Optimized)</option>
                      <option>Claude 3.5 Sonnet</option>
                      <option>Local Llama 3 (Privacy Mode)</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between px-1">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Response Temperature</label>
                      <span className="text-xs font-black text-blue-600">0.7</span>
                    </div>
                    <input type="range" className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-1">System Instructions</label>
                    <textarea 
                      className="w-full p-5 bg-slate-50 border-2 border-slate-100 rounded-2xl text-sm min-h-[120px] outline-none focus:border-blue-500"
                      placeholder="Define the AI global behavior..."
                    />
                  </div>
                </div>
              </div>
            )}

            {/* 2. API KEYS TAB */}
            {activeTab === 'keys' && (
              <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-6">
                  <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center text-amber-600">
                    <Key size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Connection Credentials</h3>
                </div>
                <div className="space-y-6">
                  <div className="p-6 bg-slate-900 rounded-[1.5rem] text-white relative overflow-hidden">
                    <div className="relative z-10 flex items-center gap-4">
                      <Lock className="text-blue-400" size={24} />
                      <p className="text-sm font-bold">End-to-End Encryption Active</p>
                    </div>
                    <Zap className="absolute right-[-20px] bottom-[-20px] text-white/5" size={120} />
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-1">OpenAI Key</label>
                      <input type="password" placeholder="sk-••••••••" className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl text-sm font-mono outline-none focus:border-blue-500" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 3. SECURITY TAB */}
            {activeTab === 'security' && (
              <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-6">
                  <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center text-red-600">
                    <Shield size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Privacy & Data Governance</h3>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <div>
                      <p className="text-sm font-bold text-slate-900">Local Vector Storage</p>
                      <p className="text-xs text-slate-500">Isolate RAG data to local memory.</p>
                    </div>
                    <div className="w-12 h-6 bg-blue-600 rounded-full flex items-center px-1 cursor-pointer">
                      <div className="w-4 h-4 bg-white rounded-full ml-auto" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-1">Retention Policy</label>
                    <select className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl text-sm font-bold outline-none">
                      <option>Delete logs after 24 hours</option>
                      <option>Delete logs after 7 days</option>
                    </select>
                  </div>
                  <button className="w-full py-4 border-2 border-red-100 text-red-600 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-red-50 transition-colors flex items-center justify-center gap-2">
                    <Trash2 size={14} /> Wipe Neural Memory
                  </button>
                </div>
              </div>
            )}

            {/* 4. IDENTITY TAB */}
            {activeTab === 'identity' && (
              <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-6">
                  <div className="w-10 h-10 bg-purple-50 rounded-full flex items-center justify-center text-purple-600">
                    <User size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">AI Persona & Brand Voice</h3>
                </div>
                <div className="grid gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-1">Organization Name</label>
                    <input type="text" placeholder="Nexus Ops AI" className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl text-sm font-bold outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-1">Brand Voice</label>
                    <div className="flex gap-2">
                      {['Professional', 'Technical', 'Friendly'].map((tone) => (
                        <button key={tone} className={`flex-1 p-3 rounded-xl border-2 text-xs font-bold transition-all ${tone === 'Technical' ? 'border-blue-600 bg-blue-50 text-blue-600' : 'border-slate-100 text-slate-500'}`}>
                          {tone}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 5. DISPLAY TAB */}
            {activeTab === 'appearance' && (
              <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-6">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                    <Palette size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Interface Preferences</h3>
                </div>
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-6 rounded-2xl border-2 border-blue-600 bg-blue-50/50 flex flex-col items-center gap-3 cursor-pointer">
                       <div className="w-full h-12 bg-white rounded-lg border border-slate-200" />
                       <span className="text-[10px] font-black text-blue-600 uppercase">Light Protocol</span>
                    </div>
                    <div className="p-6 rounded-2xl border-2 border-slate-100 bg-slate-900 flex flex-col items-center gap-3 cursor-pointer group">
                       <div className="w-full h-12 bg-slate-800 rounded-lg border border-slate-700" />
                       <span className="text-[10px] font-black text-slate-400 uppercase group-hover:text-white">Neural Dark</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>

          <div className="p-8 bg-slate-50 border-t border-slate-100 flex items-center gap-2">
            <Globe size={14} className="text-slate-400" />
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Environment: Production-Cloud-v1.0.4</span>
          </div>
        </div>
      </div>
    </div>
  );
}