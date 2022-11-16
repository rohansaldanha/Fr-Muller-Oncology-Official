import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";

import "./page1.css";

export default function Basic() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [ipno, setIpno] = useState("");
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
      <Input
        clearable
        label="Name"
        value={name}
        required
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <br />

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
      <br />

      <Input
        clearable
        label="Sex"
        value={sex}
        required
        onChange={(e) => {
          handleSexChange(e);
        }}
      />
      <br />

      <Textarea
        label="Address"
        rows={5}
        cols={80}
        value={address}
        onChange={(e) => {
          handleAddressChange(e);
        }}
      />
      <br />

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
      <br />

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
      <br />

      <Textarea
        label="Presenting Complaints"
        rows={5}
        cols={80}
        value={complaint}
        onChange={(e) => {
          handleComplaintChange(e);
        }}
      />
      <br />

      <Textarea
        label="Past History/Comorbidities"
        rows={5}
        cols={80}
        value={past}
        onChange={(e) => {
          handlePastChange(e);
        }}
      />
      <br />

      <Textarea
        label="Unhealthy Habits"
        rows={5}
        cols={80}
        value={habits}
        onChange={(e) => {
          handleHabitsChange(e);
        }}
      />
      <br />

      <Textarea
        label="Family History Of Malignancy"
        rows={5}
        cols={80}
        value={famHist}
        onChange={(e) => {
          handleFamhistChange(e);
        }}
      />
      <br />

      <Textarea
        label="Allergy"
        rows={5}
        cols={80}
        value={allergy}
        onChange={(e) => {
          handleAllergyChange(e);
        }}
      />
      <br />
    </div>
  );
}
