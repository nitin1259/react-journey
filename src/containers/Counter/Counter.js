import React, { Component } from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
        <CounterControl
          label="Subtract 5"
          clicked={this.props.onSubstractCounter}
        />
        <hr></hr>
        <button onClick={this.props.onStoreResult}>Store Result</button>

        <ul style={{ textDecoration: "none" }}>
          {this.props.storedResult.map((storeresult) => {
            return (
              <li
                key={storeresult.id}
                onClick={() => {
                  this.props.onDeleteResult(storeresult.id);
                }}
              >
                {" "}
                {storeresult.value}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.counter,
    storedResult: state.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({ type: "INCREMENT" }),
    onDecrementCounter: () => dispatch({ type: "DECREMENT" }),
    onAddCounter: () => dispatch({ type: "ADD", value: 5 }),
    onSubstractCounter: () => dispatch({ type: "SUBSTRACT", value: 5 }),
    onStoreResult: () => dispatch({ type: "STORE_RESULT" }),
    onDeleteResult: (id) => dispatch({ type: "DELETE_RESULT", resultId: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
