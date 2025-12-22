import os
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()

class AIService:
    def __init__(self):
        # Initializing the OpenAI client with your key from .env
        self.client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

    async def analyze_document(self, text_content: str):
        """Standard RAG-style document analysis."""
        try:
            response = self.client.chat.completions.create(
                model="gpt-4o",
                messages=[
                    {"role": "system", "content": "You are a Senior Business Analyst. Summarize this document and identify key risks."},
                    {"role": "user", "content": text_content[:15000]} # Truncate to avoid token limits
                ]
            )
            return response.choices[0].message.content
        except Exception as e:
            return f"AI Error: {str(e)}"

    async def generate_report(self, raw_notes: str, report_type: str):
        """Converts messy notes into structured markdown."""
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
  
