from pathlib import Path
from typing import List

from pydantic import BaseSettings


class Settings(BaseSettings):
    PROJECT_NAME: str = "Prestación de Servicios"
    REPOSITORIES_DIR: str = str(Path(__file__).resolve().parent.parent / "repositories")
    BACKEND_CORS_ORIGINS: List[str] = ["*"]
    VERSION: str = "1.0.0"

    class Config:
        case_sensitive = True


settings = Settings()
