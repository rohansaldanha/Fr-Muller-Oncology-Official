from pydantic import BaseModel
from typing import Optional
from pydantic import datetime_parse
from pydantic_schemas.patient_schema import Patient
import datetime

# for basic info table
class Basic(BaseModel):
    first_name : str
    last_name : str
    contact_no : str
    age : int
    sex : str
    ipop_number : int

    patient_basic : Patient

    class Config:
        orm_mode = True

class BasicOut(BaseModel):
    first_name : str
    last_name : str
    contact_no : str
    age : int
    sex : str
    ipop_number : int

    time_created: datetime.datetime
    time_updated: Optional[datetime.datetime]

    class Config:
        orm_mode = True