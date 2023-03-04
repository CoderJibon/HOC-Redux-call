import { createStore } from "redux";
import RootReducer from "./RootReducer";

//Create Store
const Store = createStore(RootReducer);

//export Store
export default Store;
