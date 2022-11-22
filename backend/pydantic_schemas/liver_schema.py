from pydantic import BaseModel
from typing import Optional
from pydantic import datetime_parse
import datetime

# for liver test table
class Liver(BaseModel):
    itb : float
    idb : float
    iib : float
    isgot : int
    isgpt : int
    iap : int