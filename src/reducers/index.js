import { combineReducers } from "redux";
import { titleReducers } from "./titleReducers";
import { imageReducers } from "./imageReducers";
import { termReducers } from "./termReducers";

export default combineReducers({
  title: titleReducers,
  image: imageReducers,
  term: termReducers,
});
