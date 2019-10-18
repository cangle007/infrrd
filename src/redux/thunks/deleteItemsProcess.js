export default function deleteItemsProcess(itemName) {
  return (dispatch, getState) => {
    let itemsAddedUpdated = getState().itemsAdded;
    let flag = false;

    let filtered = itemsAddedUpdated.filter(obj => {
      if (flag) {
        return true;
      } else if (obj.name !== itemName) {
        return true;
      } else {
        flag = true;
        return false;
      }
    });

    dispatch({ type: 'DELETE_ITEMS', itemsAdded: filtered });
  };
}
