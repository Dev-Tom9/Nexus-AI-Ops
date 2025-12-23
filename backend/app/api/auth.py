from fastapi import APIRouter, HTTPException, status
from pydantic import BaseModel, EmailStr

router = APIRouter(tags=["Authentication"])

class LoginRequest(BaseModel):
    email: EmailStr
    password: str

@router.post("/login")
async def login(request: LoginRequest):
    # Log the attempt in the terminal for debugging
    print(f"Login attempt for: {request.email}")
    
    if request.email == "admin@nexus.ai" and request.password == "password123":
        return {
            "access_token": "nexus_mock_token_123",
            "token_type": "bearer",
            "user": {
                "email": request.email, 
                "role": "admin",
                "status": "authorized"
            }
        }
    
    raise HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Invalid credentials. Access denied.",
    )