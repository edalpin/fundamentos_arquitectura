# pylint: disable=no-name-in-module
# pylint: disable=no-self-argument

from fastapi import APIRouter
from pydantic import BaseModel
import uuid

from repositories import repository

router = APIRouter()

repository_name = "payments"


class PaymentDto(BaseModel):
    valor: str
    estaod: str
    fecha: str
    fecha_limite: str


@router.get("/", summary="Obtener todos los pagos")
async def get_payments():

    payments = repository.read_repository(repository_name)

    return {"code": 200, "data": payments}


@router.get("/{codigo_pago}", summary="Obtener un pago por codigo")
async def get_payment(codigo_pago: str):

    payments = repository.read_repository(repository_name)
    payment = {}

    for t_payment in payments:
        if t_payment["codigo_pago"] == codigo_pago:
            payment = t_payment

    return {"code": 200, "data": payment}


@router.post("/", summary="Crear un pago")
async def create_payment(payment: PaymentDto):
    payment = dict(payment)
    payment["codigo_pago"] = str(uuid.uuid4())

    repository.add_to_repository(repository_name, payment)

    return {"code": 201, "data": payment}


@router.put("/{codigo_pago}", summary="Actualizar un pago por codigo")
async def update_payment(codigo_pago: str, payment: PaymentDto):

    return {"code": 200, "data": payment}


@router.delete("/{codigo_pago}", summary="Eliminar un pago por codigo")
async def delete_payment(codigo_pago: str, payment: PaymentDto):

    return {"code": 200}
