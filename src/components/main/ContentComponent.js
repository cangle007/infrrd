import React from "react";

export default function ContentComponent({
  handle_deleteItem,
  getItemsFlag,
  items,
  searchText,
  listSelection,
  handle_addItem
}) {
  return (
    <div className='content-container'>
      <div id='display-item'>
        {getItemsFlag === true && listSelection === "men"
          ? items.men.map((obj, i) => {
              let expression = new RegExp(searchText, "g");
              let matched = obj.name.toLowerCase().match(expression);

              if (matched) {
                return (
                  <div key={i} className='items-container'>
                    <div id='itemImage-item'>
                      <img src={obj.img} alt={obj.name} />
                    </div>

                    <div id='itemDetails-item'>
                      <span>{obj.name}</span>
                      <p>{"$ " + obj.price}</p>
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
              } else {
                return false;
              }
            })
          : ""}

        {getItemsFlag === true && listSelection === "women"
          ? items.women.map((obj, i) => {
              let expression = new RegExp(searchText, "g");
              let matched = obj.name.toLowerCase().match(expression);

              if (matched) {
                return (
                  <div key={i} className='items-container'>
                    <div id='itemImage-item'>
                      <img src={obj.img} alt={obj.name} />
                    </div>

                    <div id='itemDetails-item'>
                      <span>{obj.name}</span>
                      <p>{"$ " + obj.price}</p>
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
              } else {
                return false;
              }
            })
          : ""}
      </div>
    </div>
  );
}
