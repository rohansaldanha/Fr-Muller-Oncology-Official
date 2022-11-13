from pydantic import BaseModel
from typing import Optional
from pydantic import datetime_parse
import datetime

# for liver test table
class Liver(BaseModel):
    itb : int
    idb : int
    iib : int
    isgot : int
    isgpt : int
    iap : int