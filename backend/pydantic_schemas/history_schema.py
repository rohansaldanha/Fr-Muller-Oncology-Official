from pydantic import BaseModel
from typing import Optional
from pydantic import datetime_parse
import datetime

# for patient history table
class History(BaseModel):
   hypertention : str
   d_hypertention : int
   diabetes : str
   d_diabetes : int
   heart_disease : str
   d_heart_disease : int
   respiratory_disease : str
   d_respiratory_disease : int
   rheumatic_disease : str
   d_rheumatic_disease : int
   neurological_disease : str
   d_neurological_disease : int
   psychiatric_disease : str
   d_psychiatric_disease : int
   previous_surgery : str
   d_previous_surgery : int