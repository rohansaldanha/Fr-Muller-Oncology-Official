import React from "react";
import { Navbar, Text, Input } from "@nextui-org/react";
import { SearchIcon } from "./SearchIcon";
import { Button, Image } from "@nextui-org/react";

export default function App() {

  return (
    <Navbar isBordered variant="sticky" >

    <Navbar.Content hideIn="xs" variant="highlight" >
      <Input
        clearable
        contentLeft={
        <SearchIcon fill="var(--nextui-colors-accents6)" size={16} />}
        contentLeftStyling={false}
        css={{
            w: "100%",
            "@xsMax": {
            mw: "300px"
            },
            "& .nextui-input-content--left": {
            h: "100%",
            ml: "$4",
            dflex: "center"
            }
            }}
            placeholder="Search..."/>
      </Navbar.Content>

      <Navbar.Brand css={{ mr: "$4" }}> 
          <Image
      width={50}
      height={50}  
      src="https://www.campusmedicine.com/images/clients/Father-Muller.jpg"
      alt="Default Image"/>
      <Text b color="inherit" css={{ ml: "$10", mr: "$9" }} hideIn="xs">
        FATHER MULLER MEDICAL COLLEGE HOSPITAL
        <br />
        DEPARTMENT OF ONCOLOGY
      </Text>

      <Image
      width={50}
      height={50}  
      src="http://www.gei.co.in/graphics/nabh_logo.png"
      alt="Default Image"/>
      </Navbar.Brand>
      
        <Navbar.Content hideIn="xs" variant="highlight">
        <Navbar.Item css={{ mr: "$4" }}>
        <Button color="primary" auto ghost>
          Update
        </Button>
        </Navbar.Item>

        <Navbar.Item css={{ mr: "$4" }}>
        <Button color="error" auto ghost>
          Delete
        </Button>
        </Navbar.Item>
      </Navbar.Content>     
      
    </Navbar> 
  );
}
