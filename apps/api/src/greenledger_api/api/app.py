from fastapi import FastAPI

from greenledger_api.api.routes.health import router as health_router
from greenledger_api.config.settings import get_settings


def create_app() -> FastAPI:
    settings = get_settings()
    application = FastAPI(
        title=settings.app_name,
        version="0.1.0",
        docs_url="/docs",
        redoc_url="/redoc",
    )
    application.include_router(health_router)
    return application


app = create_app()
