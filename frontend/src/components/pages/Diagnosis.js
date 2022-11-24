import React, { useState } from "react";
import { Textarea, Spacer, Grid } from "@nextui-org/react";

function Diagnosis() {
  var spacer_x_value = 5;

  const [ihc, setIhc] = useState("");
  const [scopies, setScopies] = useState("");
  const [tumor, setTumor] = useState("");
  const [site, setSite] = useState("");
  const [subSite, setSubSite] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [stage, setStage] = useState("");
  const [factors, setFactors] = useState("");
  const [treatmentPlan, setTreatmentPlan] = useState("");

  const handleIhcChange = (e) => {
    setIhc(e.target.value);
  };

  const handleScopiesChange = (e) => {
    setScopies(e.target.value);
  };

  const handleTumorChange = (e) => {
    setTumor(e.target.value);
  };

  const handleSiteChange = (e) => {
    setSite(e.target.value);
  };

  const handleSubSiteChange = (e) => {
    setSubSite(e.target.value);
  };

  const handleDiagnosisChange = (e) => {
    setDiagnosis(e.target.value);
  };

  const handleStageChange = (e) => {
    setStage(e.target.value);
  };

  const handleFactorsChange = (e) => {
    setFactors(e.target.value);
  };

  const handleTreatmentPlanChange = (e) => {
    setTreatmentPlan(e.target.value);
  };

  return (
    <div>
      <Grid.Container gap={1}>
        <Grid>
          <Textarea
            label="IHC/Flow Cytometry"
            value={ihc}
            rows={2}
            required
            onChange={(e) => {
              handleIhcChange(e);
            }}
          />
        </Grid>
        <Spacer x={spacer_x_value} />

        <Grid>
          <Textarea
            label="Scopies"
            value={scopies}
            rows={2}
            required
            onChange={(e) => {
              handleScopiesChange(e);
            }}
          />
        </Grid>
        <Spacer x={spacer_x_value} />

        <Grid>
          <Textarea
            label="Tumor Markers"
            value={tumor}
            rows={2}
            required
            onChange={(e) => {
              handleTumorChange(e);
            }}
          />
        </Grid>
      </Grid.Container>

      <h4>Diagnosis & Plan</h4>

      <table style={{ width: "100%" }}>
        <tr>
          <td>
            <label>Site</label>
          </td>
          <td>
            <Textarea
              value={site}
              rows={2}
              required
              onChange={(e) => {
                handleSiteChange(e);
              }}
            />
          </td>
        </tr>

        <tr>
          <td>
            <label>Sub Site</label>
          </td>
          <td>
            <Textarea
              value={subSite}
              rows={2}
              required
              onChange={(e) => {
                handleSubSiteChange(e);
              }}
            />
          </td>
        </tr>

        <tr>
          <td>
            <label>Final Diagnosis</label>
          </td>
          <td>
            <Textarea
              rows={2}
              value={diagnosis}
              required
              onChange={(e) => {
                handleDiagnosisChange(e);
              }}
            />
          </td>
        </tr>

        <tr>
          <td>
            <label>Stage</label>
          </td>
          <td>
            <Textarea
              rows={2}
              value={stage}
              required
              onChange={(e) => {
                handleStageChange(e);
              }}
            />
          </td>
        </tr>

        <tr>
          <td>
            <label>Prognostic & Predictive Factors</label>
          </td>
          <td>
            <Textarea
              rows={2}
              value={factors}
              required
              onChange={(e) => {
                handleFactorsChange(e);
              }}
            />
          </td>
        </tr>

        <tr>
          <td>
            <label>Multimodality Treatment Plan</label>
          </td>
          <td>
            <Textarea
              rows={2}
              value={treatmentPlan}
              required
              onChange={(e) => {
                handleTreatmentPlanChange(e);
              }}
            />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Diagnosis;
