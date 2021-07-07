import React, { useContext } from 'react';
import PageTitle from '../../components/layout/PageTitle';

import DataContext from '../../data/DataContext';

function UseContext() {
  const { state, setState } = useContext(DataContext);

  function sumNumber(delta) {
    setState({
      ...state,
      number: state.number + delta,
    });
  }

  return (
    <div className="UseContext">
      <PageTitle
        title="Hook UseContext"
        subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
      />
      <div className="center">
        <span className="text">{state.text}</span>
        <span className="text">{state.number}</span>
        <div>
          <button
            className="btn"
            type="button"
            onClick={() => sumNumber(1)}
          >
            +1
          </button>
          <button
            className="btn"
            type="button"
            onClick={() => sumNumber(-1)}
          >
            -1
          </button>
        </div>
      </div>
    </div>
  );
}

export default UseContext;
