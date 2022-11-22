from pydantic import BaseModel
from typing import Optional

# for patient info table
class Patient(BaseModel):
   status : str
   ecgo : int
   pulse : int
   bp : int
   respiration_rate : int
   temperature : int
   pallor : str
   jaundice : str
   cyanosis : str
   odema : str
   clubbing : str
   lymph_node : str
   nutrition_status : str
   built : int
   height : float
   weight : float
   bsa : int
   unhealthy_habits : str
   family_history :str
   allergy : str