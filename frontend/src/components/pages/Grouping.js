import React, { useState } from "react";
import { Input } from "@nextui-org/react";
// import ReactDOM from "react-dom";

function Grouping() {
  const [HB, setHB] = useState("");
  const [PCV, setPCV] = useState("");
  const [ESR, setESR] = useState("");
  const [TC, setTC] = useState("");
  const [DC, setDC] = useState("");
  const [PLATELET, setPLATELET] = useState("");
  const [PROTHROMBIN, setPROTHROMBIN] = useState("");
  const [INR, setINR] = useState("");
  const [UREA, setUREA] = useState("");
  const [CREATININE, setCREATININE] = useState("");
  const [SODIUM, setSODIUM] = useState("");
  const [POTASSIUM, setPOTASSIUM] = useState("");
  const [CHLORIDE, setCHLORIDE] = useState("");
  const [CALCIUM, setCALCIUM] = useState("");
  const [URINE, setURINE] = useState("");
  const [TOTALBILIRUBIN, setTOTALBILIRUBIN] = useState("");
  const [DIRECTBILIRUBIN, setDIRECTBILIRUBIN] = useState("");
  const [INDIRECTBILIRUBIN, setINDIRECTBILIRUBIN] = useState("");
  const [SGOT, setSGOT] = useState("");
  const [SGPT, setSGPT] = useState("");
  const [ALKAINE, setALKAINE] = useState("");
  const [PROTEIN, setPROTEIN] = useState("");
  const [ALBUMIN, setALBUMIN] = useState("");
  const [GLOBULIN, setGLOBULIN] = useState("");
  const [RBS, setRBS] = useState("");
  const [FBS, setFBS] = useState("");
  const [PPBS, setPPBS] = useState("");
  const [HBIAC, setHBIAC] = useState("");
  const [Ft4, setFt4] = useState("");
  const [T3, setT3] = useState("");
  const [T4, setT4] = useState("");
  const [TSH, setTSH] = useState("");
  const [CORTISOL, setCORTISOL] = useState("");

  const handleHBChange = (e) => {
    setHB(e.target.value);
  };

  const handlePCVChange = (e) => {
    setPCV(e.target.value);
  };

  const handleESRChange = (e) => {
    setESR(e.target.value);
  };

  const handleTCChange = (e) => {
    setTC(e.target.value);
  };

  const handleDCChange = (e) => {
    setDC(e.target.value);
  };

  const handlePLATELETChange = (e) => {
    setPLATELET(e.target.value);
  };

  const handlePROTHROMBINChange = (e) => {
    setPROTHROMBIN(e.target.value);
  };

  const handleINRChange = (e) => {
    setINR(e.target.value);
  };

  const handleUREAChange = (e) => {
    setUREA(e.target.value);
  };

  const handleCREATININEChange = (e) => {
    setCREATININE(e.target.value);
  };

  const handleSODIUMChange = (e) => {
    setSODIUM(e.target.value);
  };

  const handlePOTASSIUMChange = (e) => {
    setPOTASSIUM(e.target.value);
  };

  const handleCHLORIDEChange = (e) => {
    setCHLORIDE(e.target.value);
  };

  const handleCALCIUMChange = (e) => {
    setCALCIUM(e.target.value);
  };

  const handleURINEChange = (e) => {
    setURINE(e.target.value);
  };

  const handleTOTALBILIRUBINChange = (e) => {
    setTOTALBILIRUBIN(e.target.value);
  };

  const handleDIRECTBILIRUBINChange = (e) => {
    setDIRECTBILIRUBIN(e.target.value);
  };

  const handleINDIRECTBILIRUBINChange = (e) => {
    setINDIRECTBILIRUBIN(e.target.value);
  };

  const handleSGOTChange = (e) => {
    setSGOT(e.target.value);
  };

  const handleSGPTChange = (e) => {
    setSGPT(e.target.value);
  };

  const handleALKAINEChange = (e) => {
    setALKAINE(e.target.value);
  };

  const handlePROTEINChange = (e) => {
    setPROTEIN(e.target.value);
  };

  const handleALBUMINChange = (e) => {
    setALBUMIN(e.target.value);
  };

  const handleGLOBULINChange = (e) => {
    setGLOBULIN(e.target.value);
  };

  const handleRBSChange = (e) => {
    setRBS(e.target.value);
  };

  const handleFBSChange = (e) => {
    setFBS(e.target.value);
  };

  const handlePPBSChange = (e) => {
    setPPBS(e.target.value);
  };

  const handleHBIACChange = (e) => {
    setHBIAC(e.target.value);
  };

  const handleFt4Change = (e) => {
    setFt4(e.target.value);
  };

  const handleT3Change = (e) => {
    setT3(e.target.value);
  };

  const handleT4Change = (e) => {
    setT4(e.target.value);
  };

  const handleTSHChange = (e) => {
    setTSH(e.target.value);
  };

  const handleCORTISOLChange = (e) => {
    setCORTISOL(e.target.value);
  };

  return (
    <div className="app">
      <form>
        <table style={{ width: "100%" }}>
          <tr>
            <th></th>
            <th>VALUES</th>
            <th>NORMAL RANGE</th>
            <th>UNITS</th>
          </tr>

          <tr>
            <th colSpan={4}>Blood</th>
          </tr>

          <tr>
            <td>HB</td>
            <td>
              <Input
                type="number"
                clearable
                value={HB}
                required
                onChange={(e) => {
                  handleHBChange(e);
                }}
              />
            </td>
            <td>12 TO 15</td>
            <td>G/DL</td>
          </tr>
          <tr>
            <td>PCV</td>
            <td>
              <Input
                type="number"
                clearable
                value={PCV}
                required
                onChange={(e) => {
                  handlePCVChange(e);
                }}
              />
            </td>
            <td>36 TO 47</td>
            <td>%</td>
          </tr>
          <tr>
            <td>ESR</td>
            <td>
              <Input
                type="number"
                clearable
                value={ESR}
                required
                onChange={(e) => {
                  handleESRChange(e);
                }}
              />
            </td>
            <td>0 TO 10</td>
            <td>MM/IST HR</td>
          </tr>
          <tr>
            <td>TC</td>
            <td>
              <Input
                type="number"
                clearable
                value={TC}
                required
                onChange={(e) => {
                  handleTCChange(e);
                }}
              />
            </td>
            <td>4 TO 11000</td>
            <td>/CCMM</td>
          </tr>

          <tr>
            <td>DC</td>
            <td>
              <Input
                type="number"
                clearable
                value={DC}
                required
                onChange={(e) => {
                  handleDCChange(e);
                }}
              />
            </td>
            <td></td>
            <td>%</td>
          </tr>
          <tr>
            <td>PLATELET COUNT</td>
            <td>
              <Input
                type="number"
                clearable
                value={PLATELET}
                required
                onChange={(e) => {
                  handlePLATELETChange(e);
                }}
              />
            </td>
            <td>150000 TO 500000/CCMM</td>
            <td>/CCMM</td>
          </tr>

          <tr>
            <td>PROTHROMBIN TIME</td>
            <td>
              <Input
                type="number"
                clearable
                value={PROTHROMBIN}
                required
                onChange={(e) => {
                  handlePROTHROMBINChange(e);
                }}
              />
            </td>
            <td>9.7 TO 12.5</td>
            <td></td>
          </tr>

          <tr>
            <td>INR</td>
            <td>
              <Input
                type="number"
                clearable
                value={INR}
                required
                onChange={(e) => {
                  handleINRChange(e);
                }}
              />
            </td>
            <td>0.9 TO 1.2</td>
            <td></td>
          </tr>
          <tr>
            <th colSpan={4}>RENAL</th>
          </tr>
          <tr>
            <td>B UREA</td>
            <td>
              <Input
                type="number"
                clearable
                value={UREA}
                required
                onChange={(e) => {
                  handleUREAChange(e);
                }}
              />
            </td>
            <td>10 TO 50</td>
            <td>MG/DL</td>
          </tr>
          <tr>
            <td>C CREATININE</td>
            <td>
              <Input
                type="number"
                clearable
                value={CREATININE}
                required
                onChange={(e) => {
                  handleCREATININEChange(e);
                }}
              />
            </td>
            <td>0.6 TO 1.2</td>
            <td>MG/DL</td>
          </tr>
          <tr>
            <td>S SODIUM</td>
            <td>
              <Input
                type="number"
                clearable
                value={SODIUM}
                required
                onChange={(e) => {
                  handleSODIUMChange(e);
                }}
              />
            </td>
            <td>136 TO 145</td>
            <td>MEQ/L</td>
          </tr>
          <tr>
            <td>S POTASSIUM</td>
            <td>
              <Input
                type="number"
                clearable
                value={POTASSIUM}
                required
                onChange={(e) => {
                  handlePOTASSIUMChange(e);
                }}
              />
            </td>
            <td>3.5 TO 5.1</td>
            <td>MEQ/L</td>
          </tr>
          <tr>
            <td>S CHLORIDE</td>
            <td>
              <Input
                type="number"
                clearable
                value={CHLORIDE}
                required
                onChange={(e) => {
                  handleCHLORIDEChange(e);
                }}
              />
            </td>
            <td>98 TO 107</td>
            <td>MEQ/L</td>
          </tr>
          <tr>
            <td>S CALCIUM</td>
            <td>
              <Input
                type="number"
                clearable
                value={CALCIUM}
                required
                onChange={(e) => {
                  handleCALCIUMChange(e);
                }}
              />
            </td>
            <td>8.4 TO 10.2</td>
            <td>MG/DL</td>
          </tr>
          <tr>
            <td>URINE ROUTINE</td>
            <td>
              <Input
                type="number"
                clearable
                value={URINE}
                required
                onChange={(e) => {
                  handleURINEChange(e);
                }}
              />
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th colSpan={4}>LIVER</th>
          </tr>
          <tr>
            <td>TOTAL BILIRUBIN</td>
            <td>
              <Input
                type="number"
                clearable
                value={TOTALBILIRUBIN}
                required
                onChange={(e) => {
                  handleTOTALBILIRUBINChange(e);
                }}
              />
            </td>
            <td>0.1 TO 1.2</td>
            <td>MG/DL</td>
          </tr>
          <tr>
            <td>DIRECT BILIRUBIN</td>
            <td>
              <Input
                type="number"
                clearable
                value={DIRECTBILIRUBIN}
                required
                onChange={(e) => {
                  handleDIRECTBILIRUBINChange(e);
                }}
              />
            </td>
            <td>UPTO 0.2</td>
            <td>MG/DL</td>
          </tr>

          <tr>
            <td>INDIRECT BILIRUBIN</td>
            <td>
              <Input
                type="number"
                clearable
                value={INDIRECTBILIRUBIN}
                required
                onChange={(e) => {
                  handleINDIRECTBILIRUBINChange(e);
                }}
              />
            </td>
            <td>0.2 TO 0.8</td>
            <td>MG/DL</td>
          </tr>

          <tr>
            <td>SGOT</td>
            <td>
              <Input
                type="number"
                clearable
                value={SGOT}
                required
                onChange={(e) => {
                  handleSGOTChange(e);
                }}
              />
            </td>
            <td>UPTO 35</td>
            <td>IU/L</td>
          </tr>

          <tr>
            <td>SGPT</td>
            <td>
              <Input
                type="number"
                clearable
                value={SGPT}
                required
                onChange={(e) => {
                  handleSGPTChange(e);
                }}
              />
            </td>
            <td>0 TO 45</td>
            <td></td>
          </tr>

          <tr>
            <td>ALKAINE PHOSPHATASE</td>
            <td>
              <Input
                type="number"
                clearable
                value={ALKAINE}
                required
                onChange={(e) => {
                  handleALKAINEChange(e);
                }}
              />
            </td>
            <td>40 TO 129</td>
            <td>IU/L</td>
          </tr>

          <tr>
            <td>TOTAL PROTEIN</td>
            <td>
              <Input
                type="number"
                clearable
                value={PROTEIN}
                required
                onChange={(e) => {
                  handlePROTEINChange(e);
                }}
              />
            </td>
            <td>6.4 TO 8.3</td>
            <td>G/DL</td>
          </tr>

          <tr>
            <td>ALBUMIN</td>
            <td>
              <Input
                type="number"
                clearable
                value={ALBUMIN}
                required
                onChange={(e) => {
                  handleALBUMINChange(e);
                }}
              />
            </td>
            <td>3.5 TO 5.2</td>
            <td>G/DL</td>
          </tr>

          <tr>
            <td>GLOBULIN</td>
            <td>
              <Input
                type="number"
                clearable
                value={GLOBULIN}
                required
                onChange={(e) => {
                  handleGLOBULINChange(e);
                }}
              />
            </td>
            <td>2.3 TO 3.5</td>
            <td>G/DL</td>
          </tr>

          <tr>
            <th colSpan={4}>ENDOCRINE</th>
          </tr>

          <tr>
            <td>RBS</td>
            <td>
              <Input
                type="number"
                value={RBS}
                clearable
                required
                onChange={(e) => {
                  handleRBSChange(e);
                }}
              />
            </td>
            <td>74 TO 140</td>
            <td>MG/DL</td>
          </tr>

          <tr>
            <td>FBS</td>
            <td>
              <Input
                type="number"
                value={FBS}
                clearable
                required
                onChange={(e) => {
                  handleFBSChange(e);
                }}
              />
            </td>
            <td>74 TO 100</td>
            <td>MG/DL</td>
          </tr>

          <tr>
            <td>PPBS</td>
            <td>
              <Input
                type="number"
                value={PPBS}
                clearable
                required
                onChange={(e) => {
                  handlePPBSChange(e);
                }}
              />
            </td>
            <td>74 TO 140</td>
            <td>MG/DL</td>
          </tr>

          <tr>
            <td>HBIAC</td>
            <td>
              <Input
                type="number"
                value={HBIAC}
                clearable
                required
                onChange={(e) => {
                  handleHBIACChange(e);
                }}
              />
            </td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td>Ft4</td>
            <td>
              <Input
                type="number"
                value={Ft4}
                clearable
                required
                onChange={(e) => {
                  handleFt4Change(e);
                }}
              />
            </td>
            <td>0.93 TO 1.7</td>
            <td>NG/DL</td>
          </tr>

          <tr>
            <td>T3</td>
            <td>
              <Input
                type="number"
                value={T3}
                clearable
                required
                onChange={(e) => {
                  handleT3Change(e);
                }}
              />
            </td>
            <td>0.8 TO 2</td>
            <td>NG/DL</td>
          </tr>

          <tr>
            <td>T4</td>
            <td>
              <Input
                type="number"
                value={T4}
                clearable
                required
                onChange={(e) => {
                  handleT4Change(e);
                }}
              />
            </td>
            <td>5.1 TO 14.1</td>
            <td>UG/DL</td>
          </tr>

          <tr>
            <td>TSH</td>
            <td>
              <Input
                type="number"
                value={TSH}
                clearable
                required
                onChange={(e) => {
                  handleTSHChange(e);
                }}
              />
            </td>
            <td>0.27 TO 4.2</td>
            <td>UTU/ML</td>
          </tr>
          <tr>
            <td>S CORTISOL</td>
            <td>
              {" "}
              <Input
                type="number"
                value={CORTISOL}
                clearable
                required
                onChange={(e) => {
                  handleCORTISOLChange(e);
                }}
              />
            </td>
            <td>171 TO 536</td>
            <td></td>
          </tr>
        </table>
      </form>
    </div>
  );
}

export default Grouping;
