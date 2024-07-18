import React, { Children, createContext, useState } from "react";

const EmojiContext = createContext(null);

export const EmojiProvider = ({ Children }) => {
  const [feeling, setFeeling] = useState(happy);
  const happy = "😊😁😄😆";
  const sad = "😢😒😞";

  const toggleMood = () => {
    setFeeling((mood) => (mood === happy ? sad : happy));
  };

  return (
    <>
      <EmojiContext.Provider value={{ feeling, toggleMood }} />
    </>
  );
};

export default EmojiContext;
