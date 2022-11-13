from pydantic import BaseModel
from typing import Optional
from pydantic import datetime_parse
import datetime

# for c examination table
class Examination(BaseModel):
    i_number : int
    i_size : int
    i_epicenter : int
    i_extend : int
    i_surrounding : int
    i_status : int
    r_number : int
    r_size : int
    r_mobility : int
    r_relation : int
    r_status : int
    s_organ_involved : int
    s_number : int
    s_size : int
    s_status : int