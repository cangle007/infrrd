import { items } from "../../api/getItems";

export default function addItemsProcess(itemName, sidebarQuery) {
  return (dispatch, getState) => {
    let itemsAddedUpdated = getState().itemsAdded;

    let scope = items[sidebarQuery].find(obj => {
      return obj.name === itemName;
    });

    itemsAddedUpdated.push(scope);

    dispatch({ type: "ADD_ITEMS", itemsAdded: itemsAddedUpdated });
  };
}
