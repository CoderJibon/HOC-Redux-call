import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import BackgroundColor from "./Components/BackgroundColor/BackgroundColor";
import Counter from "./Components/Counter/Counter";
import CounterHOC from "./Components/CounterHOC/CounterHOC";

function App() {
  const color = useSelector((state) => state.colors);
  const IMG = useSelector((state) => state.img);
  const dispatch = useDispatch();
  return (
    <div style={{ backgroundColor: color, height: "100vh" }}>
      <div style={{ backgroundImage: `url(${IMG})` }}>
        <CounterHOC></CounterHOC>
        <BackgroundColor></BackgroundColor>
        <Counter></Counter>

        <div className="container pt-5">
          <div className="row justify-content-center">
            <div className="col-md-3">
              <div className="card">
                <div className="card-body">
                  SELECT BACKGROUND IMAGE
                  <hr />
                  <select
                    onChange={(e) =>
                      dispatch({ type: "IMG", payload: e.target.value })
                    }
                    className="form-select"
                    name=""
                    id=""
                  >
                    <option value="">--Choose--</option>
                    <option value="https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg">
                      Food
                    </option>
                    <option value="https://media.istockphoto.com/id/1358013032/photo/web-development-concept.jpg?b=1&s=170667a&w=0&k=20&c=aAR7goX4e7jDiUfx1SNA7lD04WldUv6okpifv80xGcw=">
                      Design
                    </option>
                    <option value="https://cdn3.mydukaan.io/app/image/700x700/?url=https://mydukaan.s3.amazonaws.com/4371158/a5252319-3ed2-43bf-a006-dafa72e4201b/1620967439577-adfa27b5-24bf-4172-a9ca-44d3d527a86e.jpeg">
                      ALO
                    </option>
                    <option value="https://cdn.britannica.com/84/73184-004-E5A450B5/Sunflower-field-Fargo-North-Dakota.jpg">
                      Flower
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
