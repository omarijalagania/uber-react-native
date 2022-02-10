import { combineReducers } from "redux";

import cartReducer from "./cartReducer";
import tokenReducer from "./tokenReducer";
let reducers = combineReducers({
  cartReducer: cartReducer,
  tokenReducer: tokenReducer,
});

const rootReducer = (state, action) => {
  return reducers(state, action);
};

export default rootReducer;
