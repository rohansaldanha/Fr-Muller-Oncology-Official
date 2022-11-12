'''from sqlalchemy import create_engine,text
from .schemas import Basic,Patient
from .models import basic_info,meta,patient_info
from sqlalchemy.sql import select

SQLALCHEMY_DATABASE_URL = "postgresql://postgres:flami123@localhost/frmullerfinal"
engine = create_engine(SQLALCHEMY_DATABASE_URL)

conn = meta.create_all(engine)

# to get all users from database
async def get_all_users():
    fetch = text("SELECT * FROM basic_info,patient_info WHERE basic_info.basic_id = patient_info.patient_id")
    return engine.execute(fetch).fetchall()


# to get users by id from database
async def get_user_by_id(id: int):
    fetch=select([basic_info, patient_info]).where(basic_info.c.basic_id == id)
    return engine.execute(fetch).fetchall()


# to create a new user
async def create_user(basic: Basic, patient: Patient):
    basic_ins = basic_info.insert().values(first_name=basic.first_name, last_name=basic.last_name, contact_no=basic.contact_no, age=basic.age, sex=basic.sex, ipop_number=basic.ipop_number)
    result_basic = engine.execute(basic_ins)
    patient_ins = patient_info.insert().values(height=patient.height,weight=patient.weight)
    result_patient = engine.execute(patient_ins)
    fetch = text("SELECT * FROM basic_info,patient_info WHERE basic_info.basic_id = patient_info.patient_id")
    return engine.execute(fetch).fetchall()


# to update a user
async def update_user(id: int, basic: Basic, patient: Patient):
    basic_update = basic_info.update().where(basic_info.c.basic_id == id).values(first_name=basic.first_name, last_name=basic.last_name, contact_no=basic.contact_no, age=basic.age, sex=basic.sex, ipop_number=basic.ipop_number)
    engine.execute(basic_update)
    patient_update = patient_info.update().where(patient_info.c.patient_id == id).values(height=patient.height,weight=patient.weight)
    engine.execute(patient_update)
    return "update successFully"


# to delete a user from the database
async def delete_user(id: int):
    engine.execute(basic_info.delete().where(basic_info.c.basic_id == id))
    engine.execute(patient_info.delete().where(patient_info.c.patient_id == id))
    return f"Successfully deleted {basic_info.first_name}"'''

