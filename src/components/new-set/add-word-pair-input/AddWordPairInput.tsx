import { Button, TextField } from '@material-ui/core';
import { WordsSingleSet } from '../../../store/sets/wordsSetsReducer';
import React, { useState } from 'react';

type Props = {
  handleSubmit: (values: {
    primaryValue: string;
    secondaryValue: string;
  }) => void;
  languages: WordsSingleSet['languages'];
};

const initialState = {
  primary: '',
  secondary: '',
};

const AddWordPairInput: React.FC<Props> = ({ handleSubmit, languages }) => {
  const [state, setState] = useState({
    ...initialState,
  });
  const { primary, secondary } = state;

  const internalHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit({
      primaryValue: primary,
      secondaryValue: secondary,
    });
    setState({ ...initialState });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={internalHandleSubmit} className="AddWordPairInput">
      <TextField
        label={languages.primary}
        value={primary}
        onChange={handleChange}
        name="primary"
      />
      <TextField
        label={languages.secondary}
        value={secondary}
        onChange={handleChange}
        name="secondary"
      />
      <Button type="submit">Add</Button>
    </form>
  );
};

export default AddWordPairInput;
