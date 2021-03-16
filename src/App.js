import Counter from "./Components/Counter";
import "./App.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
const initialState = {
  counter: 42,
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        counter: state.counter + 1,
      };
    case "DECREMENT":
      return {
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}
const store = createStore(reducer);
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
