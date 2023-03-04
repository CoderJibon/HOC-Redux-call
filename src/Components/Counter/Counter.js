import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DESC,
  INC,
  RANDOM,
  RESET,
} from "../../Redux/CounterReducer/CounterType";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="py-5 container">
      <div className="row justify-content-center">
        <div className="col-md-4 ">
          <div className="card">
            <div className="card-body text-center">
              <h1>{counter}</h1>
              <hr />
              <button
                onClick={() => dispatch({ type: INC })}
                className="btn btn-primary"
              >
                ++
              </button>{" "}
              <button
                onClick={() => dispatch({ type: DESC })}
                className="btn btn-primary"
              >
                --
              </button>{" "}
              <button
                onClick={() => dispatch({ type: RESET })}
                className="btn btn-primary"
              >
                Reset
              </button>{" "}
              <button
                onClick={() =>
                  dispatch({
                    type: RANDOM,
                    payload: Math.floor(Math.random() * 1000 + 1000),
                  })
                }
                className="btn btn-primary"
              >
                Random
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
