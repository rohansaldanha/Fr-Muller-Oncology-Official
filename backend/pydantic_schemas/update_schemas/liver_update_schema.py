from pydantic import BaseModel
from typing import Optional
from pydantic import datetime_parse
import datetime

class Liver_Update(BaseModel):
    itb : Optional[float]
    idb : Optional[float]
    iib : Optional[float]
    isgot : Optional[int]
    isgpt : Optional[int]
    iap : Optional[int]