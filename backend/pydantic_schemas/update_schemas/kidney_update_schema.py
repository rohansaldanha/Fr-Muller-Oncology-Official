from pydantic import BaseModel
from typing import Optional
from pydantic import datetime_parse
import datetime

class Kidney_Update(BaseModel):
    k_bu : Optional[int]
    k_cc : Optional[int]
    k_ss : Optional[int]
    k_sp : Optional[int]
    k_sc : Optional[int]
    k_sca : Optional[int]
    k_ur : Optional[int]