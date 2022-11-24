import React from "react";
import { Grid, Text } from "@nextui-org/react";
import "./Main.css";
import Basic from "./pages/Basic";
import General from "./pages/GeneralExamination";
// import Feedback from "./pages/Feedback";
import Diagnosis from "./pages/Diagnosis";
// import TableDemo from "./pages/history";
import Past from "./pages/pastHistory";
import Local from "./pages/local";
import Regional from "./pages/regional";
import Systematic from "./pages/systematic";
import Grouping from "./pages/Grouping";
import Viral from "./pages/viral";
import Nutrition from "./pages/nutrition";
import Performance from "./pages/performance";
import { Button } from "@nextui-org/react";
import { ShieldTwoTone } from "@mui/icons-material";

function Main() {
  const handleSubmit = (e) => {};
  const handleCancel = (e) => {};

  return (
    <div>
        <Basic />
        <General />
        {/* <Feedback /> */}
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
          h3
          size={25}
          css={{
            textGradient: "45deg, $yellow600 -20%, $red600 100%"
          }}
          weight="bold"
        >
          HISTORY
        </Text>
        {/* <TableDemo /> */}
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
          h3
          size={25}
          css={{
            textGradient: "45deg, $yellow600 -20%, $red600 100%"
          }}
          weight="bold"
        >
          LOCAL
        </Text>
        <Local />

        <Text
          h1
          size={30}
          css={{
            textGradient: "45deg, $blue600 -20%, $pink600 50%"
          }}
          weight="bold"
        >
          REGIONAL        
        </Text>
        <Regional />

        <Text
          h1
          size={30}
          css={{
            textGradient: "45deg, $blue600 -20%, $pink600 50%"
          }}
          weight="bold"
        >
          SYSTEMIC        
        </Text>
        <Systematic />

        <Text
          h1
          size={30}
          css={{
            textGradient: "45deg, $blue600 -20%, $pink600 50%"
          }}
          weight="bold"
        >
          DIAGNOSIS:       
        </Text>

        
        <Text
          h1
          size={20}
          css={{
            textGradient: "45deg, $blue600 -20%, $pink600 50%"
          }}
          weight="bold"
        >
          ROUTINE INVESTIGATIONS        
        </Text>
        <Text
          h3
          size={25}
          css={{
            textGradient: "45deg, $yellow600 -20%, $red600 100%"
          }}
          weight="bold"
        >
          Blood Grouping
        </Text>
        <Grouping />


        <Text
          h1
          size={30}
          css={{
            textGradient: "45deg, $blue600 -20%, $pink600 50%"
          }}
          weight="bold"
        >
          VIRAL        
        </Text>
        <Viral />

        <Text
          h1
          size={30}
          css={{
            textGradient: "45deg, $blue600 -20%, $pink600 50%"
          }}
          weight="bold"
        >
          NUTRITIONAL ASSESSMENT        
        </Text>
        <Nutrition />

        <Text
          h1
          size={30}
          css={{
            textGradient: "45deg, $blue600 -20%, $pink600 50%"
          }}
          weight="bold"
        >
          PERFORMANCE ASSESSMENT        
        </Text>
        <Performance />

        <Grid.Container css={{paddingLeft: "28%" , mt: "$10"}} gap={2}>
        <Grid>
        <Button color="success"  ghost onSubmit={(e) => { handleSubmit(e); }}>
          SAVE
        </Button>
        </Grid>
        <Grid>
        <Button color="error"  ghost onCancel={(e) => { handleCancel(e); }}>
          CANCEL
        </Button>
        </Grid>
        </Grid.Container>
    </div>
  );
}

export default Main;