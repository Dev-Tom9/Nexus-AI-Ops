import React from 'react';
import Link from 'next/link';
import { Cpu, ArrowRight, ShieldCheck, Zap, BarChart3, Globe, Lock } from 'lucide-react';

export default function LandingPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="relative min-h-screen flex flex-col bg-white">
      {/* 1. Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-primary-light/40 to-transparent -z-10" />

      {/* 2. Navigation */}
      <nav className="max-w-7xl mx-auto w-full px-6 py-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="relative flex items-center justify-center w-10 h-10 bg-primary rounded-xl shadow-lg shadow-primary/20">
             <Cpu className="text-white z-10" size={24} />
             {/* Icon Behind It Effect */}
             <div className="absolute inset-0 bg-primary animate-ping rounded-xl opacity-20"></div>
          </div>
          <span className="text-2xl font-bold tracking-tight text-enterprise-900">
            Nexus <span className="text-primary">AI-Ops</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-enterprise-800">
          <Link href="#features" className="hover:text-primary transition">Features</Link>
          <Link href="/login" className="hover:text-primary transition">Sign In</Link>
          <Link href="/register" className="bg-enterprise-900 text-white px-6 py-2.5 rounded-xl hover:bg-black transition-all shadow-md">
            Get Started
          </Link>
        </div>
      </nav>

      {/* 3. Hero Section */}
      <main className="flex-grow max-w-7xl mx-auto px-6 pt-20 pb-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-10">
          <Zap size={14} className="fill-primary" /> The Future of Internal Ops
        </div>
        
        <h1 className="text-6xl md:text-8xl font-extrabold text-enterprise-900 mb-8 tracking-tighter leading-[1.1]">
          Automate your <br /> 
          <span className="text-primary italic">Business Logic</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-xl text-slate-600 mb-12 leading-relaxed">
          Nexus AI-Ops is the central intelligence hub for your company. 
          Analyze documents, generate executive reports, and automate tasks with 
          enterprise-grade AI agents.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <Link href="/dashboard" className="group bg-primary text-white text-lg font-bold px-10 py-5 rounded-2xl shadow-2xl shadow-primary/30 hover:bg-primary-dark transition-all flex items-center justify-center gap-3">
            Enter Command Center <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <button className="bg-white border-2 border-slate-200 text-slate-700 text-lg font-bold px-10 py-5 rounded-2xl hover:bg-slate-50 hover:border-slate-300 transition-all">
            Explore Features
          </button>
        </div>

        {/* 4. Feature Grid */}
        <div id="features" className="grid md:grid-cols-3 gap-8 mt-40 text-left">
          <div className="group p-10 border border-slate-200 rounded-[2rem] bg-white hover:border-primary/40 transition-all shadow-sm hover:shadow-xl hover:shadow-primary/5">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="text-primary" size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-enterprise-900">Secure RAG</h3>
            <p className="text-slate-500 leading-relaxed">Advanced Retrieval-Augmented Generation keeps your private company data secure and searchable.</p>
          </div>

          <div className="group p-10 border border-slate-200 rounded-[2rem] bg-white hover:border-primary/40 transition-all shadow-sm hover:shadow-xl hover:shadow-primary/5">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BarChart3 className="text-primary" size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-enterprise-900">Auto-Reporting</h3>
            <p className="text-slate-500 leading-relaxed">Instantly transform raw project notes into professional, high-impact executive summaries and PDF reports.</p>
          </div>

          <div className="group p-10 border border-slate-200 rounded-[2rem] bg-white hover:border-primary/40 transition-all shadow-sm hover:shadow-xl hover:shadow-primary/5">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="text-primary" size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-enterprise-900">AI Workflows</h3>
            <p className="text-slate-500 leading-relaxed">Deploy smart agents that connect your internal tools to automate repetitive admin work and emails.</p>
          </div>
        </div>
      </main>

      {/* 5. Professional Footer */}
      <footer className="border-t border-slate-100 bg-slate-50/80 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 bg-enterprise-900 rounded-xl">
                <Cpu className="text-white" size={20} />
              </div>
              <span className="text-xl font-black tracking-tighter text-enterprise-900">
                NEXUS <span className="text-primary">AI-OPS</span>
              </span>
            </div>

            <nav className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-sm font-semibold text-slate-500">
              <Link href="#" className="hover:text-primary transition">Security</Link>
              <Link href="#" className="hover:text-primary transition">Privacy Policy</Link>
              <Link href="#" className="hover:text-primary transition">Terms of Service</Link>
              <Link href="#" className="hover:text-primary transition">Contact Support</Link>
            </nav>

            <div className="flex items-center gap-2 text-slate-400">
                <Lock size={14} />
                <span className="text-xs font-bold uppercase tracking-widest">Enterprise Grade</span>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200/50 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm font-medium">
              © {currentYear} <span className="text-enterprise-900 font-bold">Nexus AI-Ops</span>. All Rights Reserved.
            </p>
            <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-slate-200/50 flex items-center justify-center hover:bg-primary/10 transition-colors cursor-pointer">
                    <div className="w-2 h-2 rounded-full bg-slate-400" />
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-200/50 flex items-center justify-center hover:bg-primary/10 transition-colors cursor-pointer">
                    <div className="w-2 h-2 rounded-full bg-slate-400" />
                </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
