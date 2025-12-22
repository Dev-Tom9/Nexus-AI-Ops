from fastapi import APIRouter, HTTPException, Depends, status
from pydantic import BaseModel
from datetime import datetime, timedelta

router = APIRouter(prefix="/auth", tags=["Authentication"])

class LoginRequest(BaseModel):
    email: str
    password: str

@router.post("/login")
async def login(request: LoginRequest):
    # Simulated check (Replace with DB lookup later)
    if request.email == "admin@nexus.ai" and request.password == "password123":
        return {
            "access_token": "nexus_mock_token_123",
            "token_type": "bearer",
            "user": {"email": request.email, "role": "admin"}
        }
    raise HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Invalid credentials"
    )
  
