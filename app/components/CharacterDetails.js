'use client';

import React, { useContext, useState, useEffect } from 'react';
import {
  Card,
  CardBody,
  Input,
  Typography,
  Textarea,
} from '@material-tailwind/react';
import { StoryContext, useStoryContext } from '../contexts/StoryContext';
import debounce from 'lodash.debounce';

export default function CharacterDetails() {
  const { setCharacterDetails, characterDetails } = useStoryContext();
  const [details, setDetails] = useState({
    name: characterDetails.name || '',
    age: characterDetails.age || '',
    favoriteColor: characterDetails.favoriteColor || '',
    favoriteToy: characterDetails.favoriteToy || '',
    favoriteAnimals: characterDetails.favoriteAnimals || '',
    favoriteActivity: characterDetails.favoriteActivity || '',
    siblings: characterDetails.siblings || '',
    traits: characterDetails.traits || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const debouncedSave = debounce(() => {
    setCharacterDetails(details);
    // abnormally slow debounce because kids are silly
  }, 500);

  useEffect(() => {
    debouncedSave();

    return () => debouncedSave.cancel();
  }, [details, debouncedSave]);

  return (
    <Card className="w-1/4">
      <CardBody className="flex flex-col gap-4">
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Main character details
        </Typography>
        <Input
          type="text"
          name="name"
          label="Name"
          onChange={handleChange}
          value={details.name}
        />
        <Input
          type="text"
          name="age"
          label="Age"
          onChange={handleChange}
          value={details.age}
        />
        <Input
          type="text"
          name="favoriteColor"
          label="Favorite color"
          onChange={handleChange}
          value={details.favoriteColor}
        />
        <Input
          type="text"
          name="favoriteToy"
          label="Favorite toy"
          onChange={handleChange}
          value={details.favoriteToy}
        />
        <Input
          type="text"
          name="favoriteAnimals"
          label="Favorite animals"
          onChange={handleChange}
          value={details.favoriteAnimals}
        />
        <Input
          type="text"
          name="favoriteActivity"
          label="Favorite activity"
          onChange={handleChange}
          value={details.favoriteActivity}
        />
        <Textarea
          name="siblings"
          label="Siblings"
          onChange={handleChange}
          value={details.siblings}
        />
        <div>
          <Typography variant="paragraph" color="blue-gray" className="mb-2">
            What are some qualities or traits you&apos;d like the story to
            reinforce or teach? (Such as bravery, kindness, curiosity, etc.)
          </Typography>
          <Textarea
            name="traits"
            label="Traits"
            onChange={handleChange}
            value={details.traits}
          />
        </div>
      </CardBody>
    </Card>
  );
}
