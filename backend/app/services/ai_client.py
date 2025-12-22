import os
from pathlib import Path
from openai import OpenAI
from dotenv import load_dotenv

# Senior Level: Explicitly locate the .env file relative to this file's location
# This goes up two levels from /app/services/ to the /backend/ root
base_dir = Path(__file__).resolve().parent.parent.parent
env_path = base_dir / ".env"

# Load the environment variables
load_dotenv(dotenv_path=env_path)

class AIService:
    def __init__(self):
        # Retrieve the key
        api_key = os.getenv("OPENAI_API_KEY")
        
        # Validation: Stop the server early if the key is missing
        if not api_key or "YOUR_ACTUAL_KEY" in api_key:
            print(f"❌ ERROR: OpenAI API Key not found at {env_path}")
            self.client = None
        else:
            # Initializing the OpenAI client
            self.client = OpenAI(api_key=api_key)

    async def analyze_document(self, text_content: str):
        """Standard RAG-style document analysis."""
        if not self.client:
            return "AI Error: OpenAI API Key is not configured."
            
        try:
            response = self.client.chat.completions.create(
                model="gpt-4o",
                messages=[
                    {"role": "system", "content": "You are a Senior Business Analyst. Summarize this document and identify key risks."},
                    {"role": "user", "content": text_content[:15000]} 
                ]
            )
            return response.choices[0].message.content
        except Exception as e:
            return f"AI Error: {str(e)}"

    async def generate_report(self, raw_notes: str, report_type: str):
        """Converts messy notes into structured markdown."""
        if not self.client:
            return "AI Error: OpenAI API Key is not configured."

        try:
            response = self.client.chat.completions.create(
                model="gpt-4o",
                messages=[
                    {"role": "system", "content": f"You are an expert in {report_type}. Convert notes into a professional markdown report."},
                    {"role": "user", "content": raw_notes}
                ]
            )
            return response.choices[0].message.content
        except Exception as e:
            return f"AI Error: {str(e)}"

# Singleton instance for the whole app to use
ai_service = AIService()
