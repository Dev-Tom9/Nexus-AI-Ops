"use client";

import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  RefreshCcw, 
  Copy, 
  Languages, 
  Sparkles, 
  Smile,
  Briefcase,
  AlertCircle,
  ArrowLeft,
  Check
} from 'lucide-react';
import Link from 'next/link';

export default function EmailAssistant() {
  const [tone, setTone] = useState('professional');
  const [copied, setCopied] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const toneOptions = [
    { id: 'professional', label: 'Professional', icon: Briefcase, color: 'text-blue-600', bg: 'bg-blue-50' },
    { id: 'friendly', label: 'Friendly', icon: Smile, color: 'text-green-600', bg: 'bg-green-50' },
    { id: 'urgent', label: 'Urgent', icon: AlertCircle, color: 'text-red-600', bg: 'bg-red-50' },
  ];

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6">
      {/* Navigation & Header */}
      <div className="flex flex-col gap-4">
        <Link href="/dashboard" className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors group w-fit">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to Overview</span>
        </Link>
        
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight flex items-center gap-3">
            <Mail className="text-blue-600" size={36} />
            Email Intelligence
          </h1>
          <p className="text-slate-500 mt-2 font-medium max-w-2xl">
            AI-powered linguistic refinement. Professionalize drafts, adjust sentiment, and bridge communication gaps instantly.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* Left: Input Console */}
        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-xl shadow-slate-200/50 space-y-6 flex flex-col">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-900">Input Draft</h3>
            <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 text-slate-500 hover:text-blue-600 transition-colors text-xs font-bold uppercase tracking-wider">
              <Languages size={14} /> Detect Language
            </button>
          </div>

          <textarea 
            placeholder="Type your rough ideas here (e.g., 'Tell Bob the meeting is moved to Friday and I'm sorry for the delay')..."
            className="flex-1 w-full min-h-[300px] p-6 bg-slate-50 border border-slate-200 rounded-[1.5rem] text-sm focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none resize-none placeholder:text-slate-400 text-slate-700 leading-relaxed"
          />

          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 block px-1">Select Personality Tone</label>
            <div className="grid grid-cols-3 gap-3">
              {toneOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setTone(opt.id)}
                  className={`flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all ${
                    tone === opt.id 
                      ? `border-blue-500/50 ${opt.bg} shadow-md` 
                      : 'border-slate-50 hover:border-slate-200 bg-white'
                  }`}
                >
                  <opt.icon size={20} className={tone === opt.id ? opt.color : 'text-slate-400'} />
                  <span className={`text-[11px] font-bold uppercase tracking-wider ${tone === opt.id ? 'text-slate-900' : 'text-slate-500'}`}>
                    {opt.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <button 
            onClick={() => setIsGenerating(true)}
            className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/30 group active:scale-[0.98]"
          >
            <Sparkles size={20} className={isGenerating ? "animate-spin" : "group-hover:rotate-12 transition-transform"} />
            {isGenerating ? "OPTIMIZING..." : "POLISH MESSAGE"}
          </button>
        </div>

        {/* Right: Output Console (Dark Mode Style) */}
        <div className="bg-slate-900 rounded-[2.5rem] shadow-2xl flex flex-col min-h-[600px] overflow-hidden border border-slate-800">
          <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/5">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">AI Synthesis Core</span>
            </div>
            <button 
              onClick={handleCopy}
              className="flex items-center gap-2 text-xs font-bold text-blue-400 hover:text-white transition-colors py-1 px-3 rounded-lg hover:bg-white/5"
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              {copied ? "Copied!" : "Copy Result"}
            </button>
          </div>

          <div className="flex-1 p-8">
            <div className="bg-slate-800/40 border border-white/5 rounded-3xl p-8 h-full font-mono text-sm text-slate-300 leading-relaxed whitespace-pre-wrap relative group">
               <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-20 transition-opacity">
                  <Mail size={80} />
               </div>
               
               {isGenerating ? (
                 <div className="space-y-4 animate-pulse">
                   <div className="h-4 bg-slate-700 rounded w-3/4"></div>
                   <div className="h-4 bg-slate-700 rounded w-5/6"></div>
                   <div className="h-4 bg-slate-700 rounded w-1/2"></div>
                 </div>
               ) : (
                 <span className="italic text-slate-500">
                   "Generated text will appear here. The AI will preserve your intent while optimizing for impact and professional clarity."
                 </span>
               )}
            </div>
          </div>

          <div className="p-8 bg-black/20 border-t border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-5 py-2.5 bg-blue-600/10 text-blue-400 rounded-xl text-xs font-bold hover:bg-blue-600 hover:text-white transition-all border border-blue-500/20">
                <Send size={14} /> Send to Outlook
              </button>
              <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest hidden sm:block">Direct SMTP Link Ready</span>
            </div>
            <button 
              onClick={() => setIsGenerating(false)}
              className="p-3 text-slate-500 hover:text-white transition-colors bg-white/5 rounded-xl hover:rotate-180 duration-500"
            >
              <RefreshCcw size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}