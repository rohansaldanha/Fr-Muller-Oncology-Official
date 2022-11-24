import { React, useState } from "react";
import { Input, Spacer } from "@nextui-org/react";
import { Textarea, Grid } from "@nextui-org/react";

function Basic() {
  var spacer_x_value = 5.5;

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [sex, setSex] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState(0);
  const [ipno, setIpno] = useState(0);
  const [complaint, setComplaint] = useState("");
  const [past, setPast] = useState("");
  const [habits, setHabits] = useState("");
  const [famHist, setFamhist] = useState("");
  const [allergy, setAllergy] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleSexChange = (e) => {
    setSex(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleContactChange = (e) => {
    setContact(e.target.value);
  };

  const handleIpnoChange = (e) => {
    setIpno(e.target.value);
  };

  const handleComplaintChange = (e) => {
    setComplaint(e.target.value);
  };

  const handlePastChange = (e) => {
    setPast(e.target.value);
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
      <Grid.Container gap={2}>
        <Grid>
          <Input
            clearable
            label="Name"
            value={name}
            required
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </Grid>
        <Spacer x={spacer_x_value} />

        <Grid>
          <Input
            type="number"
            clearable
            label="Age"
            value={age}
            required
            onChange={(e) => {
              handleAgeChange(e);
            }}
          />
        </Grid>
        <Spacer x={spacer_x_value} />

        <Grid>
          <Input
            clearable
            label="Sex"
            value={sex}
            required
            onChange={(e) => {
              handleSexChange(e);
            }}
          />
        </Grid>

        <Grid>
          <Textarea
            label="Address"
            rows={5}
            cols={95}
            value={address}
            onChange={(e) => {
              handleAddressChange(e);
            }}
          />
        </Grid>
        <br />

        <Grid>
          <Input
            type="number"
            clearable
            label="Contact"
            value={contact}
            required
            onChange={(e) => {
              handleContactChange(e);
            }}
          />
        </Grid>
        <Spacer x={spacer_x_value} />

        <Grid>
          <Input
            type="number"
            clearable
            label="IP/OP No"
            value={ipno}
            required
            onChange={(e) => {
              handleIpnoChange(e);
            }}
          />
        </Grid>
        <br />

        <Grid>
          <Textarea
            label="Presenting Complaints"
            rows={5}
            cols={95}
            value={complaint}
            onChange={(e) => {
              handleComplaintChange(e);
            }}
          />
        </Grid>

        <Grid>
          <Textarea
            label="Past History/Comorbidities"
            rows={5}
            cols={95}
            value={past}
            onChange={(e) => {
              handlePastChange(e);
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

export default Basic;
