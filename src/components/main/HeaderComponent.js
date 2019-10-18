import React from "react";
import { Icon, Input, Popup } from "semantic-ui-react";

export default function HeaderComponent({
  itemAddedCounter,
  handle_openCheckOutModal,
  handle_searchText,
  onChange_searchText
}) {
  return (
    <div className='header-container'>
      <Input icon='search' placeholder='Filter...' onChange={onChange_searchText} />
      <Popup
        content={itemAddedCounter}
        open
        position='top center'
        trigger={
          <Icon
            id='cart-item'
            size='big'
            name='plus cart'
            style={{ color: itemAddedCounter > 0 ? "yellow" : "white" }}
            onClick={handle_openCheckOutModal}
          />
        }
      />
    </div>
  );
}
