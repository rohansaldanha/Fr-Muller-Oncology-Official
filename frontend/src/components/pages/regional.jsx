import React, { useState } from "react";
import { Textarea } from "@nextui-org/react";

function Regional() {
  const [RegNumber, setRegNum] = useState("");
  const [RegSize, setRegSize] = useState("");
  const [RegMobility, setRegMobility] = useState("");
  const [RegRelation, setRegRelation] = useState("");
  const [RegNstatus, setRegNstatus] = useState("");

  const handleRegNumChange = (e) => {
    setRegNum(e.target.value);
  };

  const handleRegSizeChange = (e) => {
    setRegSize(e.target.value);
  };

  const handleRegMobilityChange = (e) => {
    setRegMobility(e.target.value);
  };

  const handleRegRelationChange = (e) => {
    setRegRelation(e.target.value);
  };

  const handleRegNstatusChange = (e) => {
    setRegNstatus(e.target.value);
  };

  return (
    <div>
      <form>
        <table style={{ width: "100%" }} border="1">
          <th>Regional</th>
          <th>Findings</th>

          <tr>
            <td>Number</td>
            <td>
              <Textarea
                value={RegNumber}
                fullWidth
                rows={2}
                required
                onChange={(e) => {
                  handleRegNumChange(e);
                }}
              />
            </td>
          </tr>

          <tr>
            <td>Size</td>
            <td>
              <Textarea
                value={RegSize}
                fullWidth
                rows={2}
                required
                onChange={(e) => {
                  handleRegSizeChange(e);
                }}
              />
            </td>
          </tr>

          <tr>
            <td>Epicenter</td>
            <td>
              <Textarea
                value={RegMobility}
                fullWidth
                rows={2}
                required
                onChange={(e) => {
                  handleRegMobilityChange(e);
                }}
              />
            </td>
          </tr>

          <tr>
            <td>Extent</td>
            <td>
              <Textarea
                value={RegRelation}
                fullWidth
                rows={2}
                required
                onChange={(e) => {
                  handleRegRelationChange(e);
                }}
              />
            </td>
          </tr>

          <tr>
            <td>
              Surroundings invasion:
              <br />
              Relation to:
            </td>

            <td>
              <Textarea
                placeholder="Vessels/nerves/muscles/bone/organ"
                value={RegNstatus}
                fullWidth
                rows={2}
                required
                onChange={(e) => {
                  handleRegNstatusChange(e);
                }}
              />
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
}

export default Regional;
