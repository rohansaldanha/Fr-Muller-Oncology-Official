import React from "react";
import Search from "./components/navbar/Search";
import Main from "./components/main";
import { Card } from "@nextui-org/react";
// import "./styles.css";

export default function App() {

  return (
    <div>
      <Search />
      <Card
        css={{ width: "70%", marginLeft: "15%", marginTop: "1%", backgroundColor: "#B8E8FC" }}
      >
        <Card.Body>
          <Main />
        </Card.Body>
      </Card>
    </div>
  );
}
