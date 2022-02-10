let defaultState = {
  token: "",
};

let tokenReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_TOKEN": {
      let newState = { ...state };
      newState.token = action.payload;
      return newState;
    }

    default:
      return state;
  }
};

export default tokenReducer;
