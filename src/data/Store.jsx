import React, { createContext, useState } from 'react';

const initialState = {
  number: 1234,
  text: 'Context API + Hooks',
};

export const AppContext = createContext(initialState);

const Store = (props) => {
  const { children } = props;
  const [state, setState] = useState(initialState);

  function updateState(key, value) {
    setState({
      ...state,
      [key]: value,
    });
  }

  return (
    <AppContext.Provider
      value={{
        number: state.number,
        text: state.text,
        setNumber: (number) => updateState('number', number),
        setText: (text) => updateState('text', text),
      }}
    >
      { children }
    </AppContext.Provider>
  );
};

export default Store;
