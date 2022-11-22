from pydantic import BaseModel
from typing import Optional
from pydantic import datetime_parse
import datetime

class Complaint_Update(BaseModel):
    present_complaint : Optional[str]
    duration : Optional[int]
    severity : Optional[int]