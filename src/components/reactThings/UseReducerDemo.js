import React, { useState, useReducer } from "react";

const buttonStyle = {
  margin: "10px",
};

// like micro db for this component
const inititalState = {
  count: 0,
  history: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + action.step,
        history: [...state.history, state.count + action.step],
      };
    case "decrement":
      return {
        ...state,
        count: state.count - action.step,
        history: [...state.history, state.count - action.step],
      };
    case "reset":
      return {
        ...state,
        count: 0,
        history: [],
      };
    default:
      return state;
  }
};

const useReducerDemo = () => {
  const [state, dispatch] = useReducer(reducer, inititalState);
  const [step, setStep] = useState(1);

  // reset the count and history
  const handleReset = () => {
    dispatch({ type: "reset" });
    setStep(1);
  };

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <p>History: {state.history.join(", ")}</p>
      <button
        style={buttonStyle}
        onClick={() => dispatch({ type: "increment", step })}
      >
        Increment
      </button>
      <button
        style={buttonStyle}
        onClick={() => dispatch({ type: "decrement", step })}
      >
        Decrement
      </button>
      <button style={buttonStyle} onClick={handleReset}>
        Reset
      </button>
      <input
        type="number"
        value={step}
        onChange={(e) => setStep(parseInt(e.target.value))}
      />
    </div>
  );
};

export default useReducerDemo;
