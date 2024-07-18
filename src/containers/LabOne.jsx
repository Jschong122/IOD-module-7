import { useEffect, useState, useReducer } from "react";
import { BitcoinRates } from "../components/BitcoinRate";

export const LabOne = () => {
  //useEffect example ................................

  useEffect(() => {}, []);

  return (
    <div>
      <BitcoinRates />
    </div>
  );
};
