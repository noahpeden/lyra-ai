import { createContext, useState, useContext } from 'react';

const StoryContext = createContext();

export const useStoryContext = () => useContext(StoryContext);

export const StoryProvider = ({ children }) => {
  const [characterDetails, setCharacterDetails] = useState({
    name: '',
    age: '',
    color: '',
    toy: '',
    animals: '',
    activity: '',
    siblings: '',
    personality: '',
  });
  const [plotDetails, setPlotDetails] = useState({
    rhyme: false,
    language: {
      simple: true,
      educational: false,
      newVocab: false,
      newConcepts: false,
    },
    interactiveQuestions: false,
    isMoral: '',
    additionalCharacters: '',
  });

  return (
    <StoryContext.Provider
      value={{
        characterDetails,
        setCharacterDetails,
        plotDetails,
        setPlotDetails,
      }}
    >
      {children}
    </StoryContext.Provider>
  );
};
