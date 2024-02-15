'use client';

import React, { useState, useEffect } from 'react';
import { useStoryContext } from '../contexts/StoryContext';
import { useChatCompletion } from '../hooks/useOpenAiStream/chat-hook';
import { Button } from '@material-tailwind/react';

export default function ReadStory() {
  const { characterDetails, plotDetails } = useStoryContext();
  const [loading, setLoading] = useState(false);

  const userPrompt = `
Create a children's story based on the following details:
Main Character: ${characterDetails.name}, a ${
    characterDetails.age
  }-year-old who loves the color ${
    characterDetails.favoriteColor
  }, playing with their favorite toy ${characterDetails.favoriteToy}, and ${
    characterDetails.favoriteActivity
  }. They have a fondness for ${
    characterDetails.favoriteAnimals
  } and spend time with ${characterDetails.siblings}.
Story Plot: The story should ${
    plotDetails.rhyme ? 'rhyme and ' : ''
  }be told in ${
    plotDetails.simpleLanguage
      ? 'simple language'
      : 'a language rich with new vocabulary and concepts'
  }. The story should ${
    plotDetails.interactiveQuestions ? 'include interactive questions and ' : ''
  }teach a lesson about ${
    plotDetails.lessonOrMoral
  }. Include characters such as ${plotDetails.characterNames}.
`;

  const prompt = [
    {
      content: userPrompt,
      role: 'user',
    },
  ];

  const { messages, submitPrompt } = useChatCompletion({
    model: 'gpt-3.5-turbo',
    apiKey: process.env.NEXT_PUBLIC_OPEN_API_KEY,
    temperature: 0.9,
  });

  const handleGenerateStory = () => {
    setLoading(true);
    submitPrompt(prompt);
    setLoading(false);
  };

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, [messages]);
  console.log('messages', messages);

  return (
    <div className="container mx-auto my-6">
      <h1 className="text-2xl font-bold">Read Story</h1>
      <Button
        size="lg"
        ripple={true}
        className="btn btn-primary mt-4"
        onClick={handleGenerateStory}
        disabled={loading}
      >
        Generate Story
      </Button>
      {loading ? (
        <div className="flex justify-center items-center">
          <div className="loader">Loading...</div>
        </div>
      ) : (
        <div>
          <h2 className="text-xl mt-4">Your Story</h2>
          {messages.length < 1 ? (
            <div>No story generated yet</div>
          ) : (
            messages.map((msg, i) => (
              <div key={i}>
                {msg.role === 'assistant' && (
                  <div className="story-content">{msg.content}</div>
                )}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
