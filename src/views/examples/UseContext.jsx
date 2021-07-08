import React, { useContext, useEffect } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

import DataContext from '../../data/DataContext';
import { AppContext } from '../../data/Store';

function UseContext() {
  const { state, setState } = useContext(DataContext);

  function sumNumber(delta) {
    setState({
      ...state,
      number: state.number + delta,
    });
  }

  const {
    number, text, setText, setNumber,
  } = useContext(AppContext);

  useEffect(() => {
    if (number > 1240) {
      setText('Context API + Hooks >= 1240');
    }
  }, [number]);

  return (
    <div className="UseContext">
      <PageTitle
        title="Hook UseContext"
        subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
      />
      <SectionTitle
        title="Exercício #01 - Acessa contexto sem acoplamento"
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

      <SectionTitle
        title="Exercício #02 - Acessa contexto com acoplamento"
      />
      <div className="center">
        <span className="text">
          { text }
        </span>
        <span className="text">
          { number }
        </span>
        <div>
          <button
            className="btn"
            type="button"
            onClick={() => setNumber(number + 1)}
          >
            +1
          </button>
          <button
            className="btn"
            type="button"
            onClick={() => setNumber(number - 1)}
          >
            -1
          </button>
        </div>
      </div>
    </div>
  );
}

export default UseContext;
