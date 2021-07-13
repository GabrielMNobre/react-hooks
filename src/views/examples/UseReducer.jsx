import React, { useEffect, useReducer, useState } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

const initialState = {
  cart: [],
  user: null,
  number: 0,
};

const challengeInitialState = {
  number: 0,
  result: 0,
};

function challenge(state, action) {
  switch (action.type) {
    case 'number_add7':
      return { ...state, number: state.number + 7 };
    case 'number_add':
      return { ...state, number: state.number + parseInt(action.payload.number, 10) };
    case 'number_dividedBy25':
      return { ...state, number: state.number / 25 };
    case 'result':
      return { ...state, result: Math.ceil(state.number) };
    default:
      return state;
  }
}

// função de evolução do estado inicial
function reducer(state, action) {
  switch (action.type) {
    case 'number_add2':
      return { ...state, number: state.number + 2 };
    case 'login':
      return { ...state, user: { name: action.payload } };
    default:
      return state;
  }
}

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
          onClick={() => dispatch({ type: 'number_add2' })}
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
            onClick={() => dispatch({ type: 'login', payload: login })}
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
            onClick={() => challengeDispatch({ type: 'number_add7' })}
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
            onClick={() => challengeDispatch({
              type: 'number_add',
              payload: {
                number,
              },
            })}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default UseReducer;
