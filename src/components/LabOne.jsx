import { useEffect } from "react";
import { BitcoinRates } from "../components/BitcoinRate";

export const LabOne = () => {
  //useEffect example ................................

  useEffect(() => {}, []);

  return (
    <div>
      <p>Lab One</p>
      <BitcoinRates />
    </div>
  );
};
