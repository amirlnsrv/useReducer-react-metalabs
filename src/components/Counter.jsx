import { useReducer } from "react";

const initState = {
  count: 0,
  history: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment": {
      const newVal = state.count + 1;
      return {
        count: newVal,
        history: [...state.history, newVal],
      };
    }
    case "decrement": {
      const newVal = state.count - 1;
      return {
        count: newVal,
        history: [...state.history, newVal],
      };
    }
    default:
      return state;
  }
};

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <p>история изменений: {state.history.join(", ")}</p>
    </>
  );
};
