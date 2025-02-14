import "./App.css";
import { useState } from "react";

import { LabOne } from "./containers/LabOne";
import { LabTwo } from "./containers/LabTwo";

import LabThree from "./containers/LabThree";
import { LabFour } from "./containers/LabFour";

// COMPONENT FUNCTION NAME -> INITIALISE
const App = () => {
  const [contentName, setContentName] = useState("");

  const contentConfig = [
    { lab: "Lab 1" },
    { lab: "Lab 2" },
    { lab: "Lab 3" },
    { lab: "Lab 4" },
  ];

  const displayHandler = () => {
    switch (contentName) {
      case contentConfig[0].lab:
        return (
          <>
            <LabOne />
          </>
        );
      case contentConfig[1].lab:
        return (
          <>
            <LabTwo />
          </>
        );
      case contentConfig[2].lab:
        return (
          <>
            <LabThree />
          </>
        );
      case contentConfig[3].lab:
        return (
          <>
            <LabFour />
          </>
        );
      default:
        return (
          <div
            style={{ display: "flex", width: "100%", justifyContent: "center" }}
          >
            Click on a Lab button to see the content
          </div>
        );
    }
  };
  const buttonConstructor = () => {
    const buttonElementArray = contentConfig.map((content) => {
      return (
        <button
          key={content.lab}
          onClick={() => setContentName(content.lab)}
          style={{ margin: "5px" }}
        >
          {content.lab}
        </button>
      );
    });

    return buttonElementArray;
  };

  //RETURN
  return (
    <div>
      <p>Module Seven Starts Here</p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginBottom: "5px",
        }}
      >
        {buttonConstructor()}
      </div>

      <div
        style={{
          display: "flex",
          margin: "0 auto",
          width: "90%",
          height: "80vh",
          border: "lightgrey 1px solid",
          borderRadius: "5px",
          overflow: "auto",
        }}
      >
        {displayHandler()}
      </div>
    </div>
  );
};

export default App;
