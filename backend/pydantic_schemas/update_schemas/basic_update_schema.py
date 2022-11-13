from pydantic import BaseModel
from typing import Optional
from pydantic import datetime_parse
import datetime

class Basic_Update(BaseModel):
    patient_id : Optional[int]
    first_name : Optional[str]
    last_name : Optional[str]
    contact_no : Optional[str]
    age : Optional[int]
    sex : Optional[str]
    ipop_number : Optional[int]