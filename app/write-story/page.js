'use client';
import { Button } from '@material-tailwind/react';
import CharacterDetails from '../components/CharacterDetails';
import Plot from '../components/Plot';
import { StoryProvider } from '../contexts/StoryContext';
import Link from 'next/link';

export default function WriteStory() {
  return (
    <div className="h-full p-1/10 mt-10 flex space-x-4">
      <CharacterDetails />
      <Plot />
      <Link href="/read-story">
        <Button size="lg" color="blue" ripple={true}>
          Write Your Story!
        </Button>
      </Link>
    </div>
  );
}
