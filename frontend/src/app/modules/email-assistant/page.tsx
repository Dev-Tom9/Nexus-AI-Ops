"use client";
import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  RefreshCcw, 
  Copy, 
  Languages, 
  Sparkles, 
  ChevronRight,
  Smile,
  Briefcase,
  AlertCircle
} from 'lucide-react';

export default function EmailAssistant() {
  const [tone, setTone] = useState('professional');

  const toneOptions = [
    { id: 'professional', label: 'Professional', icon: Briefcase, color: 'text-blue-600', bg: 'bg-blue-50' },
    { id: 'friendly', label: 'Friendly', icon: Smile, color: 'text-green-600', bg: 'bg-green-50' },
    { id: 'urgent', label: 'Urgent', icon: AlertCircle, color: 'text-red-600', bg: 'bg-red-50' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-enterprise-900 tracking-tight flex items-center gap-3">
          <Mail className="text-primary" size={32} />
          Email & Message Assistant
        </h1>
        <p className="text-slate-500 mt-2 font-medium">
          Refine drafts, translate messages, and generate context-aware responses instantly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: Input Console */}
        <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-enterprise-900">Input Draft</h3>
            <div className="flex gap-2">
              <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                <Languages size={18} />
              </button>
            </div>
          </div>

          <textarea 
            placeholder="Type your rough ideas here (e.g., 'Tell Bob the meeting is moved to Friday and I'm sorry for the delay')..."
            className="w-full h-64 p-6 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:ring-2 focus:ring-primary/20 outline-none resize-none placeholder:text-slate-400"
          />

          <div className="space-y-3">
            <label className="text-xs font-black uppercase tracking-widest text-slate-400 block px-1">Select Tone</label>
            <div className="grid grid-cols-3 gap-3">
              {toneOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setTone(opt.id)}
                  className={`flex flex-col items-center gap-2 p-4 rounded-2xl border transition-all ${
                    tone === opt.id 
                      ? `border-primary/50 ${opt.bg} shadow-sm` 
                      : 'border-slate-100 hover:border-slate-300'
                  }`}
                >
                  <opt.icon size={20} className={tone === opt.id ? opt.color : 'text-slate-400'} />
                  <span className={`text-xs font-bold ${tone === opt.id ? 'text-enterprise-900' : 'text-slate-500'}`}>
                    {opt.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <button className="w-full bg-primary text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-primary-dark transition-all shadow-xl shadow-primary/20 group">
            <Sparkles size={18} className="group-hover:animate-pulse" />
            Polish Message
          </button>
        </div>

        {/* Right: Output Console */}
        <div className="bg-enterprise-900 rounded-[2rem] shadow-2xl flex flex-col h-full overflow-hidden text-white">
          <div className="p-6 border-b border-white/10 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">AI Result</span>
            </div>
            <button className="flex items-center gap-2 text-xs font-bold text-primary hover:text-white transition-colors">
              <Copy size={14} /> Copy to Clipboard
            </button>
          </div>

          <div className="flex-1 p-8">
            {/* The Output Container */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full font-mono text-sm text-slate-300 leading-relaxed whitespace-pre-wrap italic">
              "Your polished message will appear here. Select a tone and click 'Polish Message' to see the transformation."
            </div>
          </div>

          <div className="p-6 bg-white/5 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <Send size={14} className="text-primary" />
              </div>
              <span className="text-xs font-medium text-slate-400 underline cursor-pointer hover:text-white transition">Direct Send to Gmail</span>
            </div>
            <button className="p-2 text-slate-400 hover:text-white transition-colors">
              <RefreshCcw size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
      }
              
