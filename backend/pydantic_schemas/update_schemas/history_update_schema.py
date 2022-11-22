from pydantic import BaseModel
from typing import Optional
from pydantic import datetime_parse
import datetime

class History_Update(BaseModel):
   hypertention : Optional[str]
   d_hypertention : Optional[int]
   diabetes : Optional[str]
   d_diabetes : Optional[int]
   heart_disease : Optional[str]
   d_heart_disease : Optional[int]
   respiratory_disease : Optional[str]
   d_respiratory_disease : Optional[int]
   rheumatic_disease : Optional[str]
   d_rheumatic_disease : Optional[int]
   neurological_disease : Optional[str]
   d_neurological_disease : Optional[int]
   psychiatric_disease : Optional[str]
   d_psychiatric_disease : Optional[int]
   previous_surgery : Optional[str]
   d_previous_surgery : Optional[int]