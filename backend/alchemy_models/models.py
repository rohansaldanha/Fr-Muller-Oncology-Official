from sqlalchemy import Table
from sqlalchemy import Integer
from sqlalchemy import Float
from sqlalchemy import String
from sqlalchemy import Column
from sqlalchemy import ForeignKey
from sqlalchemy import CHAR
from sqlalchemy import Boolean
from sqlalchemy import Date
from sqlalchemy import Time
from sqlalchemy import TIMESTAMP
from sqlalchemy import func
from alchemy_models.db_meta import meta


# Basic Table Structure
basic_info = Table(
    'basic_info', meta,
    Column('patient_id',Integer, nullable=False, primary_key=True, index=True, autoincrement=False),
    Column('first_name', String),
    Column('last_name', String),
    Column('contact_no', String),
    Column('age', Integer),
    Column('sex', String),
    Column('ipop_number', Integer),
    Column('time_created', TIMESTAMP, server_default=func.now()),
    Column('time_updated', TIMESTAMP, onupdate=func.now())
)

# Patient data table Structure
patient_info = Table(
    'patient_info', meta,
    Column('patient_id',
            Integer, 
            ForeignKey("basic_info.patient_id",
                      onupdate="CASCADE",
                      ondelete="CASCADE"),
            primary_key=True,
            unique=True,
            nullable=False),
    Column('status', String),
    Column('ecgo', Integer),
    Column('pulse', Integer),
    Column('bp', Integer),
    Column('respiration_rate', Integer),
    Column('temperature', Integer),
    Column('pallor', String),
    Column('jaundice', String),
    Column('cyanosis', String),
    Column('odema', String),
    Column('clubbing', String),
    Column('lymph_node', String),
    Column('nutrition_status', String),
    Column('built', Integer),
    Column('height', Integer),
    Column('weight', Integer),
    Column('bsa', Integer),
    Column('unhealthy_habits', String),
    Column('family_history', String),
    Column('allergy', String),
    Column('time_created', TIMESTAMP, server_default=func.now()),
    Column('time_updated', TIMESTAMP, onupdate=func.now())
)

# Patient history table Structure
patient_history = Table(
    'patient_history', meta,
    Column('patient_id',
            Integer, 
            ForeignKey("basic_info.patient_id",
                      onupdate="CASCADE",
                      ondelete="CASCADE"),
            primary_key=True,
            unique=True,
            nullable=False),
    Column('hypertention', String),
    Column('d_hypertention', Integer),
    Column('diabetes', String),
    Column('d_diabetes', Integer),
    Column('heart_disease', String),
    Column('d_heart_disease', Integer),
    Column('respiratory_disease', String),
    Column('d_respiratory_disease', Integer),
    Column('rheumatic_disease', String),
    Column('d_rheumatic_disease', Integer),
    Column('neurological_disease', String),
    Column('d_neurological_disease', Integer),
    Column('psychiatric_disease', String),
    Column('d_psychiatric_disease', Integer),
    Column('previous_surgery', String),
    Column('d_previous_surgery', Integer),
    Column('time_created', TIMESTAMP, server_default=func.now()),
    Column('time_updated', TIMESTAMP, onupdate=func.now())
)

# complaint table Structure
complaint_info = Table(
    'complaint_info', meta,
    Column('patient_id',
            Integer, 
            ForeignKey("basic_info.patient_id",
                      onupdate="CASCADE",
                      ondelete="CASCADE"),
            primary_key=True,
            unique=True,
            nullable=False),
    Column('present_complaint', String),
    Column('duration', Integer),
    Column('severity', Integer),
    Column('time_created', TIMESTAMP, server_default=func.now()),
    Column('time_updated', TIMESTAMP, onupdate=func.now())
)

# c examination table Structure
c_examination = Table(
    'c_examination', meta,
    Column('patient_id',
            Integer, 
            ForeignKey("basic_info.patient_id",
                      onupdate="CASCADE",
                      ondelete="CASCADE"),
            primary_key=True,
            unique=True,
            nullable=False),
    Column('i_number', Integer),
    Column('i_size', String),
    Column('i_epicenter', String),
    Column('i_extend', String),
    Column('i_surrounding', String),
    Column('i_status', String),
    Column('r_number', Integer),
    Column('r_size', String),
    Column('r_mobility', String),
    Column('r_relation', String),
    Column('r_status', String),
    Column('s_organ_involved', String),
    Column('s_number', Integer),
    Column('s_size', String),
    Column('s_status', String),
    Column('time_created', TIMESTAMP, server_default=func.now()),
    Column('time_updated', TIMESTAMP, onupdate=func.now())
)

# blood test table Structure
blood_test = Table(
    'blood_test', meta,
    Column('patient_id',
            Integer, 
            ForeignKey("basic_info.patient_id",
                      onupdate="CASCADE",
                      ondelete="CASCADE"),
            primary_key=True,
            unique=True,
            nullable=False),
    Column('b_hb', Integer),
    Column('b_pcv', Integer),
    Column('b_esr', Integer),
    Column('b_tc', Integer),
    Column('b_dc', Integer),
    Column('b_pc', Integer),
    Column('b_pt', Integer),
    Column('b_inr', Integer),
    Column('time_created', TIMESTAMP, server_default=func.now()),
    Column('time_updated', TIMESTAMP, onupdate=func.now())
)

# kidney test table Structure
kidney_test = Table(
    'kidney_test', meta,
    Column('patient_id',
            Integer, 
            ForeignKey("basic_info.patient_id",
                      onupdate="CASCADE",
                      ondelete="CASCADE"),
            primary_key=True,
            unique=True,
            nullable=False),
    Column('k_bu', Integer),
    Column('k_cc', Integer),
    Column('k_ss', Integer),
    Column('k_sp', Integer),
    Column('k_sc', Integer),
    Column('k_sca', Integer),
    Column('k_ur', Integer),
    Column('time_created', TIMESTAMP, server_default=func.now()),
    Column('time_updated', TIMESTAMP, onupdate=func.now())
)

# liver test table Structure
liver_test = Table(
    'liver_test', meta,
    Column('patient_id',
            Integer, 
            ForeignKey("basic_info.patient_id",
                      onupdate="CASCADE",
                      ondelete="CASCADE"),
            primary_key=True,
            unique=True,
            nullable=False),
    Column('itb', Integer),
    Column('idb', Integer),
    Column('iib', Integer),
    Column('isgot', Integer),
    Column('isgpt', Integer),
    Column('iap', Integer),
    Column('time_created', TIMESTAMP, server_default=func.now()),
    Column('time_updated', TIMESTAMP, onupdate=func.now())
)

# assessment table Structure
assessment = Table(
    'assessment', meta,
    Column('patient_id',
            Integer, 
            ForeignKey("basic_info.patient_id",
                      onupdate="CASCADE",
                      ondelete="CASCADE"),
            primary_key=True,
            unique=True,
            nullable=False),
    Column('wbs_asses', Integer),
    Column('clinical_findings', String),
    Column('imaging', String),
    Column('biopsy', String),
    Column('ihc_flow_cytometry', String),
    Column('scopies', String),
    Column('tumor_markers', String),
    Column('d_site', String),
    Column('d_subsite', String),
    Column('d_final', String),
    Column('s_stage', String),
    Column('d_factors', String),
    Column('d_tp', String),
    Column('time_created', TIMESTAMP, server_default=func.now()),
    Column('time_updated', TIMESTAMP, onupdate=func.now())
)