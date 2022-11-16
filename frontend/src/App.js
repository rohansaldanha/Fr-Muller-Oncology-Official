import React from "react";
import Search from "./components/mainPage/navbar/Search";
import Main from "./components/mainPage/main";
import { Card } from "@nextui-org/react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Search />
      <Card
        css={{ width: "80%", backgroundColor: "#D6CDC1", marginLeft: "10%" }}
      >
        <Card.Body>
          <Main />
        </Card.Body>
      </Card>
    </div>
  );
}
