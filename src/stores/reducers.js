const initialState = {
  counter: 0,
};

const reducers = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "DECREMENT") {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }
  if (action.type === "ADD") {
    return {
      ...state,
      counter: state.counter + action.value,
    };
  }
  if (action.type === "SUBSTRACT") {
    return {
      ...state,
      counter: state.counter - action.value,
    };
  }
  return state;
};

export default reducers;
