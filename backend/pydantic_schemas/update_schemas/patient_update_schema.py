from pydantic import BaseModel
from typing import Optional
from pydantic import datetime_parse
import datetime

class Patient_Update(BaseModel):
   height : Optional[int]
   weight : Optional[int]
   date_time : Optional[int]
   status : Optional[int]
   ecgo : Optional[int]
   pulse : Optional[int]
   bp : Optional[int]
   respiration_rate : Optional[int]
   temperature : Optional[int]
   pallor : Optional[int]
   jaundice : Optional[int]
   cyanosis : Optional[int]
   odema : Optional[int]
   clubbing : Optional[int]
   lymph_node : Optional[int]
   nutrition_status : Optional[int]
   built : Optional[int]
   height : Optional[int]
   weight : Optional[int]
   bsa : Optional[int]
   unhealthy_habits : Optional[int]
   family_history : Optional[int]
   allergy : Optional[int]