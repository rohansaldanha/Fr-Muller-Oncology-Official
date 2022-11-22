from pydantic import BaseModel
from typing import Optional
from pydantic import datetime_parse
import datetime

# for assessment table
class Assessment(BaseModel):
    wbs_asses : int
    clinical_findings : str
    imaging : str
    biopsy : str
    ihc_flow_cytometry : str
    scopies : str
    tumor_markers : str
    d_site : str
    d_subsite : str
    d_final : str
    s_stage : str
    d_factors : str
    d_tp : str 