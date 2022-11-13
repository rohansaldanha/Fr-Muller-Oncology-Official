from pydantic import BaseModel
from typing import Optional
from pydantic import datetime_parse
from pydantic_schemas.patient_schema import Patient
from pydantic_schemas.complaint_schema import Complaint
from pydantic_schemas.examination_schema import Examination
from pydantic_schemas.history_schema import History
from pydantic_schemas.blood_schema import Blood
from pydantic_schemas.kidney_schema import Kidney
from pydantic_schemas.liver_schema import Liver
from pydantic_schemas.assessment_schema import Assessment
import datetime

# for basic info table
class Basic(BaseModel):
    first_name : str
    last_name : str
    contact_no : str
    age : int
    sex : str
    ipop_number : int

    patient_patient : Patient
    patient_complaint : Complaint
    patient_examination : Examination
    patient_history : History
    patient_blood : Blood
    patient_kidney : Kidney
    patient_liver : Liver
    patient_assessment : Assessment

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