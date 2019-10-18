import React from "react";

export default function ContentComponent({ handle_deleteItem, getItemsFlag, items, listSelection, handle_addItem }) {
  return (
    <div className='content-container'>
      <div id='display-item'>
        {getItemsFlag === true && listSelection === "men"
          ? items.men.map((obj, i) => {
              return (
                <div key={i} className='items-container'>
                  <div id='itemImage-item'>
                    <img src={obj.img} alt={obj.name} />
                  </div>

                  <div id='itemDetails-item'>
                    <span>{obj.name}</span>
                    <p>{obj.price}</p>
                  </div>

                  <div id='cart-item'>
                    <span
                      data-itemname={obj.name}
                      onClick={event => {
                        handle_addItem(event);
                      }}
                    >
                      +ADD
                    </span>{" "}
                    <span
                      data-itemname={obj.name}
                      onClick={event => {
                        handle_deleteItem(event);
                      }}
                    >
                      +REMOVE
                    </span>
                  </div>
                </div>
              );
            })
          : ""}

        {getItemsFlag === true && listSelection === "women"
          ? items.women.map((obj, i) => {
              return (
                <div key={i} className='items-container'>
                  <div id='itemImage-item'>
                    <img src={obj.img} alt={obj.name} />
                  </div>

                  <div id='itemDetails-item'>
                    <span>{obj.name}</span>
                    <p>{obj.price}</p>
                  </div>

                  <div
                    id='cart-item'
                    data-itemname={obj.name}
                    onClick={event => {
                      handle_addItem(event);
                    }}
                  >
                    <span>+ADD</span>
                  </div>
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
}
