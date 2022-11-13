from pydantic import BaseModel
from typing import Optional
from pydantic import datetime_parse
import datetime

# for assessment table
class Assessment(BaseModel):
    wbs_asses : int
    clinical_findings : int
    imaging : int
    biopsy : int
    ihc_flow_cytometry : int
    scopies : int
    tumor_markers : int
    d_site : int
    d_subsite : int
    d_final : int
    s_stage : int
    d_factors : int
    d_tp : int 