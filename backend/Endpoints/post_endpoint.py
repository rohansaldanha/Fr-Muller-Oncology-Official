from asyncpg import UniqueViolationError
from fastapi import APIRouter, status, HTTPException

from pydantic_schemas.basic_schema import Basic

from alchemy_models.models import basic_info
from alchemy_models.models import patient_info
from alchemy_models.models import patient_history
from alchemy_models.models import complaint_info
from alchemy_models.models import c_examination
from alchemy_models.models import blood_test
from alchemy_models.models import kidney_test
from alchemy_models.models import liver_test
from alchemy_models.models import assessment
from alchemy_models.db_meta import database

# APIRouter creates path operations for user module
post_router = APIRouter(
    prefix="/api/create",
    tags=['Create Queries']
)

@post_router.post("/create_new_record", status_code=status.HTTP_201_CREATED)
async def create_new_record(basic: Basic):
    basic_ins = basic_info.insert().values(
        first_name=basic.first_name,
        last_name=basic.last_name,
        contact_no=basic.contact_no,
        age=basic.age,
        sex=basic.sex,
        ipop_number=basic.ipop_number
    )
    
    patient_obj = basic.patient_patient
    patient_ins = patient_info.insert().values(
        date_time=patient_obj.date_time,
        status=patient_obj.status,
        ecgo=patient_obj.ecgo,
        pulse=patient_obj.pulse,
        bp=patient_obj.bp,
        respiration_rate=patient_obj.respiration_rate,
        temperature=patient_obj.temperature,
        pallor=patient_obj.pallor,
        jaundice=patient_obj.jaundice,
        cyanosis=patient_obj.cyanosis,
        odema=patient_obj.odema,
        clubbing=patient_obj.clubbing,
        lymph_node=patient_obj.lymph_node,
        nutrition_status=patient_obj.nutrition_status,
        built=patient_obj.built,
        height=patient_obj.height,
        weight=patient_obj.weight,
        bsa=patient_obj.bsa,
        unhealthy_habits=patient_obj.unhealthy_habits,
        family_history=patient_obj.family_history,
        allergy=patient_obj.allergy
    )
    
    history_obj = basic.patient_history
    history_ins = patient_history.insert().values(
        hypertention=history_obj.hypertention,
        d_hypertention=history_obj.d_hypertention,
        diabetes=history_obj.diabetes,
        d_diabetes=history_obj.d_diabetes,
        heart_disease=history_obj.heart_disease,
        d_heart_disease=history_obj.d_heart_disease,
        respiratory_disease=history_obj.respiratory_disease,
        d_respiratory_disease=history_obj.d_respiratory_disease,
        rheumatic_disease=history_obj.rheumatic_disease,
        d_rheumatic_disease=history_obj.d_rheumatic_disease,
        neurological_disease=history_obj.neurological_disease,
        d_neurological_disease=history_obj.d_neurological_disease,
        psychiatric_disease=history_obj.psychiatric_disease,
        d_psychiatric_disease=history_obj.d_psychiatric_disease,
        previous_surgery=history_obj.previous_surgery,
        d_previous_surgery=history_obj.d_previous_surgery
    )
    
    complaint_obj = basic.patient_complaint
    complaint_ins = complaint_info.insert().values(
        present_complaint=complaint_obj.present_complaint,
        datetime=complaint_obj.datetime,
        duration=complaint_obj.duration,
        severity=complaint_obj.severity
    )

    examination_obj = basic.patient_examination
    examination_ins = c_examination.insert().values(
        i_number=examination_obj.i_number,
        i_size=examination_obj.i_size,
        i_epicenter=examination_obj.i_epicenter,
        i_extend=examination_obj.i_extend,
        i_surrounding=examination_obj.i_surrounding,
        i_status=examination_obj.i_status,
        r_number=examination_obj.r_number,
        r_size=examination_obj.r_size,
        r_mobility=examination_obj.r_mobility,
        r_relation=examination_obj.r_relation,
        r_status=examination_obj.r_status,
        s_organ_involved=examination_obj.s_organ_involved,
        s_number=examination_obj.s_number,
        s_size=examination_obj.s_size,
        s_status=examination_obj.s_status
    )
    blood_obj = basic.patient_blood
    blood_ins = blood_test.insert().values(
        b_hb=blood_obj.b_hb,
        b_pcv=blood_obj.b_pcv,
        b_esr=blood_obj.b_esr,
        b_tc=blood_obj.b_tc,
        b_dc=blood_obj.b_dc,
        b_pc=blood_obj.b_pc,
        b_pt=blood_obj.b_pt,
        b_inr=blood_obj.b_inr
    )

    kidney_obj = basic.patient_kidney
    kidney_ins = kidney_test.insert().values(
        k_bu=kidney_obj.k_bu,
        k_cc=kidney_obj.k_cc,
        k_ss=kidney_obj.k_ss,
        k_sp=kidney_obj.k_sp,
        k_sc=kidney_obj.k_sc,
        k_sca=kidney_obj.k_sca,
        k_ur=kidney_obj.k_ur
    )
    
    liver_obj = basic.patient_liver
    liver_ins = liver_test.insert().values(
        itb=liver_obj.itb,
        idb=liver_obj.idb,
        iib=liver_obj.iib,
        isgot=liver_obj.isgot,
        isgpt=liver_obj.isgpt,
        iap=liver_obj.iap
    )
    
    assessment_obj = basic.patient_assessment
    assessment_ins = assessment.insert().values(
        wbs_asses=assessment_obj.wbs_asses,
        clinical_findings=assessment_obj.clinical_findings,
        imaging=assessment_obj.imaging,
        biopsy=assessment_obj.biopsy,
        ihc_flow_cytometry=assessment_obj.ihc_flow_cytometry,
        scopies=assessment_obj.scopies,
        tumor_markers=assessment_obj.tumor_markers,
        d_site=assessment_obj.d_site,
        d_subsite=assessment_obj.d_subsite,
        d_final=assessment_obj.d_final,
        s_stage=assessment_obj.s_stage,
        d_factors=assessment_obj.d_factors,
        d_tp=assessment_obj.d_tp
    )

    transaction = await database.transaction()
    try:
        await database.execute(basic_ins)
        await database.execute(patient_ins)
        await database.execute(history_ins)
        await database.execute(complaint_ins)
        await database.execute(examination_ins)
        await database.execute(blood_ins)
        await database.execute(kidney_ins)
        await database.execute(liver_ins)
        await database.execute(assessment_ins)

    except UniqueViolationError:
        await transaction.rollback()
        raise HTTPException(status_code=status.HTTP_409_CONFLICT,
                            detail=f'duplicate key value violates unique constraint {UniqueViolationError}')
    else:
        await transaction.commit()
        return {**basic.dict()}

    
    