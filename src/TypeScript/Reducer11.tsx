import React, { useReducer } from "react";
const initialState = { count: 0 };
type State = {
  count: number;
};
type Action = Action1 | Action2;
type Action1 = {
  type: "increament" | "decrement";
  payload: number;
};
type Action2 = {
  type: "reset";
};

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "increament":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };

    default:
      return state;
  }
}
function Count() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button
        onClick={() => {
          dispatch({ type: "increament", payload: 5 });
        }}
      >
        increament
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement", payload: 5 });
        }}
      >
        decrement
      </button>
    </>
  );
}
export default Count;
