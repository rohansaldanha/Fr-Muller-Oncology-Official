import React, { useState } from "react";
import { Textarea } from "@nextui-org/react";

function Local() {
  const [LocNumber, setLocNum] = useState("");
  const [LocSize, setLocSize] = useState("");
  const [LocEpicenter, setLocEpicenter] = useState("");
  const [LocExtent, setLocExtent] = useState("");
  const [LocSurroundings, setLocSurroundings] = useState("");
  const [LocTstatus, setLocTstatus] = useState("");

  const handleLocNumChange = (e) => {
    setLocNum(e.target.value);
  };

  const handleLocSizeChange = (e) => {
    setLocSize(e.target.value);
  };

  const handleLocEpicenterChange = (e) => {
    setLocEpicenter(e.target.value);
  };

  const handleLocExtentChange = (e) => {
    setLocExtent(e.target.value);
  };

  const handleLocSurroundingsChange = (e) => {
    setLocSurroundings(e.target.value);
  };

  const handleLocTstatusChange = (e) => {
    setLocTstatus(e.target.value);
  };

  return (
    <div className="app">
      <form>
        <table>
          <th>Local</th>
          <th>Findings</th>

          <tr>
            <td>Number</td>
            <td>
              <Textarea
                value={LocNumber}
                rows={2}
                required
                onChange={(e) => {
                  handleLocNumChange(e);
                }}
              />
            </td>
          </tr>

          <tr>
            <td>Size</td>
            <td>
              <Textarea
                value={LocSize}
                rows={2}
                required
                onChange={(e) => {
                  handleLocSizeChange(e);
                }}
              />
            </td>
          </tr>

          <tr>
            <td>Epicenter</td>
            <td>
              <Textarea
                value={LocEpicenter}
                rows={2}
                required
                onChange={(e) => {
                  handleLocEpicenterChange(e);
                }}
              />
            </td>
          </tr>

          <tr>
            <td>Extent</td>
            <td>
              <Textarea
                value={LocExtent}
                rows={2}
                required
                onChange={(e) => {
                  handleLocExtentChange(e);
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
                value={LocSurroundings}
                rows={2}
                required
                onChange={(e) => {
                  handleLocSurroundingsChange(e);
                }}
              />
            </td>
          </tr>

          <tr>
            <td>T status</td>
            <td>
              <Textarea
                value={LocTstatus}
                rows={2}
                required
                onChange={(e) => {
                  handleLocTstatusChange(e);
                }}
              />
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
}

export default Local;
