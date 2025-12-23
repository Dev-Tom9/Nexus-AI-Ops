from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
# 🚀 Added 'voice' to the import list
from app.api import auth, documents, reports, tasks, voice

app = FastAPI(
    title="Nexus AI-Ops Engine",
    description="The centralized AI brain for document intelligence and workflow automation.",
    version="1.0.0"
)

# 🛡️ SECURITY: Broaden CORS for GitHub Codespaces development
# Allowing all origins ["*"] ensures your Port 3000 frontend can always talk to Port 8000
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 🧩 MODULE REGISTRATION
# Each router handles a specific domain of the AI-Ops platform
app.include_router(auth.router, prefix="/api")
app.include_router(documents.router, prefix="/api")
app.include_router(reports.router, prefix="/api")
app.include_router(tasks.router, prefix="/api")
app.include_router(voice.router, prefix="/api")  # 🎙️ Voice endpoint registered

# 🏠 ROOT ENDPOINT
@app.get("/")
async def root():
    return {
        "project": "Nexus AI-Ops", 
        "status": "online",
        "engine": "Neural-v1",
        "modules": ["auth", "documents", "reports", "tasks", "voice"]
    }

# 🔍 HEALTH CHECK
@app.get("/health")
async def health():
    return {"status": "healthy", "uptime": "active"}