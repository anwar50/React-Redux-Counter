import React from "react";
import { connect } from "react-redux";
import { TiPlusOutline, TiMinus } from "react-icons/ti";
import "../css/Counter.css";

class Counter extends React.Component {
  incrementCounter = () => {
    this.props.dispatch({ type: "INCREMENT" });
  };

  decrementCounter = () => {
    this.props.dispatch({ type: "DECREMENT" });
  };

  render() {
    return (
      <div className="counter-box">
        <h1 className="title">Counter</h1>
        <div>
          <button onClick={this.decrementCounter}>
            <TiMinus />
          </button>
          <span style={{ color: "blue" }}>{this.props.counter}</span>
          <button onClick={this.incrementCounter}>
            <TiPlusOutline />
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter,
});
export default connect(mapStateToProps)(Counter);
