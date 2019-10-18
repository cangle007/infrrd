import { items } from '../../api/getItems';

export default function getItemsProcess() {
  return (dispatch, getState) => {
    dispatch({ type: 'GET_ITEMS', items: items, getItemsFlag: true });
  };
}
