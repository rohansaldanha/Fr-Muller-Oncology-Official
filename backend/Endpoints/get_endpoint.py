
from fastapi import APIRouter, status, HTTPException

from sqlalchemy import and_
from sqlalchemy.sql import select

from pydantic_schemas.basic_schema import BasicOut

from alchemy_models.models import basic_info
from alchemy_models.models import patient_info
from alchemy_models.models import patient_history
from alchemy_models.models import complaint_info
from alchemy_models.models import c_examination
from alchemy_models.models import blood_test
from alchemy_models.models import kidney_test
from alchemy_models.models import liver_test
from alchemy_models.models import assessment
from alchemy_models.db_meta import database

# APIRouter creates path operations for user module
get_router = APIRouter(
    prefix="/api/get",
    tags=['Create Queries']
)

@get_router.get("/all", response_model=list[BasicOut])
async def get_all_patient_details():
    fetch_all_pat_det = basic_info.select()
    print(fetch_all_pat_det)
    result = await database.fetch_all(fetch_all_pat_det)
    if result:
        return result
    else:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND)

@get_router.get("/{pat_ip}")
async def get_all_details_of_pat_ip(pat_ip: int):
    query = select([basic_info,
                    patient_info,
                    patient_history,
                    complaint_info,
                    c_examination,
                    blood_test,
                    kidney_test,
                    liver_test,
                    assessment]).where(
        and_(basic_info.c.patient_id == pat_ip,
             patient_info.c.patient_id == pat_ip,
             patient_history.c.patient_id == pat_ip,
             complaint_info.c.patient_id == pat_ip,
             c_examination.c.patient_id == pat_ip,
             blood_test.c.patient_id == pat_ip,
             kidney_test.c.patient_id == pat_ip,
             liver_test.c.patient_id == pat_ip,
             assessment.c.patient_id == pat_ip)
    )
    print(query)
    result = await database.fetch_all(query=query)
    print(result)

    if not result:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f'patient details of {pat_ip} not found.')
    return result