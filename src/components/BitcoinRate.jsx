import React from "react";
import { useState, useEffect } from "react";
import useFetchData from "../data/hooks/useFetchData";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

export function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const [rate, setRate] = useState(0);
  const { data, error } = useFetchData(
    `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
  );

  //   fetch URL: https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}

  // async function getData() {
  //   const url = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`;
  //   try {
  //     const response = await fetch(url);
  //     if (!response.ok) {
  //       throw new Error(`Response status: ${response.status}`);
  //     }

  //     const json = await response.json();
  //     console.log(json);
  //     setRate(json.bitcoin[currency.toLowerCase()]);
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // }
  // getData();

  useEffect(() => {
    if (data) {
      setRate(data.bitcoin[currency.toLowerCase()]);
    }
  }, [data, currency]);
  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));
  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>

      <div className="display-area">
        {error ? (
          <p>Error fetching data: {error.message}</p>
        ) : (
          <p>
            1 Bitcoin = {rate} {currency}
          </p>
        )}
      </div>
    </div>
  );
}
