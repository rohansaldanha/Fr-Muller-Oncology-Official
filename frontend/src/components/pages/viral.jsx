import React, { useState } from "react";
import { Input } from "@nextui-org/react";

function Viral() {
  const [HIV, setHIV] = useState("");
  const [HBSAG7, setHBSAG7] = useState("");
  const [CARDIAC, setCARDIAC] = useState("");
  const [ECG, setECG] = useState("");
  const [DECHO, setDECHO] = useState("");
  const [PULMONARY, setPULMONARY] = useState("");

  const handleHIVChange = (e) => {
    setHIV(e.target.value);
  };

  const handleHBSAG7Change = (e) => {
    setHBSAG7(e.target.value);
  };

  const handleCARDIACChange = (e) => {
    setCARDIAC(e.target.value);
  };

  const handleECGChange = (e) => {
    setECG(e.target.value);
  };

  const handleDECHOChange = (e) => {
    setDECHO(e.target.value);
  };

  const handlePULMONARYChange = (e) => {
    setPULMONARY(e.target.value);
  };

  return (
    <div className="app">
      <form>
        <table>
          <tr>
            <td>
              <label>HIV:</label>
            </td>
            <td>
              <Input
                value={HIV}
                clearable
                required
                onChange={(e) => {
                  handleHIVChange(e);
                }}
              />
            </td>
          </tr>

          <tr>
            <td>
              <label>HBSAG7:</label>
            </td>
            <td>
              <Input
                value={HBSAG7}
                clearable
                required
                onChange={(e) => {
                  handleHBSAG7Change(e);
                }}
              />
            </td>
          </tr>

          <tr>
            <td>
              <label>CARDIAC:</label>
            </td>
            <td>
              <Input
                value={CARDIAC}
                clearable
                required
                onChange={(e) => {
                  handleCARDIACChange(e);
                }}
              />
            </td>
          </tr>

          <tr>
            <td>
              <label>ECG:</label>
            </td>
            <td>
              <Input
                value={ECG}
                clearable
                required
                onChange={(e) => {
                  handleECGChange(e);
                }}
              />
            </td>
          </tr>

          <tr>
            <td>
              <label>2DECHO:</label>
            </td>
            <td>
              <Input
                value={DECHO}
                clearable
                required
                onChange={(e) => {
                  handleDECHOChange(e);
                }}
              />
            </td>
          </tr>

          <tr>
            <td>
              <label>PULMONARY:</label>
            </td>
            <td>
              <Input
                value={PULMONARY}
                clearable
                required
                onChange={(e) => {
                  handlePULMONARYChange(e);
                }}
              />
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
}

export default Viral;
