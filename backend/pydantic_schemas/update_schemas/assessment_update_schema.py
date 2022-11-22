from pydantic import BaseModel
from typing import Optional
from pydantic import datetime_parse
import datetime

class Assessment_Update(BaseModel):
    wbs_asses : Optional[int]
    clinical_findings : Optional[str]
    imaging : Optional[str]
    biopsy : Optional[str]
    ihc_flow_cytometry : Optional[str]
    scopies : Optional[str]
    tumor_markers : Optional[str]
    d_site : Optional[str]
    d_subsite : Optional[str]
    d_final : Optional[str]
    s_stage : Optional[str]
    d_factors : Optional[str]
    d_tp : Optional[str] 