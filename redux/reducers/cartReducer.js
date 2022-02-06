let defaultState = {
  selectedItems: { items: [], restaurauntName: "" },
};

let cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      let newState = { ...state };
      if (action.payload.checkboxValue) {
        newState.selectedItems = {
          items: [...newState.selectedItems.items, action.payload],
          restaurauntName: action.payload.restaurauntName,
        };

        return newState;
      } else {
        newState.selectedItems = {
          items: [
            ...newState.selectedItems.items.filter(
              (item) => item.title !== action.payload.title
            ),
          ],
          restaurauntName: action.payload.restaurauntName,
        };
      }
    }
    default:
      return state;
  }
};

export default cartReducer;
