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

export default function WriteStory() {
  return (
    <div className="h-full p-1/10 mt-10">
      <Card className="w-1/4">
        <CardBody className="flex flex-col gap-4">
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Main character details
          </Typography>
          <Input type="text" label="Name" />
          <Input type="text" label="Age" />
          <Input type="text" label="Favorite color" />
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" fullWidth>
            Save
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            You can come back and edit this anytime
          </Typography>
        </CardFooter>
      </Card>
      <Card className="w-1/4">
        <CardBody className="flex flex-col gap-4">
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Story plot
          </Typography>
          <div>
            <Typography variant="p" color="blue-gray" className="mb-2">
              Would you like this story to rhyme?
            </Typography>
            <Checkbox label="Yes" />
            <Checkbox label="No" />
          </div>
          <div>
            <Typography variant="p" color="blue-gray" className="mb-2">
              Would you like this story to have interactive questions?
            </Typography>
            <Checkbox label="Yes" />
            <Checkbox label="No" />
          </div>
          <div>
            <Typography variant="p" color="blue-gray" className="mb-2">
              Would you like there to be a moral to the story?
            </Typography>
            <Checkbox label="Yes" />
            <Checkbox label="No" />
          </div>

          <Input type="text" label="Age" />
          <Input type="text" label="Favorite color" />
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" fullWidth>
            Save
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            You can come back and edit this anytime
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
}
