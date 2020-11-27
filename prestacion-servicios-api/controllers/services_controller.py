# pylint: disable=no-name-in-module
# pylint: disable=no-self-argument

from fastapi import APIRouter
from pydantic import BaseModel
import uuid

from repositories import repository

router = APIRouter()

repository_name = "services"


class ServiceDto(BaseModel):
    tipo: str
    descripcion: str
    nombre: str


@router.get("/", summary="Obtener todos los servicios")
async def get_services():

    services = repository.read_repository(repository_name)

    return {"code": 200, "data": services}


@router.get("/{id_servicio}", summary="Obtener un servicio por id")
async def get_service(id_servicio: str):

    services = repository.read_repository(repository_name)
    service = {}

    for t_service in services:
        if t_service["id_servicio"] == id_servicio:
            service = t_service

    return {"code": 200, "data": service}


@router.post("/", summary="Crear un servicio")
async def create_service(service: ServiceDto):
    service = dict(service)
    service["id_servicio"] = str(uuid.uuid4())

    repository.add_to_repository(repository_name, service)

    return {"code": 201, "data": service}


@router.put("/{id_servicio}", summary="Actualizar un servicio por id")
async def update_service(id_servicio: str, service: ServiceDto):

    return {"code": 200, "data": service}


@router.delete("/{id_servicio}", summary="Eliminar un servicio por id")
async def delete_service(id_servicio: str, service: ServiceDto):

    return {"code": 200}
