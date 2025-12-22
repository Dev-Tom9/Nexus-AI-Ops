from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from app.services.ai_client import ai_service

router = APIRouter(prefix="/reports", tags=["Reports"])

class ReportRequest(BaseModel):
    notes: str
    report_type: str

@router.post("/generate")
async def generate_report(request: ReportRequest):
    try:
        content = await ai_service.generate_report(request.notes, request.report_type)
        return {"status": "success", "content": content}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
      
