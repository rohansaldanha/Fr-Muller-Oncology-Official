from pydantic import BaseModel
from typing import Optional
from pydantic import datetime_parse
import datetime

# for c examination table
class Examination(BaseModel):
    i_number : int
    i_size : str
    i_epicenter : str
    i_extend : str
    i_surrounding : str
    i_status : str
    r_number : int
    r_size : str
    r_mobility : str
    r_relation :str
    r_status : str
    s_organ_involved : str
    s_number : int
    s_size : str
    s_status : str