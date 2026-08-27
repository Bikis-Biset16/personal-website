import logging
import smtplib
from email.mime.text import MIMEText

from app.config import settings

logger = logging.getLogger(__name__)


def send_contact_email(name: str, email: str, subject: str, message: str) -> bool:
    """Send contact form notification. Falls back to console logging if SMTP is not configured."""
    body = f"""
New contact form submission:

Name: {name}
Email: {email}
Subject: {subject}

Message:
{message}
"""

    if not settings.smtp_host:
        logger.info("SMTP not configured. Contact form submission:\n%s", body)
        return True

    try:
        msg = MIMEText(body)
        msg["Subject"] = f"[Portfolio Contact] {subject}"
        msg["From"] = settings.smtp_user
        msg["To"] = settings.notify_email
        msg["Reply-To"] = email

        with smtplib.SMTP(settings.smtp_host, settings.smtp_port) as server:
            server.starttls()
            server.login(settings.smtp_user, settings.smtp_password)
            server.send_message(msg)

        return True
    except Exception:
        logger.exception("Failed to send email")
        return False
