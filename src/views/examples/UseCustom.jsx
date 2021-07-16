import React from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';
import useCounter from '../../hooks/useCounter';
import useFetch from '../../hooks/useFetch';

function UseRef() {
  const [count, inc, dec] = useCounter();
  const url = 'http://files.cod3r.com.br/curso-react/estados.json';
  const response = useFetch(url);

  return (
    <div className="UseCustom">
      <PageTitle
        title="Meu Hook"
        subtitle="Vamos aprender como criar o nosso próprio Hook!"
      />
      <SectionTitle
        title="Exercício #01 - Contador"
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
      <SectionTitle
        title="Exercício #02 - Fetch"
      />
      <div className="center">
        <select name="estados">
          {
            response.data
              ? (
                response.data.map((estado) => (
                  <option key={estado.sigla}>
                    { `${estado.sigla} - ${estado.nome}` }
                  </option>
                ))
              )
              : false
          }
        </select>
      </div>
    </div>
  );
}

export default UseRef;
