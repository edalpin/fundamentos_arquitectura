from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes import api_router
from config.Settings import settings

app = FastAPI(title=settings.PROJECT_NAME, version=settings.VERSION)

if settings.BACKEND_CORS_ORIGINS:
    app.add_middleware(
        CORSMiddleware,
        allow_origins=[str(origin) for origin in settings.BACKEND_CORS_ORIGINS],
        allow_methods=["*"],
        allow_headers=["*"],
    )

app.include_router(api_router, prefix="/api/v1")
