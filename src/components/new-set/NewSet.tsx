import { TextField } from '@material-ui/core';
import React, { ChangeEvent, useState } from 'react';

const NewSet = () => {
  const [state, setState] = useState({
    languages: {
      primary: 'polish',
      secondary: 'english',
    },
    title: null,
    description: null,
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

  const { title, description } = state;

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
    </div>
  );
};

export default NewSet;
