const initialState = {
  counter: 0,
};

const reducers = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    console.log("[increment]");
    return {
      counter: state.counter + 1,
    };
  }
  return state;
};

export default reducers;
