import React from 'react';
import Link from 'next/link';
import { Cpu, ArrowRight, ShieldCheck, Zap, BarChart3 } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-primary-light/30 to-transparent -z-10" />

      {/* Header */}
      <nav className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="relative flex items-center justify-center w-10 h-10 bg-primary rounded-xl">
             <Cpu className="text-white z-10" size={24} />
             {/* The "Icon behind it" - a pulse effect */}
             <div className="absolute inset-0 bg-primary animate-ping rounded-xl opacity-20"></div>
          </div>
          <span className="text-2xl font-bold tracking-tight text-enterprise-900">
            Nexus <span className="text-primary">AI-Ops</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-enterprise-800">
          <Link href="#features">Features</Link>
          <Link href="/login" className="hover:text-primary transition">Sign In</Link>
          <Link href="/register" className="bg-enterprise-900 text-white px-5 py-2.5 rounded-lg hover:bg-black transition">
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 pt-20 pb-32 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-light border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-8">
          <Zap size={14} /> Intelligence for Enterprise
        </div>
        <h1 className="text-6xl md:text-7xl font-extrabold text-enterprise-900 mb-6 tracking-tighter">
          Automate the <br /> 
          <span className="text-primary">Operational Core</span>
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-slate-600 mb-10 leading-relaxed">
          Nexus AI-Ops is a senior-grade automation engine designed to handle document intelligence, 
          automated reporting, and task execution for modern teams.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/dashboard" className="group bg-primary text-white text-lg font-semibold px-8 py-4 rounded-xl shadow-xl shadow-primary/20 hover:bg-primary-dark transition-all flex items-center justify-center gap-2">
            Enter Dashboard <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <button className="bg-white border-2 border-slate-200 text-slate-700 text-lg font-semibold px-8 py-4 rounded-xl hover:bg-slate-50 transition">
            View Documentation
          </button>
        </div>

        {/* Feature Grid */}
        <div id="features" className="grid md:grid-cols-3 gap-8 mt-32 text-left">
          <div className="p-8 border border-slate-200 rounded-2xl bg-white hover:border-primary/50 transition shadow-sm">
            <ShieldCheck className="text-primary mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Secure RAG</h3>
            <p className="text-slate-600">Advanced Retrieval-Augmented Generation for private document intelligence.</p>
          </div>
          <div className="p-8 border border-slate-200 rounded-2xl bg-white hover:border-primary/50 transition shadow-sm">
            <BarChart3 className="text-primary mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Auto-Reporting</h3>
            <p className="text-slate-600">Turn raw unstructured data into professional executive summaries instantly.</p>
          </div>
          <div className="p-8 border border-slate-200 rounded-2xl bg-white hover:border-primary/50 transition shadow-sm">
            <Cpu className="text-primary mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Agentic Workflows</h3>
            <p className="text-slate-600">AI agents that don't just talk, but execute tasks across your ecosystem.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

