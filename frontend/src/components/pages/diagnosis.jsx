import React, { useState } from "react";
import { Textarea } from "@nextui-org/react";

function Diagnosis() {
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
    <div className="app">
      <form>
        <Textarea
          label="IHC/Flow Cytometry"
          value={ihc}
          rows={2}
          required
          onChange={(e) => {
            handleIhcChange(e);
          }}
        />
        <br />

        <Textarea
          label="Scopies"
          value={scopies}
          rows={2}
          required
          onChange={(e) => {
            handleScopiesChange(e);
          }}
        />
        <br />

        <Textarea
          label="Tumor Markers"
          value={tumor}
          rows={2}
          required
          onChange={(e) => {
            handleTumorChange(e);
          }}
        />
        <br />

        <h4>Diagnosis & Plan</h4>

        <table border="1" style={{ width: "100%" }}>
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
      </form>
    </div>
  );
}

export default Diagnosis;
