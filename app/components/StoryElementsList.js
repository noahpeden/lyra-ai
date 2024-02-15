'use client';
import {
  List,
  ListItem,
  ListItemPrefix,
  Checkbox,
  Typography,
} from '@material-tailwind/react';

export default function StoryElements({ plot, handleCheckboxChange }) {
  return (
    <List>
      <ListItem className="p-0">
        <label
          htmlFor="simpleLanguage"
          className="flex w-full cursor-pointer items-center px-3 py-2"
        >
          <ListItemPrefix className="mr-3">
            <Checkbox
              name="simpleLanguage"
              onChange={handleCheckboxChange}
              checked={plot.simpleLanguage}
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
          htmlFor="simpleLanguage"
          className="flex w-full cursor-pointer items-center px-3 py-2"
        >
          <ListItemPrefix className="mr-3">
            <Checkbox
              name="simpleLanguage"
              onChange={handleCheckboxChange}
              checked={plot.educationalElements}
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
          htmlFor="simpleLanguage"
          className="flex w-full cursor-pointer items-center px-3 py-2"
        >
          <ListItemPrefix className="mr-3">
            <Checkbox
              name="simpleLanguage"
              onChange={handleCheckboxChange}
              checked={plot.newVocabulary}
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
          htmlFor="simpleLanguage"
          className="flex w-full cursor-pointer items-center px-3 py-2"
        >
          <ListItemPrefix className="mr-3">
            <Checkbox
              name="simpleLanguage"
              onChange={handleCheckboxChange}
              checked={plot.newConcepts}
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
  );
}
