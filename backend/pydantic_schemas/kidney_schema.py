from pydantic import BaseModel
from typing import Optional
from pydantic import datetime_parse
import datetime

# for kidney test table
class Kidney(BaseModel):
    k_bu : int
    k_cc : float
    k_ss : int
    k_sp : float
    k_sc : int
    k_sca : float
    k_ur : float