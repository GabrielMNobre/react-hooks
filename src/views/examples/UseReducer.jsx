import React, { useReducer, useState } from 'react';
import PageTitle from '../../components/layout/PageTitle';

const initialState = {
  cart: [],
  user: null,
  number: 0,
};

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
  const [login, setLogin] = useState('');

  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
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
    </div>
  );
}

export default UseReducer;
