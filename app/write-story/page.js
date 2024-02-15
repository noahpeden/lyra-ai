'use client';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
  Textarea,
} from '@material-tailwind/react';
import CharacterDetails from '../components/CharacterDetails';
import Plot from '../components/Plot';
import { StoryProvider } from '../contexts/StoryContext';

export default function WriteStory() {
  return (
    <div className="h-full p-1/10 mt-10 flex space-x-4">
      <StoryProvider>
        <CharacterDetails />
        <Plot />
        <Button size="lg" color="blue" ripple="light">
          Write Your Story!
        </Button>
      </StoryProvider>
    </div>
  );
}
