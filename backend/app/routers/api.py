import json
from pathlib import Path

from fastapi import APIRouter, HTTPException

from app.schemas import ContactRequest, ContactResponse
from app.services.email import send_contact_email

router = APIRouter(prefix="/api")

CONTENT_PATH = Path(__file__).resolve().parent.parent.parent / "content" / "site.json"


@router.get("/health")
async def health_check():
    return {"status": "ok", "version": "1.0.0"}


@router.get("/content")
async def get_content():
    """Serve site content from JSON for dynamic frontend loading."""
    if not CONTENT_PATH.exists():
        raise HTTPException(status_code=404, detail="Content file not found")
    with open(CONTENT_PATH, encoding="utf-8") as f:
        return json.load(f)


@router.post("/contact", response_model=ContactResponse)
async def submit_contact(form: ContactRequest):
    success = send_contact_email(
        name=form.name,
        email=form.email,
        subject=form.subject,
        message=form.message,
    )

    if not success:
        raise HTTPException(
            status_code=500,
            detail="Failed to process your message. Please try again later.",
        )

    return ContactResponse(
        success=True,
        message="Thank you for reaching out! I'll get back to you soon.",
    )
