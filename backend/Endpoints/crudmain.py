from fastapi import APIRouter, HTTPException, status
from sqlalchemy import join
from sqlalchemy import and_
from sqlalchemy.sql import select
from sqlalchemy.sql import delete

from alchemy_models.db_meta import database
from fastapi import Query
from typing import Optional

from sqlalchemy import create_engine,text
from pydantic_schemas.basic_schema import Basic, BasicOut
from alchemy_models.models import basic_info, patient_info

# APIRouter creates path operations for user module
all_router = APIRouter(
    prefix="/api",
    tags=['Patient']
)

@all_router.post("/create_new_record")
async def create_user(basic: Basic):
    basic_ins = basic_info.insert().values(first_name=basic.first_name, last_name=basic.last_name, contact_no=basic.contact_no, age=basic.age, sex=basic.sex, ipop_number=basic.ipop_number)
    patient_obj=basic.patient_basic
    patient_ins = patient_info.insert().values( 
        date_time=patient_obj.date_time, 
        status=patient_obj.status,
        ecgo=patient_obj.ecgo,
        pulse=patient_obj.pulse,
        bp=patient_obj.bp,
        respiration_rate=patient_obj.respiration_rate,
        temperature=patient_obj.temperature,
        pallor=patient_obj.pallor,
        jaundice=patient_obj.jaundice,
        cyanosis=patient_obj.cyanosis,
        odema=patient_obj.odema,
        clubbing=patient_obj.clubbing,
        lymph_node=patient_obj.lymph_node,
        nutrition_status=patient_obj.nutrition_status,
        built=patient_obj.built,
        height=patient_obj.height,
        weight=patient_obj.weight,
        bsa=patient_obj.bsa,
        unhealthy_habits=patient_obj.unhealthy_habits,
        family_history=patient_obj.family_history,
        allergy=patient_obj.allergy,
    )
    await database.execute(basic_ins)
    await database.execute(patient_ins)
    return {**basic.dict()}


@all_router.get("/all", response_model=list[BasicOut])
async def get_all_patient_details():
    fetch_all_pat_det = basic_info.select()
    print(fetch_all_pat_det)
    result = await database.fetch_all(fetch_all_pat_det)
    if result:
        return result
    else:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND)


@all_router.get("/{pat_ip}")
async def get_all_details_of_pat_ip(pat_ip: int):
    query = select([basic_info,
                    patient_info]).where(
        and_(basic_info.c.patient_id == pat_ip,
             patient_info.c.patient_id == pat_ip)
    )
    print(query)
    result = await database.fetch_one(query)
    return result


@all_router.delete("/delete/{pat_ip}")
async def delete_record(pat_ip: int):
    delete_query = delete(basic_info).where(
        basic_info.c.patient_id == pat_ip
    )
    print(delete_query)
    delete_result = await database.execute(delete_query)
    return "Deleted Successfully"