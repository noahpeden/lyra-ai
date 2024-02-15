'use client';
import {
  Card,
  CardBody,
  Typography,
  Checkbox,
  Textarea,
  List,
  ListItem,
  ListItemPrefix,
  Input,
} from '@material-tailwind/react';

export default function Plot() {
  return (
    <Card className="w-1/2">
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
            Do you prefer the story to have simple language, or include some
            educational elements, like new vocabulary or concepts?
          </Typography>
          <List>
            <ListItem className="p-0">
              <label
                htmlFor="vertical-list-react"
                className="flex w-full cursor-pointer items-center px-3 py-2"
              >
                <ListItemPrefix className="mr-3">
                  <Checkbox
                    id="vertical-list-react"
                    ripple={false}
                    className="hover:before:opacity-0"
                    containerProps={{
                      className: 'p-0',
                    }}
                  />
                </ListItemPrefix>
                <Typography color="blue-gray" className="font-medium">
                  Simple language
                </Typography>
              </label>
            </ListItem>
            <ListItem className="p-0">
              <label
                htmlFor="vertical-list-vue"
                className="flex w-full cursor-pointer items-center px-3 py-2"
              >
                <ListItemPrefix className="mr-3">
                  <Checkbox
                    id="vertical-list-vue"
                    ripple={false}
                    className="hover:before:opacity-0"
                    containerProps={{
                      className: 'p-0',
                    }}
                  />
                </ListItemPrefix>
                <Typography color="blue-gray" className="font-medium">
                  Educational elements
                </Typography>
              </label>
            </ListItem>
            <ListItem className="p-0">
              <label
                htmlFor="vertical-list-svelte"
                className="flex w-full cursor-pointer items-center px-3 py-2"
              >
                <ListItemPrefix className="mr-3">
                  <Checkbox
                    id="vertical-list-svelte"
                    ripple={false}
                    className="hover:before:opacity-0"
                    containerProps={{
                      className: 'p-0',
                    }}
                  />
                </ListItemPrefix>
                <Typography color="blue-gray" className="font-medium">
                  New vocabulary
                </Typography>
              </label>
            </ListItem>
            <ListItem className="p-0">
              <label
                htmlFor="vertical-list-svelte"
                className="flex w-full cursor-pointer items-center px-3 py-2"
              >
                <ListItemPrefix className="mr-3">
                  <Checkbox
                    id="vertical-list-svelte"
                    ripple={false}
                    className="hover:before:opacity-0"
                    containerProps={{
                      className: 'p-0',
                    }}
                  />
                </ListItemPrefix>
                <Typography color="blue-gray" className="font-medium">
                  New concepts
                </Typography>
              </label>
            </ListItem>
          </List>
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
            Is there a specific lesson or moral you&apos;d like the story to
            convey?
          </Typography>
          <Input label="Lesson or moral" />
        </div>
        <div>
          <Typography variant="p" color="blue-gray" className="mb-2">
            Would you like to include any specific characters, such as family
            members, pets, or imaginary friends?
          </Typography>
          <Textarea label="Character names" />
        </div>
      </CardBody>
      {/* <CardFooter className="pt-0">
        <Button variant="gradient" fullWidth>
          Save
        </Button>
      </CardFooter> */}
    </Card>
  );
}
