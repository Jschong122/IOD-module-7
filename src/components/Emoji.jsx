import React, { createContext, useState, useContext } from "react";

// Create the context
const EmojiContext = createContext();

// Create a provider component
export const EmojiProvider = ({ children }) => {
  const happyEmojis = "😊😁😄😆";
  const sadEmojis = "😢😒😞";
  const [feeling, setFeeling] = useState(happyEmojis);

  const toggleMood = () => {
    setFeeling((prevFeeling) =>
      prevFeeling === happyEmojis ? sadEmojis : happyEmojis
    );
  };

  return (
    <EmojiContext.Provider value={{ feeling, toggleMood }}>
      {children}
    </EmojiContext.Provider>
  );
};

// Custom hook to use the Emoji context
export const useEmoji = () => useContext(EmojiContext);
