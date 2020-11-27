# pylint: disable=no-name-in-module
# pylint: disable=no-self-argument

from fastapi import APIRouter
from pydantic import BaseModel
import uuid

from repositories import repository

router = APIRouter()

repository_name = "users"


class UserDto(BaseModel):
    nombre: str
    identificacion: str
    tipo_identificacion: str
    correo_electronico: str
    numero_telefono: str
    nombre_usuario: str
    contrasena: str


@router.get("/", summary="Obtener todos los usuarios")
async def get_users():

    users = repository.read_repository(repository_name)

    return {"code": 200, "data": users}


@router.get("/{id_usuario}", summary="Obtener un usuario por id")
async def get_user(id_usuario: str):

    users = repository.read_repository(repository_name)
    user = {}

    for t_user in users:
        if t_user["id_usuario"] == id_usuario:
            user = t_user

    return {"code": 200, "data": user}


@router.post("/", summary="Crear usuario")
async def create_user(user: UserDto):
    user = dict(user)
    user["id_usuario"] = str(uuid.uuid4())

    repository.add_to_repository(repository_name, user)

    return {"code": 201, "data": user}


@router.put("/{id_usuario}", summary="Actualizar un usuario por id")
async def update_user(id_usuario: str, user: UserDto):

    return {"code": 200, "data": user}


@router.delete("/{id_usuario}", summary="Eliminar un usuario por id")
async def delete_user(id_usuario: str, user: UserDto):

    return {"code": 200}
