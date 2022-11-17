import React, { useState } from "react";
import { Text } from "@nextui-org/react";
import { Input } from "@nextui-org/react";

function GenExam() {
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

  const handlePerformanceChange = (e) => {
    setPerformance(e.target.value);
  };

  const handleOnChange = () => {
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

  return (
    <div className="page1">
      <form>
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
        <br />
        {/* <label>ECOG:</label>
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
            handlefiveChange(e);
          }}
        />
        <br /> */}
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
        <br />
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
        <br />
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
        <br />
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
        <br />
        <Input
          label="Pallor"
          clearable
          value={pallor}
          required
          onChange={(e) => {
            handlePallorChange(e);
          }}
        />
        <br />
        <Input
          label="Jaundice"
          clearable
          value={jaundice}
          onChange={(e) => {
            handleJaundiceChange(e);
          }}
        />
        <br />
        <Input
          label="Cyanosis"
          clearable
          value={cyanosis}
          required
          onChange={(e) => {
            handleCyanosisChange(e);
          }}
        />
        <br />
        <Input
          label="Oedema"
          clearable
          value={oedema}
          required
          onChange={(e) => {
            handleOedemaChange(e);
          }}
        />
        <br />
        <Input
          label="Clubbing"
          clearable
          value={clubbing}
          required
          onChange={(e) => {
            handleClubbingChange(e);
          }}
        />
        <br />
        <Input
          label="Lymph Nodes"
          clearable
          value={lymph}
          required
          onChange={(e) => {
            handleLymphChange(e);
          }}
        />
        <br />
        <Input
          label="Nutrition Status"
          clearable
          value={nutrition}
          required
          onChange={(e) => {
            handleNutritionChange(e);
          }}
        />
        <br />
        <Input
          label="Built"
          clearable
          value={built}
          required
          onChange={(e) => {
            handleBuiltChange(e);
          }}
        />
        <br />
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
        <br />
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
        <br />
        <Input
          label="BSA"
          clearable
          value={bsa}
          required
          onChange={(e) => {
            handleBsaChange(e);
          }}
        />
      </form>
    </div>
  );
}
export default GenExam;
