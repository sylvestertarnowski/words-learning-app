import { TextField } from '@material-ui/core';
import React, { ChangeEvent, useState } from 'react';
import { createGuid } from '../../store';
import { WordsSingleSet } from '../../store/sets/wordsSetsReducer';
import AddWordPairInput from './add-word-pair-input/AddWordPairInput';

const NewSet = () => {
  const [state, setState] = useState<WordsSingleSet>({
    languages: {
      primary: 'polish',
      secondary: 'english',
    },
    title: '',
    description: '',
    guid: '',
    words: [],
  });

  const handleChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddWordPair = (values: {
    primaryValue: string;
    secondaryValue: string;
  }) => {
    const { primaryValue, secondaryValue } = values;
    setState((prevState) => ({
      ...prevState,
      words: [
        ...prevState.words,
        {
          guid: createGuid(),
          [state.languages.primary]: primaryValue,
          [state.languages.secondary]: secondaryValue,
        },
      ],
    }));
  };

  const { title, description, languages } = state;

  return (
    <div className="NewSet">
      <TextField
        value={title}
        label="Set Title"
        required
        name="title"
        onChange={handleChange}
      />
      <TextField
        value={description}
        label="Set Description"
        required
        name="description"
        onChange={handleChange}
      />
      <AddWordPairInput
        handleSubmit={handleAddWordPair}
        languages={languages}
      />
    </div>
  );
};

export default NewSet;
