from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api import documents, reports, tasks

app = FastAPI(
    title="Nexus AI-Ops Engine",
    description="Enterprise-grade AI automation backend",
    version="1.0.0"
)

# Senior Level: Proper CORS configuration for Frontend/Backend communication
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace with specific domain in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Registering the Module Routers
app.include_router(documents.router)
app.include_router(reports.router)
app.include_router(tasks.router)

@app.get("/")
async def root():
    return {
        "project": "Nexus AI-Ops",
        "status": "online",
        "engine": "FastAPI + OpenAI GPT-4o"
    }
  
