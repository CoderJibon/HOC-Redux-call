import React from "react";
import { useDispatch } from "react-redux";
import {
  BLUE,
  DARK,
  GOLD,
  GREEN,
  RED,
  SKY,
  WHITE,
  YELLOW,
} from "../../Redux/Colors/ColorsType";

const BackgroundColor = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <section className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body text-center">
                <h1>Pick the Background Color</h1>
                <hr />
                <button
                  onClick={() => dispatch({ type: WHITE })}
                  className="btn btn-primary"
                >
                  white
                </button>{" "}
                <button
                  onClick={() => dispatch({ type: RED })}
                  className="btn btn-primary"
                >
                  red
                </button>{" "}
                <button
                  onClick={() => dispatch({ type: YELLOW })}
                  className="btn btn-primary"
                >
                  yellow
                </button>{" "}
                <button
                  onClick={() => dispatch({ type: GREEN })}
                  className="btn btn-primary"
                >
                  green
                </button>{" "}
                <button
                  onClick={() => dispatch({ type: SKY })}
                  className="btn btn-primary"
                >
                  sky
                </button>{" "}
                <button
                  onClick={() => dispatch({ type: BLUE })}
                  className="btn btn-primary"
                >
                  blue
                </button>{" "}
                <button
                  onClick={() => dispatch({ type: DARK })}
                  className="btn btn-primary"
                >
                  dark
                </button>{" "}
                <button
                  onClick={() => dispatch({ type: GOLD })}
                  className="btn btn-primary"
                >
                  gold
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BackgroundColor;
