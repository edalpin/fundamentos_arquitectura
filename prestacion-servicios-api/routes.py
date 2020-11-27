from fastapi import APIRouter
from fastapi.responses import RedirectResponse

from api.config.Settings import settings

from controllers import users_controller, services_controller

api_router = APIRouter()


@api_router.get("/")
def redirect_to_docs():
    return RedirectResponse("​​/docs")


api_router.include_router(users_controller.router, prefix="/usuarios", tags=["Usuarios"])
api_router.include_router(services_controller.router, prefix="/servicios", tags=["Servicios"])
api_router.include_router(users_controller.router, prefix="/pagos", tags=["Pagos"])
