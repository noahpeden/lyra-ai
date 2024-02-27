'use client';
import { Button, Input } from '@material-tailwind/react';
import { useState } from 'react';
import { useStoryContext } from '../contexts/StoryContext';

export default function Dashboard() {
  const [storyTitle, setStoryTitle] = useState('New Story');

  const createNewStory = async () => {
    const { data, error } = await supabase
      .from('stories')
      .insert([{ userid: user.id, title: storyTitle, createdat: new Date() }]);

    if (error) {
      console.error('Error creating new story:', error);
    } else {
      const newStoryId = data[0].storyid;
      setCurrentStoryId(newStoryId);
      window.pathname.href = '/write-story';
    }
  };
  return (
    <div>
      <h1>Dashboard</h1>
      Would you like to continue a story or start a new one?
      <Button size="lg" color="blue" ripple={true}>
        Continue a Story
      </Button>
      <Input
        type="text"
        placeholder="Name of your story"
        value={storyTitle}
        onChange={(e) => setStoryTitle(e.target.value)}
      />
      <Button size="lg" color="blue" ripple={true} onClick={createNewStory}>
        Start a New Story
      </Button>
    </div>
  );
}
