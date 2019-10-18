import React, { Component } from 'react';

import CheckOutModalComponent from './CheckOutModalComponent';
import ContentComponent from './ContentComponent';
import HeaderComponent from './HeaderComponent';
import SidebarComponent from './SidebarComponent';

export default class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarQuery: 'men',
      itemAddedCounter: 0,
      filterText: ''
    };
  }

  handle_filterText = () => {
    this.setState({ filterText: '' });
  };

  onChange_filterText = event => {
    let filterTextTarget = event.target.value.toLowerCase().replace(/[&\\#,+()$~%'"*?<>{}[\]']/g, '');

    if (filterTextTarget) {
      this.setState({ filterText: filterTextTarget });
    } else {
      this.setState({ filterText: '' });
    }
  };

  handle_addItem = event => {
    let { itemAddedCounter, sidebarQuery } = this.state;
    let { itemname } = event.currentTarget.dataset;

    this.props.add_Items(itemname, sidebarQuery);
    this.setState({ itemAddedCounter: (itemAddedCounter += 1) });
  };

  handle_deleteItem = event => {
    let { itemAddedCounter, sidebarQuery } = this.state;
    let { itemname } = event.currentTarget.dataset;

    if (itemAddedCounter > 0) {
      this.props.delete_Items(itemname, sidebarQuery);
      this.setState({ itemAddedCounter: (itemAddedCounter -= 1) });
    }
  };

  handle_sidebarQuery = event => {
    let { listpicked } = event.currentTarget.dataset;
    this.setState({ sidebarQuery: listpicked });
  };

  handle_openCheckOutModal = event => {
    let modal = document.getElementById('checkOutModal');
    modal.style.display = 'block'; //open modal

    window.onclick = event => {
      if (event.target === modal) {
        modal.style.display = 'none'; // When the user clicks anywhere outside of the modal, close it
      }
    };
  };

  handle_closeCheckOutModal = event => {
    let modal = document.getElementById('checkOutModal');
    modal.style.display = 'none';
  };

  render() {
    let { getItemsFlag, items, itemsAdded } = this.props;
    let { itemAddedCounter, sidebarQuery, filterText } = this.state;

    return (
      <div className='main-container'>
        <div id='header-item'>
          <HeaderComponent
            itemAddedCounter={itemAddedCounter}
            onChange_filterText={this.onChange_filterText}
            handle_openCheckOutModal={this.handle_openCheckOutModal}
          />
        </div>
        <div id='sidebar-item'>
          <SidebarComponent handle_sidebarQuery={this.handle_sidebarQuery} />
        </div>
        <div id='content-item'>
          <ContentComponent
            getItemsFlag={getItemsFlag}
            items={items}
            filterText={filterText}
            sidebarQuery={sidebarQuery}
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
