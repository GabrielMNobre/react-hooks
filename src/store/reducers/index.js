export function challenge(state, action) {
  switch (action.type) {
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

export function reducer(state, action) {
  switch (action.type) {
    case 'number_add':
      return { ...state, number: state.number + parseInt(action.payload.number, 10) };
    case 'login':
      return { ...state, user: { name: action.payload.user } };
    default:
      return state;
  }
}
