export default function deleteItemsProcess(itemName, listSelection) {
  return (dispatch, getState) => {
    let itemsAddedUpdated = getState().itemsAdded;
    let filtered = itemsAddedUpdated.filter(obj => {
      return obj.name !== itemName;
    });

    dispatch({ type: "DELETE_ITEMS", itemsAdded: filtered });
  };
}
