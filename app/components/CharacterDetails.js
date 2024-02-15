'use client';

import {
  Card,
  CardBody,
  CardFooter,
  Button,
  Input,
  Typography,
  Textarea,
} from '@material-tailwind/react';

export default function CharacterDetails() {
  return (
    <Card className="w-1/4">
      <CardBody className="flex flex-col gap-4">
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Main character details
        </Typography>
        <Input type="text" label="Name" />
        <Input type="text" label="Age" />
        <Input type="text" label="Favorite color" />
        <Input type="text" label="Favorite toy" />
        <Input type="text" label="Favorite animals" />
        <Input type="text" label="Favorite activity" />
        <Textarea label="Siblings" />
        <Textarea
          label="Personality"
          placeholder="What are some qualities or traits you'd like the story to reinforce or teach? (Such as bravery, kindness, curiosity, etc.)"
        />
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
