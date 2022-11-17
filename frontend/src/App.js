import React from "react";
import Search from "./components/navbar/Search";
import Main from "./components/main";
import { Card } from "@nextui-org/react";
// import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Search />
      <Card
        css={{ width: "70%", backgroundColor: "#D6CDC1", marginLeft: "15%" }}
      >
        <Card.Body>
          <Main />
        </Card.Body>
      </Card>
    </div>
  );
}
