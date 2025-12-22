"use client";
import React, { useState } from 'react';
import { FileText, Upload, Search, Sparkles, ShieldCheck } from 'lucide-react';

export default function DocumentAnalyzer() {
  const [isUploading, setIsUploading] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header Area */}
      <div>
        <h1 className="text-3xl font-bold text-enterprise-900 tracking-tight flex items-center gap-3">
          <FileText className="text-primary" size={32} />
          Document Intelligence
        </h1>
        <p className="text-slate-500 mt-2 font-medium">
          Upload PDFs or Docs to extract data, summarize content, and query information using RAG.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Upload Zone */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white border-2 border-dashed border-slate-200 rounded-[2rem] p-10 flex flex-col items-center justify-center text-center hover:border-primary/50 transition-colors group cursor-pointer">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Upload className="text-primary" size={28} />
            </div>
            <p className="font-bold text-enterprise-900">Drop files here</p>
            <p className="text-xs text-slate-400 mt-1 uppercase font-black tracking-widest">PDF, DOCX up to 20MB</p>
          </div>

          <div className="bg-enterprise-900 rounded-[2rem] p-6 text-white shadow-xl">
            <div className="flex items-center gap-2 mb-4">
               <ShieldCheck className="text-primary" size={20} />
               <span className="text-sm font-bold">Privacy Guaranteed</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Documents are encrypted and processed within your secure enterprise instance. Data is never used for training public models.
            </p>
          </div>
        </div>

        {/* Right: Analysis & Chat */}
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-[2rem] shadow-sm flex flex-col h-[600px] overflow-hidden">
          {/* Analysis Header */}
          <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
            <div className="flex items-center gap-3">
               <Sparkles className="text-primary" size={20} />
               <span className="font-bold text-enterprise-900">AI Insights Console</span>
            </div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Ready to analyze</span>
          </div>

          {/* Empty State / Chat Content */}
          <div className="flex-1 p-8 flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-4">
               <Search className="text-slate-300" size={32} />
            </div>
            <h3 className="text-lg font-bold text-enterprise-900">No Document Selected</h3>
            <p className="text-slate-500 max-w-xs mx-auto text-sm mt-2">
              Upload a business document on the left to start the deep analysis and querying process.
            </p>
          </div>

          {/* Bottom Query Bar */}
          <div className="p-6 border-t border-slate-100 bg-white">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Ask the AI about your document..."
                className="w-full pl-5 pr-14 py-4 bg-slate-100 border-none rounded-2xl text-sm focus:ring-2 focus:ring-primary/20 transition-all outline-none"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-primary text-white px-4 rounded-xl hover:bg-primary-dark transition shadow-lg shadow-primary/20">
                <Sparkles size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
            }

