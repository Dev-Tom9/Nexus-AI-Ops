"use client";

import React from 'react';
import Link from 'next/link';
import { Cpu, ArrowRight, ShieldCheck, Zap, BarChart3, Globe, Lock, Sparkles, ChevronRight } from 'lucide-react';

export default function LandingPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="relative min-h-screen flex flex-col bg-white overflow-x-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] pointer-events-none -z-10">
        <div className="absolute top-[-5%] left-[10%] w-[400px] h-[400px] bg-blue-50 blur-[120px] rounded-full opacity-60" />
      </div>

      {/* Navigation */}
      <nav className="max-w-7xl mx-auto w-full px-6 py-6 flex justify-between items-center border-b border-slate-50">
        <div className="flex items-center gap-2">
          <div className="relative flex items-center justify-center w-9 h-9 bg-slate-900 rounded-xl shadow-lg">
             <Cpu className="text-blue-400 z-10" size={20} />
             <div className="absolute inset-0 bg-blue-600 animate-pulse rounded-xl opacity-20"></div>
          </div>
          <span className="text-xl font-extrabold tracking-tight text-slate-900 uppercase">
            Nexus <span className="text-blue-600 font-black tracking-tighter">AI-Ops</span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-[11px] font-black uppercase tracking-widest">
          <Link href="#features" className="text-slate-500 hover:text-blue-600 transition">Features</Link>
          <Link href="/login" className="text-slate-900 hover:text-blue-600 transition">Sign In</Link>
          <Link href="/login" className="bg-slate-900 text-white px-6 py-2.5 rounded-xl hover:bg-blue-600 transition-all shadow-xl shadow-slate-900/10 active:scale-95">
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section - Centered for First Scroll Focus */}
      <main className="flex-grow flex flex-col items-center justify-center min-h-[85vh] max-w-7xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-8 animate-in fade-in slide-in-from-top-4 duration-700">
          <Sparkles size={14} className="fill-blue-600" /> Enterprise Intelligence Hub
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-[1.05] animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
          Automate your <br /> 
          <span className="text-blue-600 italic">Business Logic</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg text-slate-500 mb-12 font-medium leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
          Nexus AI-Ops orchestrates your company intelligence. Analyze documents, 
          generate executive reports, and automate tasks with enterprise-grade AI agents.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <Link href="/login" className="group bg-blue-600 text-white text-sm font-black uppercase tracking-widest px-12 py-5 rounded-2xl shadow-2xl shadow-blue-600/20 hover:bg-slate-900 transition-all flex items-center justify-center gap-3 active:scale-95">
            Launch Console <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="#features" className="bg-white border-2 border-slate-100 text-slate-700 text-sm font-black uppercase tracking-widest px-12 py-5 rounded-2xl hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center">
            Explore Features
          </Link>
        </div>
      </main>

      {/* Secondary Scroll Content */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-24 space-y-12 text-left border-t border-slate-50">
        
        {/* GLOBAL INFRASTRUCTURE - Social Proof Bridge */}
        <div className="flex flex-wrap justify-between items-center p-8 bg-slate-900 rounded-[2.5rem] gap-6 shadow-2xl relative overflow-hidden group animate-in fade-in duration-1000">
          <div className="flex items-center gap-5 relative z-10">
            <div className="p-4 bg-blue-600 text-white rounded-2xl shadow-lg shadow-blue-500/40 group-hover:scale-110 transition-transform">
              <Globe size={24} />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 mb-1">Network Status: Optimal</p>
              <p className="text-sm font-bold text-white uppercase tracking-tight">Global Infrastructure Active</p>
              <p className="text-[11px] font-medium text-slate-400 mt-0.5">Low-latency edge processing across 24 regions.</p>
            </div>
          </div>

          <div className="flex items-center gap-6 relative z-10">
              <div className="flex -space-x-3 cursor-help">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-4 border-slate-900 bg-slate-800" />
                ))}
                <div className="w-10 h-10 rounded-full border-4 border-slate-900 bg-blue-600 flex items-center justify-center text-[10px] font-black text-white">+2k</div>
              </div>
              <div className="h-8 w-[1px] bg-slate-800 hidden sm:block" />
              <button className="text-white hover:text-blue-400 transition-colors">
                  <ChevronRight size={20} />
              </button>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[80px] -mr-32 -mt-32" />
        </div>

        {/* FEATURE CARDS */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="group p-8 border border-slate-200 rounded-[2.5rem] bg-white hover:border-blue-500/30 transition-all shadow-sm">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <ShieldCheck size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900 tracking-tight">Secure RAG</h3>
            <p className="text-slate-500 text-sm font-medium leading-relaxed">Private vector embeddings for your documents. Hardware-level data isolation.</p>
          </div>

          <div className="group p-8 border border-slate-200 rounded-[2.5rem] bg-white hover:border-blue-500/30 transition-all shadow-sm">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <BarChart3 size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900 tracking-tight">Auto-Reporting</h3>
            <p className="text-slate-500 text-sm font-medium leading-relaxed">Transform raw notes into high-impact executive summaries and PDF reports.</p>
          </div>

          <div className="group p-8 border border-slate-200 rounded-[2.5rem] bg-white hover:border-blue-500/30 transition-all shadow-sm">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Zap size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900 tracking-tight">AI Workflows</h3>
            <p className="text-slate-500 text-sm font-medium leading-relaxed">Connect voice, email, and docs into a single automated task queue.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100 bg-slate-50/50 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Cpu className="text-slate-400" size={20} />
            <span className="text-sm font-black text-slate-900 tracking-tighter uppercase">Nexus AI</span>
          </div>
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">
            © {currentYear} All Rights Reserved
          </p>
          <div className="flex items-center gap-2 text-slate-300">
             <Lock size={12} />
             <span className="text-[10px] font-bold uppercase tracking-widest">Enterprise Secured</span>
          </div>
        </div>
      </footer>
    </div>
  );
}