from fastapi import APIRouter

from sqlalchemy.sql import delete

from alchemy_models.db_meta import database
from alchemy_models.models import basic_info


# APIRouter creates path operations for user module
delete_router = APIRouter(
    prefix="/api",
    tags=['Create Queries']
)

"""delete a record"""


@delete_router.delete("/delete/{pat_ip}")
async def delete_record(pat_ip: int):
    delete_query = delete(basic_info).where(
        basic_info.c.patient_id == pat_ip
    )
    print(delete_query)
    delete_result = await database.execute(delete_query)
    return "Deleted Successfully"