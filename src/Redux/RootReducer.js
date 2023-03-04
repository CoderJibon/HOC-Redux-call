import { combineReducers } from "redux";
import BGImage from "./BDImage/BDImage";
import ColorsReducer from "./Colors/ColorsReducer";
import CounterReducer from "./CounterReducer/CounterReducer";

//rootReducer
const RootReducer = combineReducers({
  counter: CounterReducer,
  colors: ColorsReducer,
  img: BGImage,
});

//export Root Reducer
export default RootReducer;
