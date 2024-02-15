import { createContext, useState, useContext } from 'react';

const StoryContext = createContext();

export const useStoryContext = () => useContext(StoryContext);

export const StoryProvider = ({ children }) => {
  const [characterDetails, setCharacterDetails] = useState({
    name: 'Lyra',
    age: '4',
    favoriteColor: 'purple',
    favoriteToy: 'dolls',
    favoriteAnimals: 'tiger',
    favoriteActivity: 'puzzles',
    siblings: 'Isaac age 2',
    traits: 'kind',
  });
  const [plotDetails, setPlotDetails] = useState({
    rhyme: false,
    simpleLanguage: true,
    educationalElements: false,
    newVocabulary: true,
    newConcepts: false,
    interactiveQuestions: false,
    lessonOrMoral: 'Bravey and kindness',
    characterNames: 'Henry, Papa, and Mama',
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
