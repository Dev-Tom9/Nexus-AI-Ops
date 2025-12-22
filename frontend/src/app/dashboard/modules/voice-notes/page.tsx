"use client";
import React, { useState } from 'react';
import { 
  Mic, 
  Play, 
  Pause, 
  FileAudio, 
  ListCheck, 
  Sparkles, 
  Clock, 
  Volume2,
  FastForward,
  CheckCircle2
} from 'lucide-react';

export default function VoiceNotes() {
  const [isRecording, setIsRecording] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-enterprise-900 tracking-tight flex items-center gap-3">
          <Mic className="text-primary" size={32} />
          Meeting & Voice Intelligence
        </h1>
        <p className="text-slate-500 mt-2 font-medium">
          Transcribe audio, summarize meetings, and automatically extract action items from conversations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Recorder & Upload Area (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm text-center">
            <div className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center transition-all duration-500 ${isRecording ? 'bg-red-50 animate-pulse' : 'bg-blue-50'}`}>
               <Mic className={isRecording ? 'text-red-500' : 'text-primary'} size={40} />
            </div>
            
            <h3 className="text-xl font-bold text-enterprise-900 mt-6">
              {isRecording ? 'Recording in progress...' : 'Start Audio Capture'}
            </h3>
            <p className="text-sm text-slate-500 mt-2 mb-8">
              Capture your ideas or record a meeting live for instant processing.
            </p>

            <button 
              onClick={() => setIsRecording(!isRecording)}
              className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all ${
                isRecording 
                ? 'bg-red-500 text-white shadow-xl shadow-red-200' 
                : 'bg-primary text-white shadow-xl shadow-primary/20 hover:bg-primary-dark'
              }`}
            >
              {isRecording ? <Pause size={20} /> : <Play size={20} />}
              {isRecording ? 'Stop & Transcribe' : 'Start Recording'}
            </button>

            <div className="mt-6 pt-6 border-t border-slate-100">
               <button className="text-sm font-bold text-slate-400 hover:text-primary transition-colors flex items-center gap-2 mx-auto">
                 <FileAudio size={18} /> Or upload audio file (MP3, WAV)
               </button>
            </div>
          </div>

          <div className="bg-enterprise-900 rounded-[2rem] p-8 text-white">
            <h4 className="font-bold text-sm mb-4 uppercase tracking-widest text-primary">Live Transcription</h4>
            <div className="space-y-3 opacity-50">
               <div className="h-2 bg-white/20 rounded w-full" />
               <div className="h-2 bg-white/20 rounded w-4/5" />
               <div className="h-2 bg-white/20 rounded w-5/6" />
            </div>
            <p className="text-xs text-slate-500 mt-6 italic text-center">Waiting for audio input...</p>
          </div>
        </div>

        {/* Right: Analysis & Results (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white border border-slate-200 rounded-[2rem] shadow-sm overflow-hidden min-h-[500px] flex flex-col">
            <div className="p-6 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Sparkles className="text-primary" size={20} />
                <span className="font-bold text-enterprise-900">AI Meeting Summary</span>
              </div>
              <div className="flex gap-2">
                 <span className="px-3 py-1 bg-green-50 text-green-600 text-[10px] font-black uppercase rounded-lg">High Accuracy</span>
              </div>
            </div>

            {/* Transcription Content Placeholder */}
            <div className="flex-1 p-10">
               <div className="flex items-start gap-4 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-slate-400" />
                  </div>
                  <div className="space-y-4 w-full">
                    <div className="h-4 bg-slate-50 rounded w-1/4" />
                    <div className="space-y-2">
                       <div className="h-3 bg-slate-50 rounded w-full" />
                       <div className="h-3 bg-slate-50 rounded w-full" />
                       <div className="h-3 bg-slate-50 rounded w-3/4" />
                    </div>
                  </div>
               </div>

               <div className="mt-12">
                  <h4 className="flex items-center gap-2 font-bold text-enterprise-900 mb-6">
                    <ListCheck size={20} className="text-primary" />
                    Extracted Action Items
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[1, 2].map((i) => (
                      <div key={i} className="p-4 border border-slate-100 rounded-2xl flex items-center gap-3 bg-slate-50/30">
                        <div className="w-5 h-5 rounded-md border-2 border-slate-200" />
                        <div className="h-2.5 bg-slate-200 rounded w-2/3" />
                      </div>
                    ))}
                  </div>
               </div>

               <div className="mt-20 text-center opacity-20">
                  <Volume2 size={64} className="mx-auto text-slate-300 mb-4" />
                  <p className="font-bold text-slate-500">Analyze a meeting to see full intelligence report</p>
               </div>
            </div>

            {/* Controls */}
            <div className="p-6 border-t border-slate-100 flex justify-center gap-8 bg-slate-50/30">
               <button className="text-slate-400 hover:text-primary transition-colors"><FastForward size={24} className="rotate-180" /></button>
               <button className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-lg shadow-primary/20"><Play size={20} fill="currentColor" /></button>
               <button className="text-slate-400 hover:text-primary transition-colors"><FastForward size={24} /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
                }
              
