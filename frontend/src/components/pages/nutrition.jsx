import React, { useState } from "react";
import { Textarea } from "@nextui-org/react";

function Nutrition() {
  const [VegNon, setVegNon] = useState("");
  const [Height, setHeight] = useState("");
  const [Weight, setWeight] = useState("");
  const [BSA, setBSA] = useState("");

  const handleVegNonChange = (e) => {
    setVegNon(e.target.value);
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleBSAChange = (e) => {
    setBSA(e.target.value);
  };

  return (
    <div className="app">
      <form>
        <table style={{ width: "100%" }} border="1">
          <tr>
            <td>Veg/Non. Veg</td>
            <td>
              <Textarea
                fullWidth
                value={VegNon}
                rows={2}
                required
                onChange={(e) => {
                  handleVegNonChange(e);
                }}
              />
            </td>
          </tr>

          <tr>
            <td>Height</td>
            <td>
              <Textarea
                fullWidth
                value={Height}
                rows={2}
                required
                onChange={(e) => {
                  handleHeightChange(e);
                }}
              />
            </td>
          </tr>

          <tr>
            <td>Weight</td>
            <td>
              <Textarea
                fullWidth
                value={Weight}
                rows={2}
                required
                placeholder="Expected & Observed weight:"
                onChange={(e) => {
                  handleWeightChange(e);
                }}
              />
            </td>
          </tr>

          <tr>
            <td>BSA</td>
            <td>
              <Textarea
                fullWidth
                value={BSA}
                rows={2}
                required
                onChange={(e) => {
                  handleBSAChange(e);
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
