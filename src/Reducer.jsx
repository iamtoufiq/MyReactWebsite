const reducer = (state, action) => {
  if (action.type === "Home-update") {
    return {
      ...state,
      names: action.payload.names,
      images: action.payload.images,
    };
  }
  if (action.type === "About-update") {
    return {
      ...state,
      names: action.payload.names,
      images: action.payload.images,
    };
  }

  return state;
};
export default reducer;
