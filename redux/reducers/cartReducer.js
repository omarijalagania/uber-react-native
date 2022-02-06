let defaultState = {
  selectedItems: { items: [], restaurauntName: "" },
};

let cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      let newState = { ...state };
      newState.selectedItems = {
        items: [...newState.selectedItems.items, action.payload],
        restaurauntName: action.payload.restaurauntName,
      };
      console.log(newState);
      return newState;
    }
    default:
      return state;
  }
};

export default cartReducer;
