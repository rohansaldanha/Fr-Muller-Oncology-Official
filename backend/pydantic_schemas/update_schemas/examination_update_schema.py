from pydantic import BaseModel
from typing import Optional
from pydantic import datetime_parse
import datetime

class Examination_Update(BaseModel):
    i_number : Optional[int]
    i_size : Optional[int]
    i_epicenter : Optional[int]
    i_extend : Optional[int]
    i_surrounding : Optional[int]
    i_status : Optional[int]
    r_number : Optional[int]
    r_size : Optional[int]
    r_mobility : Optional[int]
    r_relation : Optional[int]
    r_status : Optional[int]
    s_organ_involved : Optional[int]
    s_number : Optional[int]
    s_size : Optional[int]
    s_status : Optional[int]