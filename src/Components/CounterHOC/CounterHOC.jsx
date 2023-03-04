import { Component } from "react";
import Counter from "../../HOC/Counter/Counter";

//counter components
class CounterHOC extends Component {
  render() {
    const { counter, handleDsc, handleInc, handleReset, handleRandom } =
      this.props;
    return (
      <>
        <div className="py-5 container">
          <div className="row justify-content-center">
            <div className="col-md-4 ">
              <div className="card">
                <div className="card-body text-center">
                  <h1>{counter}</h1>
                  <hr />
                  <button onClick={handleDsc} className="btn btn-primary">
                    --
                  </button>{" "}
                  <button onClick={handleInc} className="btn btn-primary">
                    ++
                  </button>{" "}
                  <button onClick={handleReset} className="btn btn-primary">
                    Reset
                  </button>{" "}
                  <button onClick={handleRandom} className="btn btn-primary">
                    Random
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

//export
export default Counter(CounterHOC);
