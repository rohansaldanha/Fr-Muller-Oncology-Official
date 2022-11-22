from pydantic import BaseModel
from typing import Optional
from pydantic import datetime_parse
import datetime

class Examination_Update(BaseModel):
    i_number : Optional[int]
    i_size : Optional[str]
    i_epicenter : Optional[str]
    i_extend : Optional[str]
    i_surrounding : Optional[str]
    i_status : Optional[str]
    r_number : Optional[int]
    r_size : Optional[str]
    r_mobility : Optional[str]
    r_relation : Optional[str]
    r_status : Optional[str]
    s_organ_involved : Optional[str]
    s_number : Optional[int]
    s_size : Optional[str]
    s_status : Optional[str]