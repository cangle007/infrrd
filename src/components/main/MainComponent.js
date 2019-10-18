import React, { Component } from "react";

import CheckOutModalComponent from "./CheckOutModalComponent";
import ContentComponent from "./ContentComponent";
import HeaderComponent from "./HeaderComponent";
import SidebarComponent from "./SidebarComponent";

export default class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listSelection: "men",
      itemAddedCounter: 0,
      searchText: ""
    };
  }

  handle_searchText = () => {
    this.setState({ searchText: "" });
  };

  onChange_searchText = event => {
    let searchTextTarget = event.target.value.toLowerCase().replace(/[&\\#,+()$~%'"*?<>{}[\]']/g, "");

    if (searchTextTarget) {
      this.setState({ searchText: searchTextTarget });
    } else {
      this.setState({ searchText: "" });
    }
  };

  handle_addItem = event => {
    let { itemAddedCounter, listSelection } = this.state;
    let { itemname } = event.currentTarget.dataset;

    this.props.add_Items(itemname, listSelection);
    this.setState({ itemAddedCounter: (itemAddedCounter += 1) });
  };

  handle_deleteItem = event => {
    let { itemAddedCounter, listSelection } = this.state;
    let { itemname } = event.currentTarget.dataset;

    if (itemAddedCounter > 0) {
      this.props.delete_Items(itemname, listSelection);
      this.setState({ itemAddedCounter: (itemAddedCounter -= 1) });
    }
  };

  handle_listSelection = event => {
    let { listpicked } = event.currentTarget.dataset;
    this.setState({ listSelection: listpicked });
  };

  handle_openCheckOutModal = event => {
    let modal = document.getElementById("checkOutModal");
    modal.style.display = "block"; //open modal

    window.onclick = event => {
      if (event.target === modal) {
        modal.style.display = "none"; // When the user clicks anywhere outside of the modal, close it
      }
    };
  };

  handle_closeCheckOutModal = event => {
    let modal = document.getElementById("checkOutModal");
    modal.style.display = "none";
  };

  render() {
    let { getItemsFlag, items, itemsAdded } = this.props;
    let { itemAddedCounter, listSelection, searchText } = this.state;

    return (
      <div className='main-container'>
        <div id='header-item'>
          <HeaderComponent
            itemAddedCounter={itemAddedCounter}
            onChange_searchText={this.onChange_searchText}
            handle_searchText={this.handle_searchText}
            handle_openCheckOutModal={this.handle_openCheckOutModal}
          />
        </div>
        <div id='sidebar-item'>
          <SidebarComponent handle_listSelection={this.handle_listSelection} />
        </div>
        <div id='content-item'>
          <ContentComponent
            getItemsFlag={getItemsFlag}
            items={items}
            searchText={searchText}
            listSelection={listSelection}
            handle_addItem={this.handle_addItem}
            handle_deleteItem={this.handle_deleteItem}
          />
        </div>

        <CheckOutModalComponent
          itemsAdded={itemsAdded}
          handle_deleteItem={this.handle_deleteItem}
          handle_closeCheckOutModal={this.handle_closeCheckOutModal}
        />
      </div>
    );
  }
}
