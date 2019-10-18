import React from 'react';

export default function ContentComponent({
  filterText,
  getItemsFlag,
  items,
  sidebarQuery,
  handle_addItem,
  handle_deleteItem
}) {
  return (
    <div className='content-container'>
      <div id='display-item'>
        {getItemsFlag === true && sidebarQuery === 'men'
          ? items.men.map((obj, i) => {
              let expression = new RegExp(filterText, 'g');
              let matched = obj.name.toLowerCase().match(expression);

              if (matched) {
                return (
                  <div key={i} className='items-container'>
                    <div id='itemImage-item'>
                      <img src={obj.img} alt={obj.name} />
                    </div>

                    <div id='itemDetails-item'>
                      <span>{obj.name}</span>
                      <p>{'$ ' + obj.price}</p>
                    </div>

                    <div id='cart-item'>
                      <span
                        data-itemname={obj.name}
                        onClick={event => {
                          handle_addItem(event);
                        }}
                      >
                        +ADD
                      </span>{' '}
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
          : ''}

        {getItemsFlag === true && sidebarQuery === 'women'
          ? items.women.map((obj, i) => {
              let expression = new RegExp(filterText, 'g');
              let matched = obj.name.toLowerCase().match(expression);

              if (matched) {
                return (
                  <div key={i} className='items-container'>
                    <div id='itemImage-item'>
                      <img src={obj.img} alt={obj.name} />
                    </div>

                    <div id='itemDetails-item'>
                      <span>{obj.name}</span>
                      <p>{'$ ' + obj.price}</p>
                    </div>

                    <div id='cart-item'>
                      <span
                        data-itemname={obj.name}
                        onClick={event => {
                          handle_addItem(event);
                        }}
                      >
                        +ADD
                      </span>{' '}
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
          : ''}
      </div>
    </div>
  );
}
