"use client";

import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Mic, 
  Square, 
  Volume2, 
  Sparkles, 
  Activity, 
  Shield, 
  History,
  Info
} from 'lucide-react';
import Link from 'next/link';

export default function VoiceNotes() {
  const [isRecording, setIsRecording] = useState(false);
  const [timer, setTimer] = useState(0);

  // Simple timer logic for the recording
  useEffect(() => {
    let interval: any;
    if (isRecording) {
      interval = setInterval(() => setTimer(prev => prev + 1), 1000);
    } else {
      setTimer(0);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRecording]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="p-8 max-w-5xl mx-auto space-y-8">
      {/* Navigation & Header */}
      <div className="flex flex-col gap-4">
        <Link href="/dashboard" className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors group w-fit">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to Overview</span>
        </Link>
        
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight flex items-center gap-3">
              <Mic className="text-blue-600" size={36} />
              Voice Intelligence
            </h1>
            <p className="text-slate-500 mt-2 font-medium max-w-xl">
              Real-time neural transcription. Capture meetings, lectures, or memos with instant AI structuring.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="px-4 py-2 bg-slate-100 rounded-xl border border-slate-200 flex items-center gap-2">
              <Shield size={14} className="text-green-600" />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Biometric Encrypted</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Recording Console (7/12) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-2xl shadow-slate-200/50 overflow-hidden flex flex-col items-center justify-center p-12 relative min-h-[500px]">
            
            {/* Waveform Visualizer Decor */}
            <div className="flex items-end gap-1 mb-12 h-16">
              {[...Array(12)].map((_, i) => (
                <div 
                  key={i} 
                  className={`w-1.5 bg-blue-600 rounded-full transition-all duration-300 ${isRecording ? 'animate-bounce' : 'h-2'}`}
                  style={{ 
                    height: isRecording ? `${Math.random() * 100}%` : '8px',
                    animationDelay: `${i * 0.1}s` 
                  }}
                />
              ))}
            </div>

            {/* Main Record Button */}
            <button 
              onClick={() => setIsRecording(!isRecording)}
              className={`relative z-10 w-32 h-32 rounded-full flex items-center justify-center transition-all duration-500 shadow-2xl ${
                isRecording 
                ? 'bg-red-500 shadow-red-500/40 scale-110' 
                : 'bg-blue-600 shadow-blue-500/40 hover:scale-105'
              }`}
            >
              {isRecording ? (
                <Square size={40} className="text-white fill-white" />
              ) : (
                <Mic size={40} className="text-white" />
              )}
              
              {/* Radar pulse effect when recording */}
              {isRecording && (
                <div className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-20" />
              )}
            </button>

            <div className="mt-8 text-center">
              <div className="text-3xl font-mono font-black text-slate-900 mb-2">
                {formatTime(timer)}
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400">
                {isRecording ? "Neural Processing Active" : "Ready to Ingest Audio"}
              </p>
            </div>

            {/* Technical Specs Footer */}
            <div className="mt-12 flex gap-8 pt-8 border-t border-slate-50 w-full justify-center">
              <div className="flex items-center gap-2 text-slate-400">
                <Volume2 size={16} />
                <span className="text-[10px] font-bold">48kHz Lossless</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Activity size={16} />
                <span className="text-[10px] font-bold">VAD Triggered</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Live Transcription Context (5/12) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white h-full border border-slate-800 shadow-2xl flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold flex items-center gap-2">
                <Sparkles className="text-blue-400" size={18} />
                Live Transcription
              </h3>
              <History size={18} className="text-slate-600 hover:text-white cursor-pointer transition-colors" />
            </div>

            <div className="flex-1 bg-white/5 rounded-2xl p-6 border border-white/5 font-mono text-sm leading-relaxed overflow-y-auto max-h-[300px]">
              {isRecording ? (
                <div className="space-y-4">
                  <p className="text-blue-400">&gt; Initializing Audio Stream...</p>
                  <p className="text-slate-300 animate-pulse">&gt; Listening for semantic clusters...</p>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-30">
                  <Info size={32} />
                  <p className="text-xs tracking-wide uppercase font-bold">Audio buffer empty</p>
                </div>
              )}
            </div>

            <div className="mt-6 space-y-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between group hover:bg-white/10 transition-colors">
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">Active Model</span>
                  <span className="text-sm font-bold">Whisper-v3 Turbo</span>
                </div>
                <ChevronRight size={16} className="text-slate-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Small helper for the Chevron
function ChevronRight({ size, className }: { size: number, className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m9 18 6-6-6-6"/>
    </svg>
  );
}