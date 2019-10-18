export default function flag_getItemsProcess(boolean) {
  return (dispatch, getState) => {
    dispatch({ type: "FLAG_GET_ITEMS", getItemsFlag: boolean });
  };
}
