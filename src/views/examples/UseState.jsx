import React, { useState } from 'react';

import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

const UseState = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  // é possível setar setcount com um valor fixo (setCount(1)),
  // com uma expressão (setCount(count + 1)) ou
  // com uma arrow function (setCount(current => current + 1)) sendo current o valor atual de count

  return (
    <div className="UseState">
      <PageTitle
        title="Hook UseState"
        subtitle="Estado em componentes funcionais!"
      />
      <SectionTitle
        title="Exercício #01"
      />
      <div className="center">
        <span className="text">{ count }</span>
        <div>
          <button
            className="btn"
            onClick={() => setCount(count - 1)}
            type="button"
          >
            -1
          </button>
          <button
            className="btn"
            onClick={() => setCount(count + 1)}
            type="button"
          >
            +1
          </button>

        </div>
      </div>
      <SectionTitle
        title="Exercício #02"
      />
      <input
        type="text"
        className="input"
        placehoder="Insira seu nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div className="center text">
        { name }
      </div>
    </div>
  );
};

export default UseState;
