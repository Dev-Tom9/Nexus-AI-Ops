from fastapi import APIRouter
from pydantic import BaseModel
from typing import List

router = APIRouter(prefix="/tasks", tags=["Tasks"])

class Task(BaseModel):
    title: str
    source: str
    priority: str

@router.get("/")
async def get_tasks():
    # This will eventually pull from a database
    return [
        {"title": "Review Q4 Analysis", "source": "Doc Intelligence", "priority": "High"},
        {"title": "Email follow-up to HR", "source": "Email Assistant", "priority": "Medium"}
    ]
  
