import { API_URL } from './config';

// ✅ Dynamic Base URL
const API_BASE_URL = `${API_URL}/api`;

export const api = {
  // Module 1: Document Intelligence
  analyzeDocument: async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch(`${API_BASE_URL}/documents/analyze`, {
      method: "POST",
      body: formData,
    });
    if (!response.ok) throw new Error('Document analysis failed');
    return response.json();
  },

  // Module 2: Report Generator
  generateReport: async (notes: string, reportType: string) => {
    const response = await fetch(`${API_BASE_URL}/reports/generate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ notes, report_type: reportType }),
    });
    if (!response.ok) throw new Error('Report generation failed');
    return response.json();
  },

  // Module 4: Task Manager
  getTasks: async () => {
    const response = await fetch(`${API_BASE_URL}/tasks`);
    if (!response.ok) throw new Error('Failed to fetch tasks');
    return response.json();
  },

  // Auth: Login
  login: async (credentials: any) => {
    // ✅ Ensure this matches your backend route (/api/login or /api/auth/login)
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    return response.json();
  }
};