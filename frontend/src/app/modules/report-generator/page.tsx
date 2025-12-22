"use client";
import React, { useState } from 'react';
import { FileEdit, FileText, Download, Wand2, Layout, ListChecks, Type } from 'lucide-react';

export default function ReportGenerator() {
  const [reportType, setReportType] = useState('weekly');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-enterprise-900 tracking-tight flex items-center gap-3">
            <FileEdit className="text-primary" size={32} />
            Smart Report Generator
          </h1>
          <p className="text-slate-500 mt-2 font-medium">
            Transform project notes and bullet points into professional executive reports.
          </p>
        </div>
        <button className="flex items-center gap-2 bg-enterprise-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-black transition shadow-lg">
          <Download size={18} />
          Export as PDF
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Input Form (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-enterprise-900 mb-6 flex items-center gap-2">
              <Layout size={20} className="text-primary" />
              Report Configuration
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2 block">Report Type</label>
                <select 
                  value={reportType}
                  onChange={(e) => setReportType(e.target.value)}
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:ring-2 focus:ring-primary/20 outline-none"
                >
                  <option value="weekly">Weekly Status Report</option>
                  <option value="project">Project Post-Mortem</option>
                  <option value="executive">Executive Summary</option>
                  <option value="financial">Financial Overview</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2 block">Input Notes / Data</label>
                <textarea 
                  placeholder="Paste your bullet points, meeting notes, or raw data here..."
                  rows={8}
                  className="w-full p-5 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:ring-2 focus:ring-primary/20 outline-none resize-none"
                />
              </div>

              <button className="w-full bg-primary text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-primary-dark transition-all shadow-xl shadow-primary/20 mt-4 group">
                <Wand2 size={20} className="group-hover:rotate-12 transition-transform" />
                Generate Professional Report
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Live Preview (7 cols) */}
        <div className="lg:col-span-7">
          <div className="bg-white border border-slate-200 rounded-[2rem] shadow-sm min-h-[600px] flex flex-col overflow-hidden">
            {/* Toolbar */}
            <div className="p-4 border-b border-slate-100 flex items-center gap-4 bg-slate-50/50">
               <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
               </div>
               <div className="h-4 w-[1px] bg-slate-200 mx-2" />
               <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Preview Mode</span>
            </div>

            {/* Document Content (Mocked) */}
            <div className="p-12 space-y-8 flex-1">
              <div className="space-y-2 border-b-2 border-primary w-fit pb-2">
                <h2 className="text-3xl font-black text-enterprise-900 uppercase tracking-tighter">Nexus AI-Ops</h2>
                <p className="text-sm font-bold text-primary italic">Executive Intelligence Report</p>
              </div>

              <div className="space-y-4">
                <div className="h-4 bg-slate-100 rounded w-1/4 animate-pulse" />
                <div className="h-8 bg-slate-100 rounded w-3/4 animate-pulse" />
                <div className="space-y-2">
                  <div className="h-3 bg-slate-50 rounded w-full" />
                  <div className="h-3 bg-slate-50 rounded w-full" />
                  <div className="h-3 bg-slate-50 rounded w-2/3" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-12">
                <div className="p-6 border border-slate-100 rounded-2xl space-y-3">
                  <ListChecks className="text-primary" size={24} />
                  <div className="h-3 bg-slate-100 rounded w-1/2" />
                  <div className="h-3 bg-slate-100 rounded w-full" />
                </div>
                <div className="p-6 border border-slate-100 rounded-2xl space-y-3">
                  <Type className="text-primary" size={24} />
                  <div className="h-3 bg-slate-100 rounded w-1/2" />
                  <div className="h-3 bg-slate-100 rounded w-full" />
                </div>
              </div>

              <div className="flex flex-col items-center justify-center pt-20 text-slate-300">
                 <FileText size={48} className="mb-2 opacity-20" />
                 <p className="text-sm font-medium">Generate a report to see preview</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
                }

