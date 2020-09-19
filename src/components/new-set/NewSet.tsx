import { TextField } from '@material-ui/core';
import React, { ChangeEvent, useState } from 'react';
import { createGuid } from '../../store';
import { Word, WordsSingleSet } from '../../store/sets/wordsSetsReducer';
import AddWordPair from './add-word-pair/AddWordPair';
import EditWordPair from './edit-word-pair/EditWordPair';

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

  const saveWordPairChanges = (changedValues: Word) => {
    setState((prevState) => {
      const updatedWords = prevState.words.map((word) => {
        if (word.guid === changedValues.guid) {
          return changedValues;
        }
        return word;
      });
      return {
        ...prevState,
        words: updatedWords,
      };
    });
  };

  const listOfWordPairs = state.words.map((word) => (
    <EditWordPair
      key={word.guid}
      languages={languages}
      valuesSeed={word}
      saveChanges={saveWordPairChanges}
    />
  ));

  return (
    <div className="NewSet">
      <h2>{title}</h2>
      <TextField
        value={title}
        label="Set Title"
        required
        name="title"
        onChange={handleChange}
      />
      <h3>{description}</h3>
      <TextField
        value={description}
        label="Set Description"
        name="description"
        onChange={handleChange}
      />
      <h3>Words Set</h3>
      {listOfWordPairs}
      <AddWordPair handleSubmit={handleAddWordPair} languages={languages} />
    </div>
  );
};

export default NewSet;
