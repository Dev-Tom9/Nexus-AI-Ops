from pydantic import BaseModel
from typing import List, Optional

class TaskBase(BaseModel):
    title: str
    source: str
    priority: str
    status: str = "Pending"

class ReportRequest(BaseModel):
    notes: str
    report_type: str
    tone: Optional[str] = "Professional"

class AnalysisResponse(BaseModel):
    filename: str
    summary: str
    action_items: List[str]
    risk_score: float

