"use client";

import React, { useState } from 'react';
import { 
  FileEdit, 
  FileText, 
  Download, 
  Wand2, 
  Layout, 
  ListChecks, 
  Type, 
  ArrowLeft,
  Sparkles,
  ChevronRight,
  Printer
} from 'lucide-react';
import Link from 'next/link';

export default function ReportGenerator() {
  const [reportType, setReportType] = useState('weekly');
  const [isGenerating, setIsGenerating] = useState(false);

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6">
      {/* Navigation & Header */}
      <div className="flex flex-col gap-4">
        <Link href="/dashboard" className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors group w-fit">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to Overview</span>
        </Link>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight flex items-center gap-3">
              <FileEdit className="text-blue-600" size={36} />
              AI Report Engine
            </h1>
            <p className="text-slate-500 mt-2 font-medium max-w-xl">
              Synthesize unstructured data into board-ready executive reports using advanced NLP pattern recognition.
            </p>
          </div>
          <button className="flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-black transition-all shadow-xl shadow-slate-200 active:scale-95">
            <Download size={18} />
            Export PDF
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Input Form (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-xl shadow-slate-200/50">
            <h3 className="text-lg font-bold text-slate-900 mb-8 flex items-center gap-2">
              <Layout size={20} className="text-blue-600" />
              Report Configuration
            </h3>
            
            <div className="space-y-6">
              <div>
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3 block px-1">Structure Template</label>
                <select 
                  value={reportType}
                  onChange={(e) => setReportType(e.target.value)}
                  className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl text-sm font-semibold text-slate-700 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all appearance-none cursor-pointer"
                >
                  <option value="weekly">Weekly Status Report</option>
                  <option value="project">Project Post-Mortem</option>
                  <option value="executive">Executive Summary</option>
                  <option value="financial">Financial Overview</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3 block px-1">Raw Input Data / Notes</label>
                <textarea 
                  placeholder="Paste meeting transcript, rough bullet points, or raw data metrics..."
                  className="w-full p-6 bg-slate-50 border-2 border-slate-100 rounded-[1.5rem] text-sm focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none resize-none min-h-[320px] text-slate-700 leading-relaxed"
                />
              </div>

              <button 
                onClick={() => setIsGenerating(true)}
                className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/30 group"
              >
                <Wand2 size={20} className={isGenerating ? "animate-spin" : "group-hover:rotate-12 transition-transform"} />
                {isGenerating ? "GENERATING..." : "GENERATE AI REPORT"}
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Live Preview (7 cols) */}
        <div className="lg:col-span-7">
          <div className="bg-white border border-slate-200 rounded-[2.5rem] shadow-2xl min-h-[700px] flex flex-col overflow-hidden">
            {/* Browser-style Toolbar */}
            <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
               <div className="flex items-center gap-4">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-slate-200" />
                    <div className="w-3 h-3 rounded-full bg-slate-200" />
                    <div className="w-3 h-3 rounded-full bg-slate-200" />
                  </div>
                  <div className="h-4 w-[1px] bg-slate-300 mx-1" />
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Live Render Preview</span>
               </div>
               <Printer size={16} className="text-slate-300 hover:text-slate-600 cursor-pointer transition-colors" />
            </div>

            {/* Document Content */}
            <div className="p-16 space-y-10 flex-1 relative">
              {/* Report Header Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-bl-full -z-0" />
              
              <div className="space-y-3 border-l-4 border-blue-600 pl-6 relative z-10">
                <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">Nexus AI <span className="text-blue-600">Ops</span></h2>
                <p className="text-xs font-bold text-blue-600 uppercase tracking-[0.3em] flex items-center gap-2">
                   Intelligence Unit <ChevronRight size={12} /> {reportType.replace('-', ' ')}
                </p>
              </div>

              {/* Skeleton Content */}
              <div className="space-y-8 opacity-40 select-none pointer-events-none">
                <div className="space-y-4">
                  <div className="h-2 bg-slate-100 rounded-full w-1/4" />
                  <div className="h-10 bg-slate-100 rounded-2xl w-3/4" />
                  <div className="space-y-3 pt-2">
                    <div className="h-3 bg-slate-50 rounded-full w-full" />
                    <div className="h-3 bg-slate-50 rounded-full w-full" />
                    <div className="h-3 bg-slate-50 rounded-full w-2/3" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-8 pt-8">
                  <div className="p-8 border-2 border-slate-50 rounded-[2rem] space-y-4">
                    <ListChecks className="text-blue-200" size={32} />
                    <div className="h-3 bg-slate-100 rounded-full w-1/2" />
                    <div className="h-3 bg-slate-50 rounded-full w-full" />
                  </div>
                  <div className="p-8 border-2 border-slate-50 rounded-[2rem] space-y-4">
                    <Type className="text-blue-200" size={32} />
                    <div className="h-3 bg-slate-100 rounded-full w-1/2" />
                    <div className="h-3 bg-slate-50 rounded-full w-full" />
                  </div>
                </div>
              </div>

              {/* Empty State Overlay */}
              {!isGenerating && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/60 backdrop-blur-[2px] z-20">
                   <div className="w-20 h-20 bg-white shadow-2xl rounded-3xl flex items-center justify-center mb-6 border border-slate-100 rotate-3">
                      <Sparkles size={32} className="text-blue-600" />
                   </div>
                   <h3 className="text-xl font-bold text-slate-900">Ready for Synthesis</h3>
                   <p className="text-slate-500 text-sm mt-2 font-medium">Input your data and click generate to populate report.</p>
                </div>
              )}
              
              {isGenerating && (
                 <div className="absolute inset-x-0 bottom-20 flex justify-center z-30">
                    <div className="bg-slate-900 text-white px-6 py-3 rounded-full text-xs font-bold flex items-center gap-3 shadow-2xl animate-bounce">
                       <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping" />
                       AI IS DRAFTING DOCUMENT...
                    </div>
                 </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}