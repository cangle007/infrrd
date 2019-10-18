import React from "react";
import MainComponent from "./MainComponent";

export default function MainPage({ itemsAdded, add_Items, delete_Items, getItemsFlag, items }) {
  return (
    <div>
      <MainComponent
        add_Items={add_Items}
        delete_Items={delete_Items}
        getItemsFlag={getItemsFlag}
        itemsAdded={itemsAdded}
        items={items}
      />
    </div>
  );
}
