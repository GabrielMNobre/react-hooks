import { reducer, challenge } from './reducers';

const initialState = {
  cart: [],
  user: null,
  number: 0,
};

const challengeInitialState = {
  number: 0,
  result: 0,
};

export {
  reducer,
  challenge,
  initialState,
  challengeInitialState,
};
