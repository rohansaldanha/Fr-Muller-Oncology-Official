from pydantic import BaseModel
from typing import Optional
from pydantic import datetime_parse
import datetime

class Kidney_Update(BaseModel):
    k_bu : Optional[int]
    k_cc : Optional[float]
    k_ss : Optional[int]
    k_sp : Optional[float]
    k_sc : Optional[int]
    k_sca : Optional[float]
    k_ur : Optional[float]