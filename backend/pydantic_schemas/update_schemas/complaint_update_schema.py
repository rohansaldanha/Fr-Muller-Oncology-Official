from pydantic import BaseModel
from typing import Optional
from pydantic import datetime_parse
import datetime

class Complaint_Update(BaseModel):
    datetime : Optional[int]
    duration : Optional[int]
    severity : Optional[int]