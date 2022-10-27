from pydantic import BaseModel

# for basic info table
class Basic(BaseModel):
   first_name : str
   last_name : str
   contact_no : str
   age : int
   sex : str
   ipop_number : int

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

# for patient history table
class History(BaseModel):
   hypertention : int
   d_hypertention : int
   diabetes : int
   d_diabetes : int
   heart_disease : int
   d_heart_disease : int
   respiratory_disease : int
   d_respiratory_disease : int
   rheumatic_disease : int
   d_rheumatic_disease : int
   neurological_disease : int
   d_neurological_disease : int
   psychiatric_disease : int
   d_psychiatric_disease : int
   previous_surgery : int
   d_previous_surgery : int

# for complaint table
class Complaint(BaseModel):
    datetime : int
    duration : int
    severity : int

# for c examination table
class Examination(BaseModel):
    i_number : int
    i_size : int
    i_epicenter : int
    i_extend : int
    i_surrounding : int
    i_status : int
    r_number : int
    r_size : int
    r_mobility : int
    r_relation : int
    r_status : int
    s_organ_involved : int
    s_number : int
    s_size : int
    s_status : int

# for blood test table
class Blood(BaseModel):
    b_hb : int
    b_pcv : int
    b_esr : int
    b_tc : int
    b_dc : int
    b_pc : int
    b_pt : int
    b_inr : int

# for kidney test table
class Kidney(BaseModel):
    k_bu : int
    k_cc : int
    k_ss : int
    k_sp : int
    k_sc : int
    k_sca : int
    k_ur : int

# for liver test table
class Liver(BaseModel):
    itb : int
    idb : int
    iib : int
    isgot : int
    isgpt : int
    iap : int

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