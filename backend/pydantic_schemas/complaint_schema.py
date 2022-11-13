from pydantic import BaseModel
from typing import Optional
from pydantic import datetime_parse
import datetime

# for complaint table
class Complaint(BaseModel):
    datetime : int
    duration : int
    severity : int