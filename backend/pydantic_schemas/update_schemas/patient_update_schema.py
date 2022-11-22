from pydantic import BaseModel
from typing import Optional
from pydantic import datetime_parse
import datetime

class Patient_Update(BaseModel):
   height : Optional[float]
   weight : Optional[float]
   status : Optional[str]
   ecgo : Optional[int]
   pulse : Optional[int]
   bp : Optional[int]
   respiration_rate : Optional[int]
   temperature : Optional[int]
   pallor : Optional[str]
   jaundice : Optional[str]
   cyanosis : Optional[str]
   odema : Optional[str]
   clubbing : Optional[str]
   lymph_node : Optional[str]
   nutrition_status : Optional[str]
   built : Optional[int]
   bsa : Optional[int]
   unhealthy_habits : Optional[str]
   family_history : Optional[str]
   allergy : Optional[str]