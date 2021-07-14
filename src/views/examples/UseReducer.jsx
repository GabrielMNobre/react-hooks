import React, { useEffect, useReducer, useState } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';
import {
  reducer, challenge, initialState, challengeInitialState,
} from '../../store';
import { numberAdd, setUser } from '../../store/actions';

function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [challengeState, challengeDispatch] = useReducer(challenge, challengeInitialState);
  const [login, setLogin] = useState('');
  const [number, setNumber] = useState(0);

  useEffect(() => {
    challengeDispatch({ type: 'result' });
  }, [challengeState.number]);

  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />
      <SectionTitle
        title="Exercício #01 - Primeiro contato com UseReducer"
      />
      <div className="center">
        {
          state.user
            ? <span className="text">{ state.user.name }</span>
            : <span className="text">Nenhum usuário informado</span>
        }
        <span className="text">
          { state.number }
        </span>
        <button
          type="button"
          className="btn"
          onClick={() => numberAdd(dispatch, 2)}
        >
          +2
        </button>
        <div>
          <input
            type="text"
            className="input"
            onChange={(e) => setLogin(e.target.value)}
          />
          <button
            type="button"
            className="btn"
            onClick={() => setUser(dispatch, login)}
          >
            LOGIN
          </button>
        </div>
      </div>
      <SectionTitle
        title="Desafio UseReducer"
      />
      <div className="center">
        <span className="text">{ challengeState.result }</span>
        <div>
          <button
            type="button"
            className="btn"
            onClick={() => numberAdd(challengeDispatch, 7)}
          >
            +7
          </button>
          <button
            type="button"
            className="btn"
            onClick={() => challengeDispatch({ type: 'number_dividedBy25' })}
          >
            &divide;25
          </button>
        </div>
        <div>
          <input
            type="number"
            className="input"
            onChange={(e) => setNumber(e.target.value)}
          />
          <button
            type="button"
            className="btn"
            onClick={() => numberAdd(challengeDispatch, number)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default UseReducer;
