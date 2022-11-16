import React from "react";
import { Text } from "@nextui-org/react";
import "./Main.css";
import Basic from "./page1/Basicdetails";
import General from "./page1/GeneralExamination";
import Feedback from "./page2/Feedback";
import Diagnosis from "./page3/diagnosis";
import TableDemo from "./page4/history";
import Past from "./page4/pastHistory";
import Local from "./page4/local";
import Regional from "./page4/regional";
import Systematic from "./page4/systematic";
import Grouping from "./page5/Grouping";
import Viral from "./page5/viral";
import Nutrition from "./page5/nutrition";
import Performance from "./page6/performance";
import { Button } from "@nextui-org/react";

function mainCon() {
  const handleSubmit = (e) => {};
  const handleCancel = (e) => {};

  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        onCancel={(e) => {
          handleCancel(e);
        }}
      >
        <Basic />
        <General />
        <Feedback />
        <Diagnosis />

        <Text
          h1
          size={30}
          css={{
            textGradient: "45deg, $blue600 -20%, $pink600 50%"
          }}
          weight="bold"
        >
          CASE RECORD
        </Text>

        <Text
          h1
          size={25}
          css={{
            textGradient: "45deg, $yellow600 -20%, $red600 100%"
          }}
          weight="bold"
        >
          HISTORY
        </Text>

        <TableDemo />
        <Past />

        <Text
          h1
          size={30}
          css={{
            textGradient: "45deg, $blue600 -20%, $pink600 50%"
          }}
          weight="bold"
        >
          CLINICAL EXAMINATION
        </Text>

        <Text
          h1
          size={25}
          css={{
            textGradient: "45deg, $yellow600 -20%, $red600 100%"
          }}
          weight="bold"
        >
          LOCAL
        </Text>

        <Local />
        <h3>REGIONAL</h3>
        <Regional />
        <h3>SYSTEMIC</h3>
        <Systematic />
        <h3>DIAGNOSIS:</h3>
        <h3>ROUTINE INVESTIGATIONS</h3>
        <h3>Blood Grouping:</h3>
        <Grouping />
        <h4>VIRAL</h4>
        <Viral />
        <h4>NUTRITIONAL ASSESSMENT</h4>
        <Nutrition />
        <h4>PERFORMANCE ASSESSMENT</h4>
        <Performance />
        <Button color="success" auto ghost>
          SAVE
        </Button>
        <Button color="error" auto ghost>
          CANCEL
        </Button>
      </form>
    </div>
  );
}

export default mainCon;
