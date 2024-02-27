'use client';
import React, { useContext, useState, useEffect } from 'react';
import {
  Card,
  CardBody,
  Typography,
  Checkbox,
  Textarea,
  Input,
} from '@material-tailwind/react';
import { useStoryContext } from '../contexts/StoryContext';
import debounce from 'lodash.debounce';
import StoryElements from './StoryElementsList';

export default function Plot() {
  const { setPlotDetails, plotDetails } = useStoryContext();
  const [plot, setPlot] = useState({
    rhyme: plotDetails?.rhyme || false,
    simpleLanguage: plotDetails?.simpleLanguage || false,
    educationalElements: plotDetails?.educationalElements || false,
    newVocabulary: plotDetails?.newVocabulary || false,
    newConcepts: plotDetails?.newConcepts || false,
    interactiveQuestions: plotDetails?.interactiveQuestions || false,
    lessonOrMoral: plotDetails?.lessonOrMoral || '',
    characterNames: plotDetails?.characterNames || '',
  });

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setPlot((prevPlot) => ({ ...prevPlot, [name]: checked }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPlot((prevPlot) => ({ ...prevPlot, [name]: value }));
  };

  const debouncedSave = debounce(() => {
    setPlotDetails(plot);
  }, 500);

  useEffect(() => {
    debouncedSave();

    return () => debouncedSave.cancel();
  }, [plot, debouncedSave]);
  console.log('plot', plot);
  return (
    <Card className="w-1/2">
      <CardBody className="flex flex-col gap-4">
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Story plot
        </Typography>
        <div>
          <Typography variant="paragraph" color="blue-gray" className="mb-2">
            Would you like this story to rhyme?
          </Typography>
          <Checkbox
            name="rhyme"
            label="Yes"
            onChange={handleCheckboxChange}
            checked={plot.rhyme}
          />
        </div>
        <div>
          <Typography variant="paragraph" color="blue-gray" className="mb-2">
            Do you prefer the story to have simple language, or include some
            educational elements, like new vocabulary or concepts?
          </Typography>
          <StoryElements
            plot={plot}
            handleCheckboxChange={handleCheckboxChange}
          />
        </div>
        <div>
          <Typography variant="paragraph" color="blue-gray" className="mb-2">
            Would you like this story to have interactive questions?
          </Typography>
          <Checkbox
            name="interactiveQuestions"
            label="Yes"
            onChange={handleCheckboxChange}
            checked={plot.interactiveQuestions}
          />
        </div>
        <div>
          <Typography variant="paragraph" color="blue-gray" className="mb-2">
            Is there a specific lesson or moral you would like the story to convey?
          </Typography>
          <Input
            name="lessonOrMoral"
            label="Lesson or moral"
            onChange={handleInputChange}
            value={plot.lessonOrMoral}
          />
        </div>
        <div>
          <Typography variant="paragraph" color="blue-gray" className="mb-2">
            Would you like to include any specific characters, such as family
            members, pets, or imaginary friends?
          </Typography>
          <Textarea
            name="characterNames"
            label="Character names"
            onChange={handleInputChange}
            value={plot.characterNames}
          />
        </div>
      </CardBody>
    </Card>
  );
}
