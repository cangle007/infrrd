import React from "react";

import { Icon } from "semantic-ui-react";

export default function CheckOutModalComponent({ itemsAdded, handle_closeCheckOutModal, handle_deleteItem }) {
  return (
    <div id='checkOutModal' className='modal-container'>
      <div className='modal-content'>
        <span data-modal='checkOutModal' className='closeModal' onClick={handle_closeCheckOutModal}>
          &times;
        </span>

        <div className='reviewItems-container'>
          {itemsAdded.map((obj, i) => {
            return (
              <div key={i}>
                <Icon
                  size='big'
                  name='delete'
                  style={{ color: "black" }}
                  data-itemname={obj.name}
                  onClick={event => {
                    handle_deleteItem(event);
                  }}
                />
                <div id='reviewItemIMG'>
                  <img src={obj.img} alt={obj.img} />
                </div>
                <div id='reviewItemSummary'>
                  <div>
                    <h1>ITEM</h1>
                    <span>{obj.name}</span>
                  </div>
                  <br />

                  <div>
                    <h1>PRICE</h1>
                    <span>{obj.price}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className='calculation-container'>
          <div>
            <h1>TOTAL ITEMS</h1>
            <span>{itemsAdded.length === 0 ? "" : itemsAdded.length}</span>
          </div>

          <div>
            <h1>TOTAL AMOUNT USD</h1>
            <span>
              {itemsAdded.map(obj => {
                let sum = 0;
                sum += obj.price;

                return "$ " + sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
