import { Button, TextField } from '@material-ui/core';
import { WordsSingleSet } from '../../../store/sets/wordsSetsReducer';
import React, { useRef, useState } from 'react';

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

const AddWordPair: React.FC<Props> = ({ handleSubmit, languages }) => {
  const [state, setState] = useState({
    ...initialState,
  });
  const { primary, secondary } = state;

  const firstInput = useRef<HTMLInputElement>();

  const internalHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit({
      primaryValue: primary,
      secondaryValue: secondary,
    });
    setState({ ...initialState });
    firstInput?.current?.focus();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={internalHandleSubmit} className="AddWordPair">
      <TextField
        inputRef={firstInput}
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

export default AddWordPair;
