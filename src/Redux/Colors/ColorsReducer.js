import { BLUE, DARK, GOLD, GREEN, RED, SKY, WHITE, YELLOW } from "./ColorsType";

const initializeState = "white";

//Colors Reducer
const ColorsReducer = (state = initializeState, { type, payload }) => {
  switch (type) {
    case WHITE:
      return (state = "white");
    case RED:
      return (state = "red");
    case YELLOW:
      return (state = "yellow");
    case GREEN:
      return (state = "green");
    case SKY:
      return (state = "skyblue");
    case BLUE:
      return (state = "blue");
    case DARK:
      return (state = "#000");
    case GOLD:
      return (state = "gold");
    default:
      return state;
  }
};

//Export
export default ColorsReducer;
