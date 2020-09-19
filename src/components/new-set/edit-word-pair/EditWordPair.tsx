import React, { useEffect, useState } from 'react';
import { Button, IconButton, TextField } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from '@material-ui/icons/Done';
import { Word, WordsSingleSet } from '../../../store/sets/wordsSetsReducer';

type P = {
  valuesSeed: Word;
  languages: WordsSingleSet['languages'];
  saveChanges: (changedValues: Word) => void;
};

const EditWordPair: React.FC<P> = ({ valuesSeed, languages, saveChanges }) => {
  const [state, setState] = useState({
    [languages.primary]: valuesSeed[languages.primary],
    [languages.secondary]: valuesSeed[languages.secondary],
    editMode: false,
  });

  const toggleEditMode = () =>
    setState((prevState) => ({
      ...prevState,
      editMode: !prevState.editMode,
    }));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSaveChanges = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    saveChanges({
      [languages.primary]: state?.[languages?.primary],
      [languages.secondary]: state?.[languages?.secondary],
      guid: valuesSeed.guid,
    });
  };

  /** Synchronize local state with parent component. */
  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      [languages.primary]: valuesSeed[languages.primary],
      [languages.secondary]: valuesSeed[languages.secondary],
    }));
  }, [valuesSeed, languages]);

  const saveButton = state.editMode && (
    <Button onClick={handleSaveChanges}>
      Save <DoneIcon />
    </Button>
  );

  return (
    <div className="EditWordPair">
      <TextField
        value={state?.[languages?.primary] ?? ''}
        name={languages?.primary ?? 'polish'}
        onChange={handleChange}
        required
        aria-readonly={!state.editMode}
        disabled={!state.editMode}
      />
      <TextField
        value={state?.[languages?.secondary] ?? ''}
        name={languages?.secondary ?? 'polish'}
        onChange={handleChange}
        required
        aria-readonly={!state.editMode}
        disabled={!state.editMode}
      />
      <IconButton onClick={toggleEditMode}>
        <EditIcon />
      </IconButton>
      {saveButton}
    </div>
  );
};

export default EditWordPair;
