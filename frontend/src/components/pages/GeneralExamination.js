import React, { useState } from "react";
import { Text } from "@nextui-org/react";
import { Input, Grid } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";


function General() {
  const [performance, setPerformance] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [pulse, setPulse] = useState("");
  const [bp, setBp] = useState("");
  const [rr, setRr] = useState("");
  const [temp, setTemp] = useState("");
  const [pallor, setPallor] = useState("");
  const [jaundice, setJaundice] = useState("");
  const [cyanosis, setCyanosis] = useState("");
  const [oedema, setOedema] = useState("");
  const [clubbing, setClubbing] = useState("");
  const [lymph, setLymph] = useState("");
  const [nutrition, setNutrition] = useState("");
  const [built, setBuilt] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bsa, setBSA] = useState("");
  const [habits, setHabits] = useState("");
  const [famHist, setFamhist] = useState("");
  const [allergy, setAllergy] = useState("");

  const handlePerformanceChange = (e) => {
    setPerformance(e.target.value);
  };

  const handleOneChange = () => {
    setIsChecked(!isChecked);
  };

  const handleTwoChange = () => {
    setIsChecked(!isChecked);
  };

  const handleThreeChange = () => {
    setIsChecked(!isChecked);
  };

  const handleFourChange = () => {
    setIsChecked(!isChecked);
  };

  const handleFiveChange = () => {
    setIsChecked(!isChecked);
  };

  const handlePulseChange = (e) => {
    setPulse(e.target.value);
  };

  const handleBpChange = (e) => {
    setBp(e.target.value);
  };

  const handleRrChange = (e) => {
    setRr(e.target.value);
  };

  const handleTempChange = (e) => {
    setTemp(e.target.value);
  };

  const handlePallorChange = (e) => {
    setPallor(e.target.value);
  };

  const handleJaundiceChange = (e) => {
    setJaundice(e.target.value);
  };

  const handleCyanosisChange = (e) => {
    setCyanosis(e.target.value);
  };

  const handleOedemaChange = (e) => {
    setOedema(e.target.value);
  };

  const handleClubbingChange = (e) => {
    setClubbing(e.target.value);
  };

  const handleLymphChange = (e) => {
    setLymph(e.target.value);
  };

  const handleNutritionChange = (e) => {
    setNutrition(e.target.value);
  };

  const handleBuiltChange = (e) => {
    setBuilt(e.target.value);
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleBsaChange = (e) => {
    setBSA(e.target.value);
  };

  const handleHabitsChange = (e) => {
    setHabits(e.target.value);
  };

  const handleFamhistChange = (e) => {
    setFamhist(e.target.value);
  };

  const handleAllergyChange = (e) => {
    setAllergy(e.target.value);
  };

  return (
    <div>
      <Text
        h1
        size={30}
        css={{
          textGradient: "45deg, $blue600 -20%, $pink600 50%"
        }}
        weight="bold"
      >
        General Physical Examination
      </Text>
      <br />

      <Grid.Container gap={2}>
        <Grid>
          <Input
            label="Performance"
            type="number"
            clearable
            value={performance}
            required
            onChange={(e) => {
              handlePerformanceChange(e);
            }}
          />
        </Grid>

        <Grid>
          <label>ECOG:</label>
          1:
          <input
            type="checkbox"
            id="one"
            name="first"
            value="one"
            checked={isChecked}
            onChange={(e) => {
              handleOneChange(e);
            }}
          />
          2:
          <input
            type="checkbox"
            id="two"
            name="second"
            value="two"
            checked={isChecked}
            onChange={(e) => {
              handleTwoChange(e);
            }}
          />
          3:
          <input
            type="checkbox"
            id="three"
            name="third"
            value="three"
            checked={isChecked}
            onChange={(e) => {
              handleThreeChange(e);
            }}
          />
          4:
          <input
            type="checkbox"
            id="four"
            name="fourth"
            value="four"
            checked={isChecked}
            onChange={(e) => {
              handleFourChange(e);
            }}
          />
          5:
          <input
            type="checkbox"
            id="five"
            name="fifth"
            value="five"
            checked={isChecked}
            onChange={(e) => {
              handleFiveChange(e);
            }}
          />
        </Grid>

        <Grid>
          <Input
            label="Pulse"
            type="number"
            clearable
            value={pulse}
            required
            onChange={(e) => {
              handlePulseChange(e);
            }}
          />
        </Grid>

        <Grid>
          <Input
            label="BP"
            type="number"
            clearable
            value={bp}
            required
            onChange={(e) => {
              handleBpChange(e);
            }}
          />
        </Grid>

        <Grid>
          <Input
            label="RR"
            type="number"
            clearable
            value={rr}
            required
            onChange={(e) => {
              handleRrChange(e);
            }}
          />
        </Grid>

        <Grid>
          <Input
            label="Temp"
            type="number"
            clearable
            value={temp}
            required
            onChange={(e) => {
              handleTempChange(e);
            }}
          />
        </Grid>

        <Grid>
          <Input
            label="Pallor"
            clearable
            value={pallor}
            required
            onChange={(e) => {
              handlePallorChange(e);
            }}
          />
        </Grid>

        <Grid>
          <Input
            label="Jaundice"
            clearable
            value={jaundice}
            onChange={(e) => {
              handleJaundiceChange(e);
            }}
          />
        </Grid>

        <Grid>
          <Input
            label="Cyanosis"
            clearable
            value={cyanosis}
            required
            onChange={(e) => {
              handleCyanosisChange(e);
            }}
          />
        </Grid>

        <Grid>
          <Input
            label="Oedema"
            clearable
            value={oedema}
            required
            onChange={(e) => {
              handleOedemaChange(e);
            }}
          />
        </Grid>

        <Grid>
          <Input
            label="Clubbing"
            clearable
            value={clubbing}
            required
            onChange={(e) => {
              handleClubbingChange(e);
            }}
          />
        </Grid>

        <Grid>
          <Input
            label="Lymph Nodes"
            clearable
            value={lymph}
            required
            onChange={(e) => {
              handleLymphChange(e);
            }}
          />
        </Grid>

        <Grid>
          <Input
            label="Nutrition Status"
            clearable
            value={nutrition}
            required
            onChange={(e) => {
              handleNutritionChange(e);
            }}
          />
        </Grid>

        <Grid>
          <Input
            label="Built"
            clearable
            value={built}
            required
            onChange={(e) => {
              handleBuiltChange(e);
            }}
          />
        </Grid>

        <Grid>
          <Input
            label="Height"
            type="number"
            clearable
            value={height}
            required
            onChange={(e) => {
              handleHeightChange(e);
            }}
          />
        </Grid>

        <Grid>
          <Input
            label="Weight"
            type="number"
            clearable
            value={weight}
            required
            onChange={(e) => {
              handleWeightChange(e);
            }}
          />
        </Grid>

        <Grid>
          <Input
            label="BSA"
            clearable
            value={bsa}
            required
            onChange={(e) => {
              handleBsaChange(e);
            }}
          />
        </Grid>

        <Grid>
          <Textarea
            label="Unhealthy Habits"
            rows={5}
            cols={95}
            value={habits}
            onChange={(e) => {
              handleHabitsChange(e);
            }}
          />
        </Grid>

        <Grid>
          <Textarea
            label="Family History Of Malignancy"
            rows={5}
            cols={95}
            value={famHist}
            onChange={(e) => {
              handleFamhistChange(e);
            }}
          />
        </Grid>

        <Grid>
          <Textarea
            label="Allergy"
            rows={5}
            cols={95}
            value={allergy}
            onChange={(e) => {
              handleAllergyChange(e);
            }}
          />
        </Grid>

      </Grid.Container>
    </div>
  );
}
export default General;
