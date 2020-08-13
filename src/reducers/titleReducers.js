export const titleReducers = (state = "Hello World", actions) => {
  switch (actions.type) {
    case "GET_TITLE":
      return actions.payload;
    default:
      return state;
  }
};
