import React, { useState } from "react";
import { Input } from "@nextui-org/react";

function Nutrition() {
  const [Normal, setNormal] = useState("");
  const [SymptomaticOW, setSymptomaticOW] = useState("");
  const [SymptomaticL50, setSymptomaticL50] = useState("");
  const [SymptomaticG50, setSymptomaticG50] = useState("");
  const [Moribund, setMoribund] = useState("");

  const handleNormalChange = (e) => {
    setNormal(e.target.value);
  };

  const handleSymptomaticOWChange = (e) => {
    setSymptomaticOW(e.target.value);
  };

  const handleSymptomaticL50Change = (e) => {
    setSymptomaticL50(e.target.value);
  };

  const handleSymptomaticG50Change = (e) => {
    setSymptomaticG50(e.target.value);
  };

  const handleMoribundChange = (e) => {
    setMoribund(e.target.value);
  };

  return (
    <div className="app">
      <form>
        <table style={{ width: "100%" }} border="1">
          <th>Grade</th>
          <th></th>
          <th>Score</th>

          <tr>
            <td>0</td>
            <td>Normal</td>
            <td>
              <Input
                clearable
                type="number"
                value={Normal}
                required
                onChange={(e) => {
                  handleNormalChange(e);
                }}
              />
            </td>
          </tr>

          <tr>
            <td>1</td>
            <td>Symptomatic but on work</td>
            <td>
              <Input
                type="number"
                clearable
                value={SymptomaticOW}
                required
                onChange={(e) => {
                  handleSymptomaticOWChange(e);
                }}
              />
            </td>
          </tr>

          <tr>
            <td>2</td>
            <td>Symptomatic &lt; 50% on bed</td>
            <td>
              <Input
                clearable
                type="number"
                value={SymptomaticL50}
                required
                onChange={(e) => {
                  handleSymptomaticL50Change(e);
                }}
              />
            </td>
          </tr>

          <tr>
            <td>3</td>
            <td>Symptomatic &gt; 50% on bed</td>
            <td>
              <Input
                clearable
                type="number"
                value={SymptomaticG50}
                layout="horizontal"
                variant="filled"
                required
                onChange={(e) => {
                  handleSymptomaticG50Change(e);
                }}
              />
            </td>
          </tr>

          <tr>
            <td>4</td>
            <td>Moribund</td>
            <td>
              <Input
                clearable
                type="number"
                value={Moribund}
                required
                onChange={(e) => {
                  handleMoribundChange(e);
                }}
              />
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
}

export default Nutrition;
