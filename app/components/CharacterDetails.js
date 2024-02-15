'use client';

import {
  Card,
  CardBody,
  Input,
  Typography,
  Textarea,
} from '@material-tailwind/react';
import { useContext } from 'react';
import { StoryContext } from '../contexts/StoryContext';

export default function CharacterDetails() {
  const { setCharacterDetails } = useContext(StoryContext);

  return (
    <Card className="w-1/4">
      <CardBody className="flex flex-col gap-4">
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Main character details
        </Typography>
        <form onSubmit={}>
          <Input type="text" label="Name" />
          <Input type="text" label="Age" />
          <Input type="text" label="Favorite color" />
          <Input type="text" label="Favorite toy" />
          <Input type="text" label="Favorite animals" />
          <Input type="text" label="Favorite activity" />
          <Textarea label="Siblings" />
          <div>
            <Typography variant="p" color="blue-gray" className="mb-2">
              What are some qualities or traits you&apos;d like the story to
              reinforce or teach? (Such as bravery, kindness, curiosity, etc.)
            </Typography>
            <Textarea label="Traits" />
          </div>
        </form>
      </CardBody>
      {/* <CardFooter className="pt-0">
        <Button variant="gradient" fullWidth>
          Save
        </Button>
        <Typography variant="small" className="mt-6 flex justify-center">
          You can come back and edit this anytime
        </Typography>
      </CardFooter> */}
    </Card>
  );
}
