import * as actionTypes from "./actions";

const initialState = {
  counter: 0,
  results: [],
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      const newState = Object.assign({}, state); // this will not be the deep copy
      newState.counter = state.counter + 1;
      return newState;
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.value,
      };
    case actionTypes.SUBSTRACT:
      return {
        ...state,
        counter: state.counter - action.value,
      };
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ value: state.counter, id: new Date() }), // here push will mutate the same array but concat will return new array.
      };
    case actionTypes.DELETE_RESULT:
      // first approach
      //   const arrIndex = 2;
      //   const newArray = [...state.results];
      //   newArray.splice(arrIndex, 1);

      // second approach with filter method
      const newArray = state.results.filter(
        (result) => result.id !== action.resultId
      );

      return {
        ...state,
        results: newArray,
      };
    default:
      return state;
  }
};

export default reducers;
