import * as actionTypes from "./../actions";

const initialState = {
  results: [],
};

const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        // results: state.results.concat({ value: state.counter, id: new Date() }), // here push will mutate the same array but concat will return new array.
        results: state.results.concat({
          value: action.storeVal,
          id: new Date(),
        }), // in combined Reducer we will not get other reducer state so we have to get the value from the action
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

export default resultReducer;
