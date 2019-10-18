import { compose, lifecycle } from "recompose";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import MainPage from "../../components/main/MainPage";

import addItemsProcess from "../thunks/addItemsProcess";
import deleteItemsProcess from "../thunks/deleteItemsProcess";
import getItemsProcess from "../thunks/getItemsProcess";
import flag_getItemsProcess from "../thunks/flag_getItemsProcess";

function mapStateToProps(state, ownProps) {
  return {
    itemsAdded: state.itemsAdded,
    items: state.items,
    getItemsFlag: state.getItemsFlag
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    add_Items: (itemName, listSelection) => {
      dispatch(addItemsProcess(itemName, listSelection));
    },
    delete_Items: itemName => {
      dispatch(deleteItemsProcess(itemName));
    },
    get_Item: () => {
      dispatch(getItemsProcess());
    },
    flag_getItems: boolean => {
      dispatch(flag_getItemsProcess(boolean));
    }
  };
}

const withlifecycle = lifecycle({
  /*LifeCycle: Birth/Mounting*/
  componentWillMount() {
    this.props.flag_getItems(false);
  },
  componentDidMount() {
    this.props.get_Item();
  },

  /*LifeCycle: Growth/Update*/
  componentDidUpdate(prevProps, prevState) {},

  /*LifeCycle: Death/Unmount*/
  componentWillUnmount() {
    this.props.flag_getItems(false);
  }
});

const connectToStore = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  connectToStore,
  withlifecycle
)(withRouter(MainPage));
