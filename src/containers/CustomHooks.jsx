import SubscribeForm from "../components/SubscribeForm";
import React from "react";

export const CustomHooks = () => {
  return (
    <div>
      <h4>Custom Hooks Example </h4>

      <ExampleDecorator>
        <h5>Subscribe Form</h5>
        <SubscribeForm />
      </ExampleDecorator>
    </div>
  );
};

const ExampleDecorator = ({ children }) => {
  return (
    <div
      className="exampleDecorator"
      style={{
        border: "solid lightblue 1px",
        width: "auto",
        height: "auto",
        padding: "10px",
        margin: "10px",
      }}
    >
      {children}
    </div>
  );
};
