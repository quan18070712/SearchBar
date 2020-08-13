export const imageReducers = (state = [], actions) => {
    switch (actions.type) {
      case "GET_IMAGE":
        return actions.payload;
      default:
        return state;
    }
  };
  