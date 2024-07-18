import React from "react";
import { EmojiProvider, useEmoji } from "../components/Emoji";
import { BitcoinRates } from "../components/BitcoinRate";

// Component to display the emojis and the toggle button
export const EmojiDisplay = () => {
  const { feeling, toggleMood } = useEmoji();

  return (
    <div>
      <p>Current Emojis: {feeling}</p>
      <button onClick={toggleMood}>Toggle Emoji</button>
    </div>
  );
};

// Main component that uses the EmojiProvider
const LabThree = () => {
  return (
    <div>
      <EmojiProvider>
        <EmojiDisplay />
        <br />
        <BitcoinRates />
      </EmojiProvider>
    </div>
  );
};

export default LabThree;
