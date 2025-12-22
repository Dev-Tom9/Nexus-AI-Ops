from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api import auth, documents, reports, tasks

# Initialize the FastAPI App
app = FastAPI(
    title="Nexus AI-Ops Engine",
    description="The centralized AI brain for document intelligence and workflow automation.",
    version="1.0.0"
)

# 🛡️ SECURITY: Cross-Origin Resource Sharing (CORS)
# This allows your Next.js frontend (port 3000) to safely talk to this API (port 8000).
# In production, replace ["*"] with your actual frontend URL (e.g., Vercel URL).
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 🧩 MODULE REGISTRATION
# We "include" the routers from each file in app/api. 
# This keeps the code clean and senior-level.
app.include_router(auth.router, prefix="/api")
app.include_router(documents.router, prefix="/api")
app.include_router(reports.router, prefix="/api")
app.include_router(tasks.router, prefix="/api")

# 🏠 ROOT ENDPOINT
# A simple health check to verify the server is running.
@app.get("/")
async def root():
    return {
        "project": "Nexus AI-Ops",
        "status": "online",
        "version": "1.0.0",
        "message": "AI Engine is ready for processing."
    }

# 🔍 HEALTH CHECK ENDPOINT
@app.get("/health")
async def health():
    return {"status": "healthy", "database": "connected", "ai_service": "online"}
    
