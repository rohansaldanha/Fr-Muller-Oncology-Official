from pydantic import BaseModel
from typing import Optional

# for patient info table
class Patient(BaseModel):
   height : int
   weight : int
   date_time : int
   status : int
   ecgo : int
   pulse : int
   bp : int
   respiration_rate : int
   temperature : int
   pallor : int
   jaundice : int
   cyanosis : int
   odema : int
   clubbing : int
   lymph_node : int
   nutrition_status : int
   built : int
   height : int
   weight : int
   bsa : int
   unhealthy_habits : int
   family_history : int
   allergy : int