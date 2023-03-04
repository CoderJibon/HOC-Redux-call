import { DESC, INC, RANDOM, RESET } from "./CounterType";

//initialize State
const initializeState = 0;

// Counter reducer
const CounterReducer = (state = initializeState, { type, payload }) => {
  switch (type) {
    case INC:
      return (state = state + 1);
    case DESC:
      return (state = state - 1);
    case RESET:
      return (state = 0);
    case RANDOM:
      return (state = payload);
    default:
      return state;
  }
};

export default CounterReducer;
