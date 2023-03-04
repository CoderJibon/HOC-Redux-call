//BG Image Reducer
const BGImage = (state = "", { type, payload }) => {
  switch (type) {
    case "IMG":
      return (state = payload);
    default:
      return state;
  }
};
//export
export default BGImage;
