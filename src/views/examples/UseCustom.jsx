import React from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';
import useCounter from '../../hooks/useCounter';

function UseRef() {
  const [count, inc, dec] = useCounter();

  return (
    <div className="UseCustom">
      <PageTitle
        title="Meu Hook"
        subtitle="Vamos aprender como criar o nosso próprio Hook!"
      />
      <SectionTitle
        title="Exercício #01"
      />
      <div className="center">
        <span className="text">{count}</span>
        <div>
          <button
            className="btn"
            type="button"
            onClick={() => inc()}
          >
            +1
          </button>
          <button
            className="btn"
            type="button"
            onClick={() => dec()}
          >
            -1
          </button>
        </div>
      </div>
    </div>
  );
}

export default UseRef;
