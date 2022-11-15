from pydantic import BaseModel
from typing import Optional
from pydantic import datetime_parse
import datetime
from pydantic_schemas.update_schemas.basic_update_schema import Basic_Update
from pydantic_schemas.update_schemas.patient_update_schema import Patient_Update
from pydantic_schemas.update_schemas.complaint_update_schema import Complaint_Update
from pydantic_schemas.update_schemas.examination_update_schema import Examination_Update
from pydantic_schemas.update_schemas.history_update_schema import History_Update
from pydantic_schemas.update_schemas.blood_update_schema import Blood_Update
from pydantic_schemas.update_schemas.kidney_update_schema import Kidney_Update
from pydantic_schemas.update_schemas.liver_update_schema import Liver_Update
from pydantic_schemas.update_schemas.assessment_update_schema import Assessment_Update

class AllBasicUpdate(BaseModel):
    patient_basic: Optional[Basic_Update]
    patient_patient: Optional[Patient_Update]
    patient_complaint: Optional[Complaint_Update]
    patient_examination: Optional[Examination_Update]
    patient_history: Optional[History_Update]
    patient_blood: Optional[Blood_Update]
    patient_kidney: Optional[Kidney_Update]
    patient_liver: Optional[Liver_Update]
    patient_assessment: Optional[Assessment_Update]

    class Config:
        orm_mode = True