from pydantic import BaseModel
from typing import Optional
from pydantic import datetime_parse
import datetime

class Liver_Update(BaseModel):
    itb : Optional[int]
    idb : Optional[int]
    iib : Optional[int]
    isgot : Optional[int]
    isgpt : Optional[int]
    iap : Optional[int]