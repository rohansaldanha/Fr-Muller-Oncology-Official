from pydantic import BaseModel
from typing import Optional
from pydantic import datetime_parse
import datetime

# for patient history table
class History(BaseModel):
   hypertention : int
   d_hypertention : int
   diabetes : int
   d_diabetes : int
   heart_disease : int
   d_heart_disease : int
   respiratory_disease : int
   d_respiratory_disease : int
   rheumatic_disease : int
   d_rheumatic_disease : int
   neurological_disease : int
   d_neurological_disease : int
   psychiatric_disease : int
   d_psychiatric_disease : int
   previous_surgery : int
   d_previous_surgery : int