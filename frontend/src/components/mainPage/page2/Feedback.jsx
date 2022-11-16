import React, { useState } from "react";
import "./page2.css";
import SimpleFeedback from "react-simple-feedback";
import { Text } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";

function Feedback() {
  const [findings, setFindings] = useState("");
  const [imaging, setImaging] = useState("");
  const [biopsy, setBiopsy] = useState("");

  const handleFindingsChange = (e) => {
    setFindings(e.target.value);
  };

  const handleImagingChange = (e) => {
    setImaging(e.target.value);
  };

  const handleBiopsyChange = (e) => {
    setBiopsy(e.target.value);
  };

  return (
    <div>
      <form>
        <Text
          h1
          size={30}
          css={{
            textGradient: "45deg, $blue600 -20%, $pink600 50%"
          }}
          weight="bold"
        >
          PAIN ASSESSMENT
        </Text>

        <SimpleFeedback
          label="WONG BAKER SCALE"
          onClose={() => window.location.reload()}
          tags={[
            {
              value: 0,
              emoji: "😊",
              label: "1"
            },
            {
              value: 1,
              emoji: "🙂",
              label: "2"
            },
            {
              value: 2,
              emoji: "😐",
              label: "3"
            },
            {
              value: 4,
              emoji: "🙁",
              label: "4"
            },
            {
              value: 5,
              emoji: "😢",
              label: "5"
            }
          ]}
        />

        <div>
          <Textarea
            label="Clinical Findings"
            rows={5}
            cols={50}
            value={findings}
            onChange={(e) => {
              handleFindingsChange(e);
            }}
          />
        </div>

        <Text
          h1
          size={25}
          css={{
            textGradient: "45deg, $blue600 -20%, $pink600 50%"
          }}
          weight="bold"
        >
          Investigations
        </Text>

        <div>
          <Textarea
            value={imaging}
            label="Imaging"
            rows={5}
            cols={50}
            required
            onChange={(e) => {
              handleImagingChange(e);
            }}
          />
        </div>

        <div>
          <Textarea
            value={biopsy}
            label="Biopsy"
            rows={5}
            cols={50}
            required
            onChange={(e) => {
              handleBiopsyChange(e);
            }}
          />
        </div>
      </form>
    </div>
  );
}

export default Feedback;
