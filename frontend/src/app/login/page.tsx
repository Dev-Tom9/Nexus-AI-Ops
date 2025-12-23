"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Cpu, Lock, Mail, ArrowRight, ShieldCheck, Loader2 } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // ✅ UPDATED: Now uses Environment Variables with a fallback to your Render Backend
      const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://nexus-ai-backend-sr8a.onrender.com';
      
      const response = await fetch(`${API_URL}/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.trim(), password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('nexus_access_token', data.access_token);
        router.push('/dashboard');
      } else {
        setError(data.detail || 'Access Denied: Invalid Credentials');
      }
    } catch (err) {
      console.error("Connection Error:", err);
      // ✅ UPDATED: Error message is now more helpful for production
      setError('Connection Failed. The AI Engine is unreachable. Please check your internet or server status.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[20%] left-[20%] w-[300px] h-[300px] bg-blue-50 blur-[100px] rounded-full opacity-50" />
        <div className="absolute bottom-[20%] right-[20%] w-[300px] h-[300px] bg-slate-100 blur-[100px] rounded-full opacity-50" />
      </div>

      <div className="w-full max-w-[440px] animate-in fade-in zoom-in-95 duration-500">
        <div className="text-center mb-10">
          <Link href="/" className="inline-flex items-center gap-2 mb-8 group">
            <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Cpu className="text-blue-400" size={22} />
            </div>
            <span className="text-2xl font-black tracking-tighter text-slate-900 uppercase">
              Nexus <span className="text-blue-600">AI</span>
            </span>
          </Link>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Access Console</h1>
          <p className="text-slate-500 font-medium mt-2">Enter your credentials to manage your neural network.</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-[2.5rem] p-10 shadow-2xl shadow-slate-200/60">
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-600 text-xs font-bold rounded-xl animate-shake">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-1">Authorized Email</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-600 transition-colors">
                  <Mail size={18} />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-11 pr-4 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl text-sm font-bold placeholder:text-slate-400 focus:bg-white focus:border-blue-600 focus:outline-none transition-all"
                  placeholder="admin@nexus.ai"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between px-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Secure Password</label>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-600 transition-colors">
                  <Lock size={18} />
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-11 pr-4 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl text-sm font-bold placeholder:text-slate-400 focus:bg-white focus:border-blue-600 focus:outline-none transition-all"
                  placeholder="••••••••••••"
                />
              </div>
            </div>

            <button
              disabled={isLoading}
              type="submit"
              className="w-full flex items-center justify-center gap-3 bg-slate-900 text-white py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl shadow-slate-900/10 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed group"
            >
              {isLoading ? <Loader2 className="animate-spin" size={18} /> : "Establish Connection"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
