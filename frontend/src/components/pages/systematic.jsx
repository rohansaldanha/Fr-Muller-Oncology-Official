import React, { useState } from "react";
import { Textarea } from "@nextui-org/react";

function Systematic() {
  const [SysOrgan, setSysOrgan] = useState("");
  const [SysNum, setSysNum] = useState("");
  const [SysSize, setSysSize] = useState("");
  const [SysMstatus, setSysMstatus] = useState("");

  const handleSysOrganChange = (e) => {
    setSysOrgan(e.target.value);
  };

  const handleSysNumChange = (e) => {
    setSysNum(e.target.value);
  };

  const handleSysSizeChange = (e) => {
    setSysSize(e.target.value);
  };

  const handleSysMstatusChange = (e) => {
    setSysMstatus(e.target.value);
  };

  return (
    <div className="app">
      <form>
        <table>
          <th>Parameters</th>
          <th>Findings</th>

          <tr>
            <td>Organ involved</td>
            <td>
              <Textarea
                value={SysOrgan}
                cols={90}
                rows={2}
                required
                onChange={(e) => {
                  handleSysOrganChange(e);
                }}
              />
            </td>
          </tr>

          <tr>
            <td>Number</td>
            <td>
              <Textarea
                cols={90}
                value={SysNum}
                rows={2}
                required
                onChange={(e) => {
                  handleSysNumChange(e);
                }}
              />
            </td>
          </tr>

          <tr>
            <td>Size</td>
            <td>
              <Textarea
                value={SysSize}
                cols={90}
                rows={2}
                required
                onChange={(e) => {
                  handleSysSizeChange(e);
                }}
              />
            </td>
          </tr>

          <tr>
            <td>M status</td>
            <td>
              <Textarea
                rows={2}
                cols={90}
                value={SysMstatus}
                required
                onChange={(e) => {
                  handleSysMstatusChange(e);
                }}
              />
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
}

export default Systematic;
