from sqlalchemy import Table,Column,Integer,String,MetaData

meta = MetaData()

# Basic Table Structure
basic_info = Table(
    'basic_info', meta,
    Column('basic_id',Integer, primary_key=True),
    Column('first_name', String),
    Column('last_name', String),
    Column('contact_no', String),
    Column('age', Integer),
    Column('sex', String),
    Column('ipop_number', Integer)
)

# Patient data table Structure
patient_info = Table(
    'patient_info', meta,
    Column('patient_id', Integer, primary_key=True),
    Column('date_time', Integer),
    Column('status', Integer),
    Column('ecgo', Integer),
    Column('pulse', Integer),
    Column('bp', Integer),
    Column('respiration_rate', Integer),
    Column('temperature', Integer),
    Column('pallor', Integer),
    Column('jaundice', Integer),
    Column('cyanosis', Integer),
    Column('odema', Integer),
    Column('clubbing', Integer),
    Column('lymph_node', Integer),
    Column('nutrition_status', Integer),
    Column('built', Integer),
    Column('height', Integer),
    Column('weight', Integer),
    Column('bsa', Integer),
    Column('unhealthy_habits', Integer),
    Column('family_history', Integer),
    Column('allergy', Integer)
)

# Patient history table Structure
patient_history = Table(
    'patient_history', meta,
    Column('history_id', Integer, primary_key=True),
    Column('hypertention', Integer),
    Column('d_hypertention', Integer),
    Column('diabetes', Integer),
    Column('d_diabetes', Integer),
    Column('heart_disease', Integer),
    Column('d_heart_disease', Integer),
    Column('respiratory_disease', Integer),
    Column('d_respiratory_disease', Integer),
    Column('rheumatic_disease', Integer),
    Column('d_rheumatic_disease', Integer),
    Column('neurological_disease', Integer),
    Column('d_neurological_disease', Integer),
    Column('psychiatric_disease', Integer),
    Column('d_psychiatric_disease', Integer),
    Column('previous_surgery', Integer),
    Column('d_previous_surgery', Integer)
)

# complaint table Structure
complaint_info = Table(
    'complaint_info', meta,
    Column('complaint_id', Integer, primary_key=True),
    Column('datetime', Integer),
    Column('duration', Integer),
    Column('severity', Integer)
)

# c examination table Structure
c_examination = Table(
    'c_examination', meta,
    Column('examination_id', Integer, primary_key=True),
    Column('i_number', Integer),
    Column('i_size', Integer),
    Column('i_epicenter', Integer),
    Column('i_extend', Integer),
    Column('i_surrounding', Integer),
    Column('i_status', Integer),
    Column('r_number', Integer),
    Column('r_size', Integer),
    Column('r_mobility', Integer),
    Column('r_relation', Integer),
    Column('r_status', Integer),
    Column('s_organ_involved', Integer),
    Column('s_number', Integer),
    Column('s_size', Integer),
    Column('s_status', Integer)
)

# blood test table Structure
blood_test = Table(
    'blood_test', meta,
    Column('blood_id', Integer, primary_key=True),
    Column('b_hb', Integer),
    Column('b_pcv', Integer),
    Column('b_esr', Integer),
    Column('b_tc', Integer),
    Column('b_dc', Integer),
    Column('b_pc', Integer),
    Column('b_pt', Integer),
    Column('b_inr', Integer)
)

# kidney test table Structure
kidney_test = Table(
    'kidney_test', meta,
    Column('kidney_id', Integer, primary_key=True),
    Column('k_bu', Integer),
    Column('k_cc', Integer),
    Column('k_ss', Integer),
    Column('k_sp', Integer),
    Column('k_sc', Integer),
    Column('k_sca', Integer),
    Column('k_ur', Integer)
)

# liver test table Structure
liver_test = Table(
    'liver_test', meta,
    Column('liver_id', Integer, primary_key=True),
    Column('itb', Integer),
    Column('idb', Integer),
    Column('iib', Integer),
    Column('isgot', Integer),
    Column('isgpt', Integer),
    Column('iap', Integer)
)

# assessment table Structure
assessment = Table(
    'assessment', meta,
    Column('assessment_id', Integer, primary_key=True),
    Column('wbs_asses', Integer),
    Column('clinical_findings', Integer),
    Column('imaging', Integer),
    Column('biopsy', Integer),
    Column('ihc_flow_cytometry', Integer),
    Column('scopies', Integer),
    Column('tumor_markers', Integer),
    Column('d_site', Integer),
    Column('d_subsite', Integer),
    Column('d_final', Integer),
    Column('s_stage', Integer),
    Column('d_factors', Integer),
    Column('d_tp', Integer)
)