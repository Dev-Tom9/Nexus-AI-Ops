"use client";

import React, { useState } from 'react';
import { 
  FileText, 
  Upload, 
  Search, 
  Sparkles, 
  ShieldCheck, 
  ArrowLeft, 
  Database, 
  Layers,
  CheckCircle2,
  Loader2
} from 'lucide-react';
import Link from 'next/link';

export default function DocumentIntelligence() {
  const [isUploading, setIsUploading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'uploading' | 'indexing' | 'ready'>('idle');

  // Simulated AI Processing Flow
  const handleUpload = () => {
    setIsUploading(true);
    setStatus('uploading');
    
    // Simulate RAG Pipeline steps
    setTimeout(() => setStatus('indexing'), 2000);
    setTimeout(() => {
      setStatus('ready');
      setIsUploading(false);
    }, 4000);
  };

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6">
      {/* Navigation & Header */}
      <div className="flex flex-col gap-4">
        <Link href="/dashboard" className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors group w-fit">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to Overview</span>
        </Link>
        
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight flex items-center gap-3">
              <FileText className="text-blue-600" size={36} />
              Doc Intelligence
            </h1>
            <p className="text-slate-500 mt-2 font-medium max-w-xl">
              Advanced RAG pipeline: Upload docs to chunk, embed, and query your private data with AI.
            </p>
          </div>
          
          <div className="hidden md:flex gap-4">
            <div className="text-right">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Vector Store</p>
              <p className="text-sm font-bold text-slate-900 flex items-center gap-1 justify-end">
                <Database size={14} className="text-green-500" /> Connected
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Control Panel (4/12) */}
        <div className="lg:col-span-4 space-y-6">
          {/* Enhanced Upload Zone */}
          <div 
            onClick={handleUpload}
            className={`relative overflow-hidden bg-white border-2 border-dashed rounded-[2.5rem] p-10 flex flex-col items-center justify-center text-center transition-all group cursor-pointer ${
              status === 'ready' ? 'border-green-500 bg-green-50/30' : 'border-slate-200 hover:border-blue-500/50'
            }`}
          >
            <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${
              status === 'ready' ? 'bg-green-100' : 'bg-blue-50'
            }`}>
              {status === 'uploading' || status === 'indexing' ? (
                <Loader2 className="text-blue-600 animate-spin" size={32} />
              ) : status === 'ready' ? (
                <CheckCircle2 className="text-green-600" size={32} />
              ) : (
                <Upload className="text-blue-600" size={32} />
              )}
            </div>
            
            <h3 className="font-bold text-xl text-slate-900">
              {status === 'idle' && "Drop Documents"}
              {status === 'uploading' && "Uploading..."}
              {status === 'indexing' && "AI Indexing..."}
              {status === 'ready' && "Data Ingested"}
            </h3>
            <p className="text-sm text-slate-500 mt-2">PDF, DOCX up to 20MB</p>
            
            {status === 'indexing' && (
              <div className="absolute bottom-0 left-0 h-1 bg-blue-600 animate-[loading_2s_ease-in-out_infinite] w-full"></div>
            )}
          </div>

          {/* AI Pipeline Status Card */}
          <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Layers size={100} />
            </div>
            
            <h4 className="font-bold mb-6 flex items-center gap-2">
              <ShieldCheck className="text-blue-400" size={20} />
              Enterprise Security
            </h4>
            
            <ul className="space-y-4 relative z-10">
              <li className="flex items-start gap-3 text-xs text-slate-400">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1" />
                AES-256 Document Encryption
              </li>
              <li className="flex items-start gap-3 text-xs text-slate-400">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1" />
                Zero-Retention AI Processing
              </li>
              <li className="flex items-start gap-3 text-xs text-slate-400">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1" />
                Isolated Vector Namespaces
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: Analysis Console (8/12) */}
        <div className="lg:col-span-8 bg-white border border-slate-200 rounded-[2.5rem] shadow-xl shadow-slate-200/50 flex flex-col h-[650px] overflow-hidden">
          {/* Header */}
          <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
            <div className="flex items-center gap-3 text-slate-900">
              <Sparkles className="text-blue-600" size={20} />
              <span className="font-bold italic">Nexus Insight Console</span>
            </div>
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${status === 'ready' ? 'bg-green-500 animate-pulse' : 'bg-slate-300'}`} />
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                {status === 'ready' ? 'Live Context' : 'Offline'}
              </span>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 p-12 flex flex-col items-center justify-center text-center">
            {status !== 'ready' ? (
              <>
                <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mb-6 border border-slate-100">
                  <Search className="text-slate-300" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Awaiting Data Ingestion</h3>
                <p className="text-slate-500 max-w-sm mx-auto mt-3 leading-relaxed">
                  Upload a business document to begin the deep analysis. Our AI will map the knowledge for querying.
                </p>
              </>
            ) : (
              <div className="w-full h-full text-left font-mono text-sm text-slate-600">
                 <div className="p-4 bg-blue-50 rounded-xl mb-4 border border-blue-100 text-blue-700">
                    &gt; Document "nexus_ops_v1.pdf" analyzed. 124 chunks embedded.
                 </div>
                 <div className="space-y-4">
                    <p className="animate-pulse">AI is ready for questions...</p>
                 </div>
              </div>
            )}
          </div>

          {/* Advanced Query Input */}
          <div className="p-8 border-t border-slate-100 bg-white">
            <div className="relative group">
              <input 
                type="text" 
                disabled={status !== 'ready'}
                placeholder={status === 'ready' ? "Ask anything about the document..." : "Upload a file first..."}
                className="w-full pl-6 pr-16 py-5 bg-slate-100 border-2 border-transparent rounded-[2rem] text-sm focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <button 
                disabled={status !== 'ready'}
                className="absolute right-2.5 top-2.5 bottom-2.5 bg-slate-900 text-white px-6 rounded-[1.5rem] hover:bg-blue-600 transition-all shadow-xl disabled:bg-slate-200"
              >
                <Sparkles size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}