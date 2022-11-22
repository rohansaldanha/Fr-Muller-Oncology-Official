from pydantic import BaseModel
from typing import Optional
from pydantic import datetime_parse
import datetime

class Blood_Update(BaseModel):
    b_hb : Optional[int]
    b_pcv : Optional[int]
    b_esr : Optional[int]
    b_tc : Optional[int]
    b_dc : Optional[int]
    b_pc : Optional[int]
    b_pt : Optional[float]
    b_inr : Optional[float]