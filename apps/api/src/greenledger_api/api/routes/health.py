from fastapi import APIRouter, HTTPException
from sqlalchemy import text

from greenledger_api.config.settings import get_settings
from greenledger_api.db.session import get_session_factory

router = APIRouter(tags=["health"])


@router.get("/health")
def health() -> dict[str, str]:
    settings = get_settings()
    return {
        "status": "ok",
        "service": settings.app_name,
        "environment": settings.app_env,
    }


@router.get("/ready")
def ready() -> dict[str, str]:
    session_factory = get_session_factory()

    try:
        with session_factory() as session:
            session.execute(text("SELECT 1"))
    except Exception as exc:
        raise HTTPException(status_code=503, detail="Database unavailable") from exc

    return {"status": "ready", "database": "ok"}
