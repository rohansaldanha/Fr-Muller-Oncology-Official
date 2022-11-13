from pydantic import BaseModel
from typing import Optional
from pydantic import datetime_parse
import datetime

# for blood test table
class Blood(BaseModel):
    b_hb : int
    b_pcv : int
    b_esr : int
    b_tc : int
    b_dc : int
    b_pc : int
    b_pt : int
    b_inr : int