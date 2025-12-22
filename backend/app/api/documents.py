from fastapi import APIRouter, UploadFile, File, HTTPException
from app.services.ai_client import ai_service
import PyPDF2
import io

router = APIRouter(prefix="/documents", tags=["Documents"])

@router.post("/analyze")
async def analyze_document(file: UploadFile = File(...)):
    # 1. Validation
    if not file.filename.endswith('.pdf'):
        raise HTTPException(status_code=400, detail="Only PDF files are supported")

    try:
        # 2. Extract Text from PDF
        content = await file.read()
        pdf_reader = PyPDF2.PdfReader(io.BytesIO(content))
        extracted_text = ""
        for page in pdf_reader.pages:
            extracted_text += page.extract_text() or ""

        # 3. Process with AI
        analysis = await ai_service.analyze_document(extracted_text)
        
        return {
            "filename": file.filename,
            "analysis": analysis,
            "char_count": len(extracted_text)
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Processing error: {str(e)}")
      
