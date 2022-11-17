import React, { useState } from "react";
import { Textarea } from "@nextui-org/react";

function PastHist() {
  const [hypertension, setHypertension] = useState("");
  const [diabetes, setDiabetes] = useState("");
  const [heart, setHeart] = useState("");
  const [respiratory, setRespiratory] = useState("");
  const [rheumatic, setRheumatic] = useState("");
  const [neurological, setNeurological] = useState("");
  const [psychiatric, setPsychiatric] = useState("");
  const [previousSurgery, setPreviousSurgery] = useState("");

  const [medHypertension, setMedHypertension] = useState("");
  const [medDiabetes, setMedDiabetes] = useState("");
  const [medHeart, setMedHeart] = useState("");
  const [medRespiratory, setMedRespiratory] = useState("");
  const [medRheumatic, setMedRheumatic] = useState("");
  const [medNeurological, setMedNeurological] = useState("");
  const [medPsychiatric, setMedPsychiatric] = useState("");
  const [medPreviousSurgery, setMedPreviousSurgery] = useState("");

  const handleHypertensionChange = (e) => {
    setHypertension(e.target.value);
  };

  const handleDiabetesChange = (e) => {
    setDiabetes(e.target.value);
  };

  const handleHeartChange = (e) => {
    setHeart(e.target.value);
  };

  const handleRespiratoryChange = (e) => {
    setRespiratory(e.target.value);
  };

  const handleRheumaticChange = (e) => {
    setRheumatic(e.target.value);
  };

  const handleNeurologicalChange = (e) => {
    setNeurological(e.target.value);
  };

  const handlePsychiatricChange = (e) => {
    setPsychiatric(e.target.value);
  };

  const handlePreviousSurgeryChange = (e) => {
    setPreviousSurgery(e.target.value);
  };

  const handleMedHypertensionChange = (e) => {
    setMedHypertension(e.target.value);
  };

  const handleMedDiabetesChange = (e) => {
    setMedDiabetes(e.target.value);
  };

  const handleMedHeartChange = (e) => {
    setMedHeart(e.target.value);
  };

  const handleMedRespiratoryChange = (e) => {
    setMedRespiratory(e.target.value);
  };

  const handleMedRheumaticChange = (e) => {
    setMedRheumatic(e.target.value);
  };

  const handleMedNeurologicalChange = (e) => {
    setMedNeurological(e.target.value);
  };

  const handleMedPsychiatricChange = (e) => {
    setMedPsychiatric(e.target.value);
  };

  const handleMedPreviousSurgeryChange = (e) => {
    setMedPreviousSurgery(e.target.value);
  };

  return (
    <div>
      <form>
        <table style={{ width: "100%" }} border="1">
          <th>Co morbidity</th>
          <th>Duration</th>
          <th>Medication</th>

          <tr>
            <td>
              <label>Hypertension</label>
            </td>
            <td>
              <Textarea
                value={hypertension}
                rows={2}
                required
                onChange={(e) => {
                  handleHypertensionChange(e);
                }}
              />
            </td>
            <td>
              <Textarea
                value={medHypertension}
                rows={2}
                required
                onChange={(e) => {
                  handleMedHypertensionChange(e);
                }}
              />
            </td>
          </tr>

          <tr>
            <td>
              <label>Diabetes Mellitus</label>
            </td>
            <td>
              <Textarea
                value={diabetes}
                rows={2}
                required
                onChange={(e) => {
                  handleDiabetesChange(e);
                }}
              />
            </td>
            <td>
              <Textarea
                value={medDiabetes}
                rows={2}
                required
                onChange={(e) => {
                  handleMedDiabetesChange(e);
                }}
              />
            </td>
          </tr>

          <tr>
            <td>
              <label>Heart disease</label>
            </td>
            <td>
              <Textarea
                value={heart}
                rows={2}
                required
                onChange={(e) => {
                  handleHeartChange(e);
                }}
              />
            </td>
            <td>
              <Textarea
                value={medHeart}
                rows={2}
                required
                onChange={(e) => {
                  handleMedHeartChange(e);
                }}
              />
            </td>
          </tr>

          <tr>
            <td>
              <label>Respiratory disease</label>
            </td>
            <td>
              <Textarea
                value={respiratory}
                rows={2}
                required
                onChange={(e) => {
                  handleRespiratoryChange(e);
                }}
              />
            </td>
            <td>
              <Textarea
                value={medRespiratory}
                rows={2}
                required
                onChange={(e) => {
                  handleMedRespiratoryChange(e);
                }}
              />
            </td>
          </tr>

          <tr>
            <td>
              <label>Rheumatic disease</label>
            </td>
            <td>
              <Textarea
                value={rheumatic}
                rows={2}
                required
                onChange={(e) => {
                  handleRheumaticChange(e);
                }}
              />
            </td>
            <td>
              <Textarea
                value={medRheumatic}
                rows={2}
                required
                onChange={(e) => {
                  handleMedRheumaticChange(e);
                }}
              />
            </td>
          </tr>

          <tr>
            <td>
              <label>Neurological disease</label>
            </td>
            <td>
              <Textarea
                value={neurological}
                rows={2}
                required
                onChange={(e) => {
                  handleNeurologicalChange(e);
                }}
              />
            </td>
            <td>
              <Textarea
                value={medNeurological}
                rows={2}
                required
                onChange={(e) => {
                  handleMedNeurologicalChange(e);
                }}
              />
            </td>
          </tr>

          <tr>
            <td>
              <label>Psychiatric illness</label>
            </td>
            <td>
              <Textarea
                value={psychiatric}
                rows={2}
                required
                onChange={(e) => {
                  handlePsychiatricChange(e);
                }}
              />
            </td>
            <td>
              <Textarea
                value={medPsychiatric}
                rows={2}
                required
                onChange={(e) => {
                  handleMedPsychiatricChange(e);
                }}
              />
            </td>
          </tr>

          <tr>
            <td>
              <label>Previous surgery/Treatment and time of treatment</label>
            </td>
            <td>
              <Textarea
                value={previousSurgery}
                rows={2}
                required
                onChange={(e) => {
                  handlePreviousSurgeryChange(e);
                }}
              />
            </td>
            <td>
              <Textarea
                value={medPreviousSurgery}
                rows={2}
                required
                onChange={(e) => {
                  handleMedPreviousSurgeryChange(e);
                }}
              />
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
}

export default PastHist;
