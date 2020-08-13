export const changeTitle = (title) => {
  return {
    type: "GET_TITLE",
    payload: title,
  };
};

export const getImage = (image) => {
  return {
    type: "GET_IMAGE",
    payload: image,
  };
};

export const getTerm = (term) => {
  return {
    type: "GET_TERM",
    payload: term,
  };
};
