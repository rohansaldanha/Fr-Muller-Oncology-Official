from pydantic_schemas.update_schemas.all_basic_update_schema import AllBasicUpdate

from sqlalchemy import update, Table, select

from fastapi import APIRouter

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

update_router = APIRouter(
    prefix="/api/update",
    tags=['Create Queries']
)


@update_router.put('/{pat_ip}')
async def update_pat_details(pat_ip: int, pyd_update_schema: AllBasicUpdate):
    # set exclude_unset = True so that only passed values are there
    data_dict = pyd_update_schema.dict(exclude_unset=True)

    # UPDATE patient_patient(frpm all basic update schema) if its only present in dictionary
    await update_query(pat_ip, "patient_patient", patient_info, data_dict)

    # UPDATE patient_history if its only present in dictionary
    await update_query(pat_ip, "patient_history", patient_history, data_dict)

    # UPDATE patient_complaint if its only present in dictionary
    await update_query(pat_ip, "patient_complaint", complaint_info, data_dict)

    # UPDATE patient_examination if its only present in dictionary
    await update_query(pat_ip, "patient_examination", c_examination, data_dict)

    # UPDATE patient_blood if its only present in dictionary
    await update_query(pat_ip, "patient_blood", blood_test, data_dict)

    # UPDATE patient_kidney if its only present in dictionary
    await update_query(pat_ip, "patient_kidney", kidney_test, data_dict)

    # UPDATE patient_liver if its only present in dictionary
    await update_query(pat_ip, "patient_liver", liver_test, data_dict)

    # UPDATE patient_assessment if its only present in dictionary
    await update_query(pat_ip, "patient_assessment", assessment, data_dict)

    # update paternal details
    # NOTE--> ORDER patTERS KEEP patient_basic update at last
    await update_query(pat_ip, "patient_basic", basic_info, data_dict)

    # TODO: a little validation
    return {f'updated Successfully'}

async def update_query(pri_key: int, key_name: str, model: Table, data_dict: dict):
    if key_name in data_dict:
        my_dict = data_dict[key_name]

        if len(my_dict) == 0:
            print("Dictionary is EMPTY!")
        else:
            # check if record exists in db
            stmt = select(model.c.patient_id).where(
                model.c.patient_id == pri_key
            )
            print(f'statement is {stmt}')
            res = await database.fetch_one(stmt)
            print(f'result {res}')

            if res:
                print(data_dict[key_name])
                update_qry = update(model).where(
                    model.c.patient_id == pri_key
                ).values(my_dict)

                print(update_qry)
                res = await database.execute(update_qry)
                print(res)
