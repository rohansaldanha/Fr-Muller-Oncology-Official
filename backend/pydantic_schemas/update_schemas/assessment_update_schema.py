from pydantic import BaseModel
from typing import Optional
from pydantic import datetime_parse
import datetime

class Assessment_Update(BaseModel):
    wbs_asses : Optional[int]
    clinical_findings : Optional[int]
    imaging : Optional[int]
    biopsy : Optional[int]
    ihc_flow_cytometry : Optional[int]
    scopies : Optional[int]
    tumor_markers : Optional[int]
    d_site : Optional[int]
    d_subsite : Optional[int]
    d_final : Optional[int]
    s_stage : Optional[int]
    d_factors : Optional[int]
    d_tp : Optional[int] 